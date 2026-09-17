# meta/

Everything that is **not** loaded by the website.

The repo root is the preview site — HTML pages, `images/`, `icons/`, `logos/` and the header/footer
include machinery. If a browser never requests a file, it lives here instead.

| Directory | What it is |
|---|---|
| `content/` | Long-form copy drafts, not yet published |
| `design/` | Claude Design canvas source for the CTI-CMM page (`.dc.html` artboards) + `preflight.mjs` |
| `diagrams/` | D2 diagram sources and `render.sh`; rendered SVGs are hand-copied into `images/` |
| `docs/` | Component and page design documentation |
| `llms/` | `llms.txt` source and its archive — see `.claude/skills/llms-txt/` |
| `og/` | OG share-card generator (`npm run og`) |
| `tov/` | Cosive tone of voice guide — read before writing any copy |
| `fonts/` | woff2 files, used only by the OG generator; pages get Manrope from Google Fonts |

Loose files: `_og.html` and `organization-jsonld.html` are paste-into-Webflow snippets,
`cosive-logo.svg` is the logo master, `team-seo-kit.md` is an SEO reference.

## Paths

Tooling here reaches back to the repo root, so two path forms coexist:

- `meta/og/generate.mjs` sets `ROOT = resolve(HERE, '..', '..')` — the **repo root** — then reads
  `meta/fonts/…`, `logos/…` and `images/…` relative to it, and writes cards to `images/og/blog/`.
- `meta/design/preflight.mjs` reaches node_modules via `../../`.
- `.gitignore` patterns containing a slash are root-anchored, so entries for this tree are written
  `meta/design/**/*.pdf`, not `design/**/*.pdf`.

In prose, paths are written relative to the repo root (`images/shared/x.webp`), since that is how
everyone navigates the repo.

## Note

This directory is still served by the GitHub Pages preview, at `/meta/…`. Nesting it declutters the
root; it does not make anything private. The preview is `noindex`.
