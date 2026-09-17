/**
 * llms.txt generator — the mechanical half of maintaining meta/reference/llms/llms.txt.
 *
 * Everything deterministic lives here: fetching the deployed file, diffing it against
 * the repo copy, re-deriving the site's real structure from the published footer and
 * sitemap, validating every link, checking the file's shape, and archiving the
 * outgoing version. The editorial half — curation, descriptions, tone of voice — is
 * a judgement call and stays with the model. See README.md.
 *
 * Usage:
 *   node meta/generators/llms/generate.mjs audit      # default: full report, changes nothing
 *   node meta/generators/llms/generate.mjs validate   # links + shape only (fast, post-rewrite)
 *   node meta/generators/llms/generate.mjs archive    # snapshot the current file, then exit
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..', '..');

const LLMS = join(ROOT, 'meta', 'reference', 'llms', 'llms.txt');
const ARCHIVE_DIR = join(ROOT, 'meta', 'reference', 'llms', 'archive');
const SITE = 'https://www.cosive.com';
const LIVE_LLMS = `${SITE}/llms.txt`;

/** LinkedIn answers bots with 999. It is a block, not a broken link. */
const BOT_BLOCKED = /^https:\/\/(www\.)?linkedin\.com\//;

const TTY = process.stdout.isTTY;
const bold = (s) => (TTY ? `\x1b[1m${s}\x1b[0m` : s);
const dim = (s) => (TTY ? `\x1b[2m${s}\x1b[0m` : s);
const head = (s) => console.log(`\n${bold(s)}`);

async function getText(url, init) {
  const res = await fetch(url, { redirect: 'follow', ...init });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return res.text();
}

/**
 * Parse the published footer into columns.
 * Two traps, both learned the hard way: attribute order is href-before-class, and the
 * three pillar columns use <a class="…heading-link"> while Capabilities/Company/
 * Resources/Legal use <h5 class="…heading-link">.
 */
function parseFooter(html) {
  const start = html.indexOf('<section class="v2-footer"');
  if (start === -1) throw new Error('footer markup not found — Webflow classes may have changed');
  const seg = html.slice(start);
  const strip = (t) => t.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

  const columns = [];
  const re = /<(a|h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(seg))) {
    const attrs = m[2];
    const text = strip(m[3]);
    if (!text) continue;
    const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1];
    const href = (attrs.match(/href="([^"]*)"/) || [, ''])[1];
    if (cls.includes('heading-link')) columns.push({ name: text, href, links: [] });
    else if (cls.includes('column-link') && columns.length) {
      columns[columns.length - 1].links.push({ text, href });
    }
  }
  return columns;
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

/** Parse our own llms.txt into sections of annotated links. */
function parseLlms(text) {
  const lines = text.split('\n');
  const h1 = lines.filter((l) => l.startsWith('# ')).length;
  const sections = [];
  const malformed = [];
  for (const line of lines) {
    if (line.startsWith('## ')) sections.push({ name: line.slice(3).trim(), links: [] });
    else if (line.startsWith('- ')) {
      const m = line.match(/^- \[([^\]]+)\]\(([^)]+)\)(?::\s*(.*))?$/);
      if (!m) { malformed.push(line); continue; }
      const link = { title: m[1], url: m[2], desc: m[3] || '' };
      if (sections.length) sections[sections.length - 1].links.push(link);
      else malformed.push(line);
    }
  }
  return { h1, sections, malformed, bytes: Buffer.byteLength(text) };
}

/** Check every URL, a few at a time so we do not hammer the origin. */
async function checkLinks(urls, concurrency = 6) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (i < urls.length) {
        const url = urls[i++];
        let status;
        try {
          const res = await fetch(url, { method: 'GET', redirect: 'follow' });
          status = res.status;
        } catch {
          status = 0;
        }
        const ok = status === 200 || (status === 999 && BOT_BLOCKED.test(url));
        out.push({ url, status, ok });
      }
    })
  );
  return out.sort((a, b) => a.url.localeCompare(b.url));
}

function readLocal() {
  if (!existsSync(LLMS)) throw new Error(`missing ${LLMS.replace(ROOT + '/', '')}`);
  return readFileSync(LLMS, 'utf8');
}

function archive(text) {
  mkdirSync(ARCHIVE_DIR, { recursive: true });
  const date = new Date().toISOString().slice(0, 10);
  let dest = join(ARCHIVE_DIR, `llms-${date}.txt`);
  let n = 2;
  while (existsSync(dest)) dest = join(ARCHIVE_DIR, `llms-${date}-${n++}.txt`);
  writeFileSync(dest, text);
  return dest.replace(ROOT + '/', '');
}

function reportShape(parsed) {
  head('Shape');
  const linkCount = parsed.sections.reduce((n, s) => n + s.links.length, 0);
  const undescribed = parsed.sections.flatMap((s) => s.links).filter((l) => !l.desc.trim());
  console.log(`  H1 count        ${parsed.h1}${parsed.h1 === 1 ? '' : '   <-- must be exactly 1'}`);
  console.log(`  sections        ${parsed.sections.length}`);
  console.log(`  links           ${linkCount}`);
  console.log(`  bytes           ${parsed.bytes}`);
  if (parsed.malformed.length) {
    console.log(`  malformed items ${parsed.malformed.length}   <-- must be 0`);
    parsed.malformed.forEach((l) => console.log(`      ${l.slice(0, 90)}`));
  }
  if (undescribed.length) {
    console.log(`  links with no description ${undescribed.length}   <-- every link needs one`);
    undescribed.forEach((l) => console.log(`      ${l.url}`));
  }
  return { linkCount, problems: parsed.malformed.length + undescribed.length + (parsed.h1 !== 1 ? 1 : 0) };
}

