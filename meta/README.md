# meta/

Everything that is **not** loaded by the website.

The repo root is the preview site — HTML pages, `images/`, `icons/`, `logos/` and the header/footer
include machinery. If a browser never requests a file, it lives here instead.

| Directory | What it is |
|---|---|
| `llms/` | `llms.txt` source and its archive — maintained by `/llms.txt`, see `.claude/skills/llms-txt/` |
| `og/` | OG share-card generator (`npm run og`) — **currently not runnable, see below** |
| `tov/` | Cosive tone of voice guide — read before writing any copy |

## `npm run og` is currently broken

`meta/og/generate.mjs` inlines four woff2 files as base64 data URIs so the rendered card needs no
network. Those fonts lived in `meta/fonts/`, which has been deleted, so the script throws `ENOENT`
as soon as it is given a URL.

To make it work again, pick one:

- restore `meta/fonts/{manrope-400,manrope-600,manrope-700,geist-mono-700}.woff2`
  (`git checkout 09397f0 -- meta/fonts`), or
- change `FONTS` in `generate.mjs` to load from Google Fonts instead of inlining — simpler, but the
  card then depends on the network at render time, or
- retire `meta/og/` if per-post cards are no longer wanted.

`playwright` also needs a browser binary that does **not** live in `node_modules`. On a fresh clone:
`npx playwright install chromium`.

## Paths

Tooling here reaches back to the repo root, so two path forms coexist:

- `meta/og/generate.mjs` sets `ROOT = resolve(HERE, '..', '..')` — the **repo root** — then reads
  `logos/…` and `images/…` relative to it, and writes cards to `images/og/blog/`.
- `.gitignore` patterns containing a slash are root-anchored, so entries for this tree must be
  written `meta/…`, not bare.

In prose, paths are written relative to the repo root (`images/shared/x.webp`), since that is how
everyone navigates the repo.

## Note

This directory is still served by the GitHub Pages preview, at `/meta/…`. Nesting it declutters the
root; it does not make anything private. The preview is `noindex`.
