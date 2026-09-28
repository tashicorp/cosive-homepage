#!/usr/bin/env node
/**
 * render-card.mjs — screenshot a static OG card mock at 1200x630.
 *
 * generate.mjs is for BLOG posts: it scrapes a live post URL for title, date,
 * author and banner. It has no path for a page that is not a blog post, which
 * is why the non-blog cards in images/og/ were rendered by hand. This does that
 * step reproducibly.
 *
 *   node meta/generators/og/render-card.mjs                  # every _og-*.html
 *   node meta/generators/og/render-card.mjs misp-training    # just that one
 *
 * Each `_og-<slug>.html` in this directory renders to `images/og/og-<slug>.png`.
 * Assets resolve relative to the mock, so it is opened over file:// from here
 * rather than being served.
 */
import { chromium } from 'playwright';
import { readdir, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../../..');
const OUT_DIR = path.join(ROOT, 'images/og');

const only = process.argv[2];

const mocks = (await readdir(HERE))
  .filter((f) => f.startsWith('_og-') && f.endsWith('.html'))
  .filter((f) => !only || f === `_og-${only}.html`);

if (!mocks.length) {
  console.error(only ? `No mock found: _og-${only}.html` : 'No _og-*.html mocks in ' + HERE);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
let failed = 0;

for (const mock of mocks) {
  const slug = mock.replace(/^_og-/, '').replace(/\.html$/, '');
  const out = path.join(OUT_DIR, `og-${slug}.png`);
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1, // true 1200x630, never a scaled-up capture
  });

  try {
    await page.goto(pathToFileURL(path.join(HERE, mock)).href, { waitUntil: 'networkidle' });
    // Webfonts and the logo both race the screenshot if we do not wait.
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() =>
      Promise.all([...document.images].map((i) => (i.complete ? null : i.decode().catch(() => null))))
    );

    // The card must not have overflowed its own 630px frame.
    const overflow = await page.evaluate(() => {
      const el = document.querySelector('.og');
      return el ? { h: el.scrollHeight, w: el.scrollWidth } : null;
    });
    if (overflow && (overflow.h > 630 || overflow.w > 1200)) {
      console.warn(`  ! ${slug}: content overflows the card (${overflow.w}x${overflow.h}) — copy may be too long`);
    }

    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    console.log(`  ok  ${path.relative(ROOT, out)}`);
  } catch (err) {
    failed++;
    console.error(`  FAIL ${mock}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
process.exit(failed ? 1 : 0);