async function reportLinks(parsed) {
  head('Links');
  const urls = [...new Set(parsed.sections.flatMap((s) => s.links).map((l) => l.url))];
  const results = await checkLinks(urls);
  const bad = results.filter((r) => !r.ok);
  const blocked = results.filter((r) => r.status === 999);
  console.log(`  checked ${results.length} unique URLs — ${bad.length} broken`);
  blocked.forEach((r) => console.log(`  ${dim(`999 ${r.url} (bot block, not broken)`)}`));
  bad.forEach((r) => console.log(`  BROKEN ${r.status || 'ERR'}  ${r.url}`));
  return bad.length;
}

async function audit() {
  const local = readLocal();
  const parsed = parseLlms(local);

  head('Deployed vs repo');
  let live = null;
  try {
    live = await getText(LIVE_LLMS);
    if (live === local) console.log('  IN SYNC — the deployed file matches this repo');
    else {
      console.log('  DRIFTED — the deployed file differs from this repo.');
      console.log('  Someone edited in Webflow, or a repo change was never published.');
      console.log(`  live ${Buffer.byteLength(live)} bytes / repo ${parsed.bytes} bytes`);
    }
  } catch (e) {
    console.log(`  could not fetch ${LIVE_LLMS}: ${e.message}`);
  }

  head('Live footer (the sections this file should mirror)');
  const columns = parseFooter(await getText(SITE + '/'));
  for (const c of columns) {
    console.log(`  ## ${c.name}${c.href ? dim('  -> ' + c.href) : ''}`);
    c.links.forEach((l) => console.log(`       ${l.text}  ${dim('-> ' + l.href)}`));
  }

  head('Coverage vs footer');
  const canon = (u) => u.replace(/^https?:\/\/(www\.)?cosive\.com/, SITE).replace(/\/$/, '');
  const have = new Set(parsed.sections.flatMap((s) => s.links).map((l) => canon(l.url)));
  const missing = [];
  for (const c of columns) {
    for (const l of [...c.links, ...(c.href ? [{ text: c.name, href: c.href }] : [])]) {
      if (!l.href || /^(mailto:|#)/.test(l.href)) continue;
      const abs = l.href.startsWith('http') ? l.href : SITE + l.href;
      if (!have.has(canon(abs))) missing.push(`${l.text}  ${abs}`);
    }
  }
  if (missing.length) {
    console.log(`  ${missing.length} footer link(s) not in llms.txt — decide whether each belongs:`);
    missing.forEach((m) => console.log(`      ${m}`));
  } else console.log('  every footer link is represented');

  head('Sitemap');
  const sm = parseSitemap(await getText(SITE + '/sitemap.xml'));
  const smSet = new Set(sm.map((u) => u.replace(/\/$/, '')));
  const canon2 = (u) => u.replace(/^https?:\/\/(www\.)?cosive\.com/, SITE).replace(/\/$/, '');
  const notInSitemap = [...have].filter((u) => u.startsWith(SITE) && !smSet.has(canon2(u)));
  console.log(`  ${sm.length} URLs live; llms.txt curates ${have.size}`);
  if (notInSitemap.length) {
    console.log(`  ${notInSitemap.length} llms.txt URL(s) absent from the sitemap (redirects, or off-sitemap pages):`);
    notInSitemap.forEach((u) => console.log(`      ${u}`));
  }

  const shape = reportShape(parsed);
  const broken = await reportLinks(parsed);

  head('Next');
  console.log('  This script does not rewrite the file — curation and descriptions are editorial.');
  console.log('  Read meta/generators/llms/README.md, make the edits, then:');
  console.log('    node meta/generators/llms/generate.mjs validate');
  console.log('    node meta/generators/llms/generate.mjs archive   # before overwriting');
  console.log('  Deploy is manual: paste into Webflow -> Site settings -> SEO -> llms.txt.');
  return shape.problems + broken;
}

async function validate() {
  const parsed = parseLlms(readLocal());
  const shape = reportShape(parsed);
  const broken = await reportLinks(parsed);
  const total = shape.problems + broken;
  console.log(total === 0 ? '\n  PASS' : `\n  ${total} problem(s) — fix before archiving`);
  return total;
}

const cmd = process.argv[2] || 'audit';
try {
  if (cmd === 'audit') process.exit((await audit()) ? 1 : 0);
  else if (cmd === 'validate') process.exit((await validate()) ? 1 : 0);
  else if (cmd === 'archive') {
    console.log(`  archived -> ${archive(readLocal())}`);
    process.exit(0);
  } else {
    console.error(`unknown command: ${cmd}\nusage: generate.mjs [audit|validate|archive]`);
    process.exit(2);
  }
} catch (e) {
  console.error(`  ${e.message}`);
  process.exit(1);
}
