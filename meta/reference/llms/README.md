# llms.txt

Curated, machine-readable map of cosive.com for AI answer engines (ChatGPT, Claude, Perplexity).
Follows the [llms.txt spec](https://llmstxt.org/).

| Path | What it is |
|---|---|
| `llms.txt` | **The current version. Source of truth.** |
| `archive/llms-<YYYY-MM-DD>.txt` | Superseded versions, named by the date they were **retired** |

## Editing

Run **`/llms.txt`** — it audits the deployed file, re-derives the site structure from the live
footer and sitemap, rewrites, validates every link, and archives the outgoing version. The full
procedure lives in the `/llms.txt` command; the editorial rules live in
`meta/generators/llms/README.md`.

Two things that catch people out:

- **The repo's `_footer.html` is not the source of truth for URLs.** It still uses old flat slugs
  (`manage-my-misp.html`) that 404 live. The real journey pages sit under `/cti/`, `/secops/` and
  `/fraud-data/`. Read the footer off the published site.
- **`##` sections mirror the live footer's columns**, in footer order, reusing the footer's own link
  labels. When the footer changes, this file changes.

## Deploying

Publishing is **manual** — the file is served from the site root by Webflow, not from this repo:

1. Copy the contents of `llms.txt`.
2. Webflow → **Site settings → SEO → llms.txt**.
3. Republish.

It then serves at `https://www.cosive.com/llms.txt`. Cloudflare caches it for ~12h, so check the
`last-modified` header rather than assuming a failed deploy.
