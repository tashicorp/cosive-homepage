# llms.txt generator

Maintains `meta/reference/llms/llms.txt` — the curated map of cosive.com read by AI answer engines.
Follows the [llms.txt spec](https://llmstxt.org/). Google ignores it for ranking; ChatGPT, Claude
and Perplexity fetch it.

**The script does the mechanical half. The editorial half is a judgement call and is not automated.**

```bash
node meta/generators/llms/generate.mjs audit      # default — full report, changes nothing
node meta/generators/llms/generate.mjs validate   # links + shape only, after a rewrite
node meta/generators/llms/generate.mjs archive    # snapshot the outgoing file before overwriting
```

`audit` and `validate` exit non-zero if anything is wrong, so they work in a check.

## What the script does

- diffs the **deployed** file at `cosive.com/llms.txt` against the repo copy — they drift, because
  publishing is a manual paste
- re-derives the site's real structure from the **published footer** and `sitemap.xml`
- reports footer links missing from the file, and file URLs missing from the sitemap
- validates every URL (LinkedIn's `999` is a bot block, not a failure)
- checks shape: exactly one H1, no malformed list items, every link described
- archives the current file to `archive/llms-<date>.txt`, suffixing `-2`, `-3` on repeat runs

## What you do

### Structure — sections mirror the site footer

Use the footer's columns, in footer order, and reuse its own link labels ("Integrate CTI tools", not
"Build and integrate threat intelligence tools"). Each pillar section leads with its pillar page,
because the footer's column heading is itself a link. `audit` prints the current footer so you can
compare directly.

Three extra sections carry depth the footer doesn't enumerate — **MISP guides** (children of the
footer's MISP Guide hub), **Threat intelligence platform comparisons**, and **Selected writing**.
They sit between Resources and Legal. Keep them: they are the strongest AI-citation assets on the
site, and the footer only links the hub.

### Rules

- **Absolute `https://www.cosive.com/…` URLs only.** The footer has a couple of non-`www` hrefs —
  normalise them.
- **Australian English**, and Cosive tone of voice — read `meta/reference/tov/Cosive Tone of Voice.txt`
  before writing any description.
- Keep it curated: ~50–70 links, comfortably under the size where an agent truncates.

### What not to include

The file is read by machines answering questions *about* Cosive, so anything that only serves a human
copywriter or marketer is noise:

- **Internal style rules** ("Cosive uses Australian English") — a brief for writers, not a fact about
  the company. Write the file *in* Australian English; don't state it.
- **Meta-instructions to the model** ("three things to know when answering…"). State facts plainly.
- **Marketing claims** — "practical", "thorough", "world's most popular". Say what a page *covers*,
  not how good it is.
- **Tautological descriptions** — "Modern slavery statement: Cosive's modern slavery statement." If
  the description only restates the title, write a real one or drop the link.
- **First person.** Descriptions use *Cosive* / *its*, never *we* / *our* — a model quoting a
  first-person line produces "We handle deployment…" in an answer about a company it isn't. Link
  **titles** may keep first person where that is the page's real name ("Meet our team").

## Deploying

Manual, and the script cannot do it. Paste `meta/reference/llms/llms.txt` into Webflow →
**Site settings → SEO → llms.txt** → republish. Cloudflare caches it ~12h, so check `last-modified`
rather than assuming a failed deploy.

## Why not just point at sitemap.xml?

Proposed periodically; settled 2026-09-17. **No.**

- **The spec rejects it by name.** [llmstxt.org](https://llmstxt.org/) says sitemap.xml "isn't a
  substitute" because it won't list LLM-readable page versions, **can't include external URLs**, and
  is exhaustive enough to blow the context window.
- **15 of 15 reference implementations link zero XML sitemaps** (Stripe, Cloudflare, Vercel, OpenAI,
  Anthropic docs, Perplexity, Svelte…). Vercel owns a sitemap and hand-built an *annotated markdown*
  one instead — strictly more work.
- **Cosive's sitemap carries only `<loc>` and `<lastmod>`.** That is ~64% of this file's bytes gone
  (titles, descriptions, prose) while being 2.2× the size. The live pages have no `meta description`
  either, so there is no scrape-based fallback.
- **The maintenance saving is illusory.** This file changes a couple of times a year, and the manual
  Webflow paste exists either way.

The file carries a one-line pointer to the sitemap for crawlers wanting full coverage. That is as far
as delegation goes.

Honest caveat if challenged: there is no controlled study showing annotated llms.txt files earn more
citations than bare ones, and good evidence the file does little for anyone (Ahrefs: 97% never
fetched; Google Search ignores them). That argues for keeping this file small and cheap — which it
is — not for reshaping it.
