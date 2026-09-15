#!/usr/bin/env node
/**
 * Generate a branded 1200x630 Open Graph card for a live Cosive blog post.
 *
 * Why this exists: Webflow binds og:image to the post's featured image, and when
 * a post has no featured image it does not omit the tag — it emits
 * `<meta content="" property="og:image">`. Scrapers honour the empty value and
 * render a bare link card, and there is nothing to fall through to. This renders
 * the post's own banner as a share card instead, for posts with and without a
 * featured image alike.
 *
 *   node og/generate.mjs <post-url> [<post-url> ...]
 *   npm run og -- <post-url>
 *
 * Output: images/og/blog/<slug>/og-blog-post-<slug>.png — one folder per post,
 * opened along with the card when the run finishes.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { chromium } from 'playwright';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const OUT_DIR = join(ROOT, 'images', 'og', 'blog');

const WIDTH = 1200;
const HEIGHT = 630;

const FONTS = {
  FONT_MANROPE_400: 'fonts/manrope-400.woff2',
  FONT_MANROPE_600: 'fonts/manrope-600.woff2',
  FONT_MANROPE_700: 'fonts/manrope-700.woff2',
  FONT_GEIST_MONO_700: 'fonts/geist-mono-700.woff2',
};

const urls = process.argv.slice(2).filter((a) => !a.startsWith('-'));
if (!urls.length) {
  console.error('usage: node og/generate.mjs <post-url> [<post-url> ...]');
  process.exit(2);
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const dataUri = (buf, mime) => `data:${mime};base64,${Buffer.from(buf).toString('base64')}`;

const fileUri = (rel, mime) => dataUri(readFileSync(join(ROOT, rel)), mime);

/** Fetch a remote image and inline it, so the render never touches the network. */
async function inlineRemote(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`);
  const mime = res.headers.get('content-type')?.split(';')[0] || 'image/jpeg';
  return dataUri(await res.arrayBuffer(), mime);
}

/**
 * Pull the banner's fields off a live post.
 *
 * Note the live class names are inverted: `...card-author-title` holds the
 * person's NAME and `...card-author-name` holds their ROLE.
 */
async function scrape(page, url) {
  await page.goto(url, { waitUntil: 'networkidle' });
  const data = await page.evaluate(() => {
    const text = (sel, root = document) => root.querySelector(sel)?.textContent.trim() || null;
    return {
      title: text('h1.v2-heading-1'),
      category: text('a.v2-blog-category-badge'),
      date: text('.v2-blog-post-publish-date'),
      // Absent entirely when the post has no featured image — Webflow drops the
      // node rather than emitting an empty one, so presence is a clean signal.
      featured: document.querySelector('img.v2-blog-banner-featured-background')?.src || null,
      authors: [...document.querySelectorAll('.v2-blog-post-avatar-item')].map((el) => ({
        avatar: el.querySelector('img.v2-blog-post-author-avatar')?.src || null,
        name: text('.v2-blog-post-card-author-title', el),
        role: text('.v2-blog-post-card-author-name', el),
      })),
    };
  });

  for (const field of ['title', 'date']) {
    if (!data[field]) throw new Error(`no ${field} found on ${url} — has the banner markup changed?`);
  }
  return data;
}

function buildHtml(template, post, assets) {
  const background = assets.featured
    ? `<img class="bg-featured" src="${assets.featured}" alt="">`
    : `<div class="bg-fallback"></div>`;

  const authors = post.authors
    .map((a, i) => {
      const avatar = assets.avatars[i] ? `<img src="${assets.avatars[i]}" alt="">` : '';
      return `<div class="author">${avatar}<div class="author-text">
          <div class="author-name">${esc(a.name || '')}</div>
          <div class="author-role">${esc(a.role || '')}</div>
        </div></div>`;
    })
    .join('');

  return template
    .replace(/{{BACKGROUND}}/g, background)
    .replace(/{{TITLE}}/g, esc(post.title))
    .replace(/{{CATEGORY}}/g, esc(post.category || ''))
    .replace(/{{DATE}}/g, esc(post.date))
    .replace(/{{AUTHORS}}/g, authors)
    .replace(/{{PATTERN}}/g, assets.pattern)
    .replace(/{{LOGO}}/g, assets.logo)
    .replace(/{{(FONT_[A-Z0-9_]+)}}/g, (_, k) => assets.fonts[k]);
}

const slugOf = (url) => new URL(url).pathname.replace(/\/$/, '').split('/').pop();

const template = readFileSync(join(HERE, 'card.html'), 'utf8');
const fonts = Object.fromEntries(
  Object.entries(FONTS).map(([k, p]) => [k, fileUri(p, 'font/woff2')])
);
const pattern = fileUri('images/blog/hero-wave-field.svg', 'image/svg+xml');
const logo = fileUri('logos/cosive_logo_reverse_full_color_transparent_print.png', 'image/png');

const browser = await chromium.launch();
const written = [];
const folders = new Set();
let failed = 0;

for (const url of urls) {
  const slug = slugOf(url);
  try {
    const scrapePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const post = await scrape(scrapePage, url);
    await scrapePage.close();

    const assets = {
      fonts,
      pattern,
      logo,
      featured: post.featured ? await inlineRemote(post.featured) : null,
      avatars: await Promise.all(post.authors.map((a) => (a.avatar ? inlineRemote(a.avatar) : null))),
    };

    const card = await browser.newPage({
      viewport: { width: WIDTH, height: HEIGHT },
      deviceScaleFactor: 1,
    });
    await card.setContent(buildHtml(template, post, assets), { waitUntil: 'load' });
    await card.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((i) => (i.complete ? null : i.decode())));
    });

    // A long title pushes the post details up into the logo. Warn rather than
    // silently ship a card whose blocks have collided. Measures the logo and
    // the details together, since space-between only holds them apart while
    // there is slack left between them.
    const overflow = await card.evaluate(() => {
      const banner = document.querySelector('.banner');
      const blocks = [...banner.querySelectorAll(':scope > .padding-global')];
      const used = blocks.reduce((sum, el) => sum + el.getBoundingClientRect().height, 0);
      return Math.max(0, Math.round(used - (banner.getBoundingClientRect().height - 160)));
    });
    if (overflow > 0) console.warn(`  ! ${slug}: content overflows the banner padding by ${overflow}px`);

    // Author names and roles do not wrap, so a wide row is clipped at the card
    // edge rather than reflowing. 1104px is 1200 less the two 48px margins.
    const authorsWidth = await card.evaluate(() => {
      const el = document.querySelector('.authors');
      return el ? Math.round(el.scrollWidth) : 0;
    });
    if (authorsWidth > 1104) console.warn(`  ! ${slug}: author row is ${authorsWidth}px, clipped at 1104px`);

    // One folder per post, named for its slug, so a card can be handed over
    // without dragging its neighbours along.
    const folder = join(OUT_DIR, slug);
    const name = `og-blog-post-${slug}.png`;
    mkdirSync(folder, { recursive: true });
    const out = join(folder, name);
    writeFileSync(out, await card.screenshot({ type: 'png' }));
    await card.close();
    written.push(out);
    folders.add(folder);

    const variant = post.featured ? 'featured image' : 'wave fallback';
    const who = post.authors.map((a) => a.name).join(', ') || 'no authors';
    console.log(`✓ ${slug}/${name}  [${variant}]  ${post.category || 'no category'} · ${post.date} · ${who}`);
  } catch (err) {
    failed++;
    console.error(`✗ ${slug}: ${err.message}`);
  }
}

await browser.close();

// Open what was produced so the card can be eyeballed straight after the run,
// then the output folder in Finder so it is ready to drag into Webflow.
// Best-effort: a headless or non-macOS environment just skips both.
const open = (args) => new Promise((done) => execFile('open', args, () => done()));
if (written.length) {
  await open(written);
  await open([...folders]);
}

process.exit(failed ? 1 : 0);
