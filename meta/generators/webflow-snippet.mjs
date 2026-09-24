#!/usr/bin/env node
// Builds the paste-ready Webflow snippet from the second IIFE in header-include.js.
// Comments are the repo's, not the live site's: they are stripped here so the
// block fits Webflow's 10,000-character custom-code limit alongside the existing
// head tags. header-include.js stays the documented source of truth.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');
const src = readFileSync(join(ROOT, 'header-include.js'), 'utf8');

const start = src.lastIndexOf('(function () {');
if (start < 0) throw new Error('could not find the CTA IIFE');

const out = [];
let inBlock = false;
for (const line of src.slice(start).split('\n')) {
  const t = line.trim();
  if (inBlock) { if (t.endsWith('*/')) inBlock = false; continue; }
  if (t.startsWith('/*')) { if (!t.endsWith('*/')) inBlock = true; continue; }
  if (t.startsWith('//')) continue;                 // whole-line comment
  if (t === '' && out[out.length - 1]?.trim() === '') continue;  // collapse blanks
  out.push(line);
}
const body = out.join('\n').replace(/\n{2,}/g, '\n').trimEnd();
const file = `<script>\n${body}\n</script>\n`;
const dest = join(ROOT, 'meta', 'reference', 'webflow', 'nav-contact-cta.html');
writeFileSync(dest, file);

const bad = [...new Set([...file].filter(c => c.charCodeAt(0) > 127))];
console.log(`wrote ${dest.replace(ROOT + '/', '')}`);
console.log(`  ${file.length} chars, non-ASCII: ${bad.length ? bad.join('') : 'none'}`);
console.log(`  head budget: ${file.length} + 4029 existing = ${file.length + 4029} / 10000`);
