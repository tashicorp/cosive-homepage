# meta/

Everything that is **not** loaded by the website.

The repo root is the preview site — HTML pages, `images/`, `icons/`, `logos/` and the header/footer
include machinery. If a browser never requests a file, it lives here.

Split by what the thing *is*:

```
meta/
  generators/     things that RUN
    og/           OG share-card generator — `npm run og`
      generate.mjs
      card.html   templated card (11 {{placeholders}}), driven by generate.mjs
      _og.html    one-off hardcoded CTI-CMM card mock — render and screenshot by hand
      fonts/      woff2 files, inlined as data URIs by generate.mjs
  reference/      things you READ
    tov/          Cosive tone of voice — read before writing any copy
    llms/         llms.txt source + archive, maintained by `/llms.txt`
```

## The rule for generators

**A generator owns the assets it consumes.** `fonts/` sits inside `generators/og/` because nothing
else uses it, and `generate.mjs` resolves it relative to the script's own directory (`HERE`) rather
than the repo root. That is deliberate: the fonts were previously at `meta/fonts/`, resolved via
`ROOT`, and were orphaned the moment the directory moved. `HERE`-relative assets travel with their
generator.

Only reach for `ROOT` (the repo root, `resolve(HERE, '..', '..', '..')`) when a generator genuinely
needs something from the website — `generate.mjs` does this for `logos/` and `images/`, and to write
its output to `images/og/blog/`.

## Running the OG generator

```bash
npm run og -- https://www.cosive.com/blog/<slug>
```

`playwright` also needs a browser binary that does **not** live in `node_modules`. On a fresh clone:

```bash
npm install
npx playwright install chromium
```

## Note

This directory is still served by the GitHub Pages preview, at `/meta/…`. Nesting it declutters the
root; it does not make anything private. The preview is `noindex`.
