#!/usr/bin/env node
/**
 * check.mjs — fail if any HTML file in the repo can be indexed.
 *
 * This repo is a private prototype served publicly at
 * https://tashicorp.github.io/cosive-homepage/. GitHub Pages has no access
 * control on a public repo, so the ONLY thing keeping these pages out of search
 * results is a robots meta tag in every single file. One page created without
 * it is one page that can be indexed.
 *
 *   node meta/generators/noindex/check.mjs           # report, exit 1 on failure
 *   node meta/generators/noindex/check.mjs --fix     # insert the tag, then report
 *
 * Run by the PostToolUse hook in .claude/settings.json after any .html write,
 * so a page cannot be created without the tag. Also safe to run by hand or in CI.
 *
 * Scope note: this covers .html only. Non-HTML files (CLAUDE.md, package.json,
 * llms.txt, meta/**) are also served publicly and CANNOT carry a meta tag.
 * Nothing in this repo can protect them — see README.md.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../../..');

const TAG = '<!-- github-pages-preview-only --><meta name="robots" content="noindex, nofollow">';
const SKIP_DIRS = new Set(['node_modules', '.git', '.claude']);
// Matches any robots meta whose content includes noindex, however it is spaced.
const HAS_NOINDEX = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i;

const fix = process.argv.includes('--fix');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      out.push(...(await walk(path.join(dir, e.name))));
    } else if (e.name.endsWith('.html')) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

const files = await walk(ROOT);
const bad = [];

for (const file of files) {
  const src = await readFile(file, 'utf8');
  if (HAS_NOINDEX.test(src)) continue;

  const rel = path.relative(ROOT, file);
  if (!fix) {
    bad.push(rel);
    continue;
  }

  // With a <head>, sit just after <meta charset>. Without one (the partials and
  // script fragments), line 1 — a stray meta is hoisted into head by the parser,
  // which is what _header.html has always relied on.
  const charset = src.match(/<meta\s+charset=["'][^"']*["']\s*\/?>\n?/i);
  const next = charset
    ? src.slice(0, charset.index + charset[0].length) + TAG + '\n' + src.slice(charset.index + charset[0].length)
    : TAG + '\n' + src;
  await writeFile(file, next);
  console.log(`  fixed  ${rel}`);
}

if (bad.length) {
  console.error(`\nnoindex check FAILED — ${bad.length} HTML file(s) can be indexed:\n`);
  for (const f of bad) console.error(`  ${f}`);
  console.error(`\nAdd this as the first line of <head> (or line 1 for a partial):\n  ${TAG}`);
  console.error(`Or run: node meta/generators/noindex/check.mjs --fix\n`);
  process.exit(1);
}

console.log(`noindex check passed — ${files.length} HTML file(s), all noindex.`);
