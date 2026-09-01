#!/usr/bin/env node
/**
 * Pre-publish check for a Claude Design canvas.
 *
 * Why this exists: the canvas helper silently clamps every artboard frame to
 * 120–8000px (documented only in a source comment inside seed-canvas.mjs), and
 * the frame does not shrink content — anything taller is simply cut off. Both
 * failures are invisible until someone opens the published canvas and notices
 * a section has vanished. This renders each artboard, measures it, and fails
 * loudly instead.
 *
 *   node preflight.mjs <dir>            # check
 *   node preflight.mjs <dir> --fix      # also write corrected heights
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { chromium } from '../node_modules/playwright/index.mjs';

const CAP = 8000;              // hard clamp in seed-canvas.mjs
const SLACK = 0.03;            // headroom for font-loading variance

const dir = resolve(process.argv[2] || '.');
const fix = process.argv.includes('--fix');
const canvasPath = join(dir, 'canvas.json');
if (!existsSync(canvasPath)) { console.error(`no canvas.json in ${dir}`); process.exit(2); }
const canvas = JSON.parse(readFileSync(canvasPath, 'utf8'));

/** Resolve a .dc.html into standalone HTML the way the runtime would. */
function toStatic(path, imgBase) {
  const src = readFileSync(path, 'utf8');
  const markup = src.match(/<x-dc>([\s\S]*?)<\/x-dc>/)[1];
  const helmet = (markup.match(/<helmet>([\s\S]*?)<\/helmet>/) || [, ''])[1];
  let body = markup.replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  const logic = src.match(/<script data-dc-script[^>]*>([\s\S]*?)<\/script>/)[1];
  const props = JSON.parse(src.match(/data-props='([^']*)'/)[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'"));
  const defaults = {};
  for (const [k, v] of Object.entries(props)) if (k[0] !== '$') defaults[k] = v.default;
  const Cls = new Function('DCLogic', logic + '; return Component;')(class {});
  const inst = new Cls();
  inst.props = defaults;
  const vals = inst.renderVals();
  const look = (s, p) => p.split('.').reduce((o, k) => (o == null ? undefined : o[k]), s);
  const pass = (h, scope) => h
    .replace(/<sc-for\s+list="\{\{\s*([\w.$]+)\s*\}\}"\s+as="(\w+)"[^>]*>([\s\S]*?)<\/sc-for>/g,
      (m, lp, as, inner) => (look(scope, lp) || []).map((it, i) => pass(inner, { ...scope, [as]: it, $index: i })).join(''))
    .replace(/<sc-if\s+value="\{\{\s*([\w.$]+)\s*\}\}"[^>]*>([\s\S]*?)<\/sc-if>/g,
      (m, p, inner) => (look(scope, p) ? pass(inner, scope) : ''))
    .replace(/\{\{\s*([\w.$]+)\s*\}\}/g, (m, p) => { const v = look(scope, p); return v == null ? '' : String(v); });
  body = pass(body, vals)
    .replace(/src="\.\/([^"]+)"/g, `src="${imgBase}/$1"`)
    .replace(/url\('\.\/([^']+)'\)/g, `url('${imgBase}/$1')`);
  return `<!doctype html><html><head><meta charset="utf-8">${helmet}</head><body>${body}</body></html>`;
}

const browser = await chromium.launch();
const rows = [];
for (const a of canvas.artboards) {
  const file = join(dir, a.file);
  if (!existsSync(file)) { rows.push({ file: a.file, err: 'missing file' }); continue; }
  const html = toStatic(file, 'file://' + dir);
  const tmp = join(dir, `.preflight-${a.file}`);
  writeFileSync(tmp, html);
  const ctx = await browser.newContext({ viewport: { width: a.w, height: 900 } });
  const page = await ctx.newPage();
  await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const m = await page.evaluate(() => ({
    h: Math.ceil(document.body.getBoundingClientRect().height),
    sw: document.body.scrollWidth
  }));
  await ctx.close();
  const { unlinkSync } = await import('fs'); unlinkSync(tmp);

  const effective = Math.min(a.h, CAP);
  const want = Math.ceil(m.h * (1 + SLACK));
  rows.push({
    file: a.file, w: a.w, content: m.h, frame: a.h, effective, want,
    clipped: m.h > effective,
    clamped: a.h > CAP,
    overflowX: m.sw > a.w,
    tooTall: m.h > CAP
  });
}
await browser.close();

let bad = 0;
console.log('artboard              width  content   frame  effective   status');
for (const r of rows) {
  if (r.err) { console.log(`  ${r.file.padEnd(20)} ${r.err}`); bad++; continue; }
  const notes = [];
  if (r.tooTall) notes.push(`CONTENT EXCEEDS THE ${CAP}px CAP — must be split into two artboards`);
  else if (r.clipped) notes.push(`CLIPPED by ${r.content - r.effective}px — raise h to ${r.want}`);
  if (r.clamped) notes.push(`h=${r.frame} is clamped to ${CAP}`);
  if (r.overflowX) notes.push('horizontal overflow');
  if (notes.length) bad++;
  console.log(`  ${r.file.padEnd(20)} ${String(r.w).padStart(5)} ${String(r.content).padStart(8)} ${String(r.frame).padStart(7)} ${String(r.effective).padStart(10)}   ${notes.length ? notes.join(' · ') : 'ok'}`);
}

if (fix) {
  let changed = 0;
  for (const a of canvas.artboards) {
    const r = rows.find(x => x.file === a.file);
    if (r && !r.err && !r.tooTall && a.h !== r.want) { a.h = r.want; changed++; }
  }
  if (changed) {
    writeFileSync(canvasPath, JSON.stringify(canvas, null, 2) + '\n');
    console.log(`\n--fix: rewrote ${changed} height(s) in canvas.json (remember to sync $preview and re-seed)`);
  }
}
console.log(bad ? `\nFAIL — ${bad} artboard(s) need attention` : '\nPASS — every artboard fits its frame, nothing clamped');
process.exit(bad && !fix ? 1 : 0);
