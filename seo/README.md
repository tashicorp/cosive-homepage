# Cosive SEO + AEO implementation pack

Copy-paste-ready SEO/AEO improvements for the Webflow site (cosive.com). Based on a full audit of
all 20 pages plus current (2025–2026) Webflow SEO and AEO best practice.

## What's in here
| File | What it is | Where it goes in Webflow |
|---|---|---|
| `page-metadata.md` | Optimised **title + meta description** (+ OG title) for all 20 pages | Page settings → **SEO** tab (+ **Open Graph** tab) |
| `structured-data.md` | Site-wide **Organization/WebSite** JSON-LD + **Twitter card** tags | Site settings → **Head Code**; Twitter tags per page → **Custom Code → Head** |
| `per-page-schema.md` | **Service + BreadcrumbList** JSON-LD, one pair per page | Page settings → **Custom Code → Inside `<head>`** |
| `faqpage-schema.md` | **FAQPage** JSON-LD from each page's FAQ (⚠️ low priority — see note) | Page settings → **Custom Code → Inside `<head>`** |

## Do this in order (highest ROI first)
1. **Titles + meta descriptions** — paste from `page-metadata.md`. Fixes the 5 pages that have **no meta description today** (Home, Cyber Threat Intelligence, Fraud Data Sharing, Security Operations, Consume & Share Fraud Data) and tightens the other 15.
2. **Global canonical** — Site settings → SEO → turn on the self-referencing canonical (Webflow does **not** add canonicals by default). Uses `https://cosive.com/...` automatically.
3. **Open Graph** — per page, set the OG image + (optionally) the OG title from `page-metadata.md`. Needs a share image — see below.
4. **Twitter/X card tags** — paste the snippet from `structured-data.md` (Webflow's OG tab doesn't emit Twitter tags).
5. **Site-wide JSON-LD** — paste Organization + WebSite once in Site settings → Head Code.
6. **Per-page Service + Breadcrumb JSON-LD** — from `per-page-schema.md`.
7. **FAQPage JSON-LD** — optional, from `faqpage-schema.md`.

## Webflow settings checklist
- [ ] **Global canonical** ON (Site settings → SEO).
- [ ] **Auto-generate sitemap** ON (Site settings → SEO), then publish. ⚠️ It doesn't exclude `noindex` pages — use per-page **Sitemap indexing** toggles if needed.
- [ ] **robots.txt** — make sure it doesn't block reputable AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) if you want to be cited in AI answers. Add the sitemap reference.
- [ ] **Hero/above-the-fold images → Eager loading** (Image settings → Loading = Eager) to protect LCP. Webflow lazy-loads everything by default, which hurts the hero.
- [ ] **Alt text on the asset** (Assets panel), not per instance — every use inherits it. Webflow AI can draft it.
- [ ] Requires a **paid Site plan** to publish sitemap/robots/redirects to the custom domain.

## Structural fixes (small, worth doing)
- **Double H1 on the 3 pillar pages** — `cyber-threat-intelligence`, `fraud-data-sharing`, `security-operations` each mark the small eyebrow label ("Cyber Threat Intelligence" etc.) as an `<h1>` above the real hero `<h1>`. In Webflow, change that eyebrow element's tag from **H1 → a Text block / paragraph** (keep the styling via its class). One H1 per page.
- **Title separator** — the new titles standardise on `… | Cosive`. (The site currently mixes ` - `, ` — `, and none.)
- **Slugs** — confirm each canonical URL in `page-metadata.md` matches the live Webflow slug.

## You need an OG share image (prerequisite for step 3)
Create a **1200×630** image (keep logo/text within a centred 1080×600 safe zone, < 1 MB, JPG/PNG),
host it, and use its absolute URL for `{{OG_IMAGE_URL}}` in `structured-data.md`. A single branded
default is fine for all pages; per-page images are a nice-to-have. **I can generate a branded
1200×630 default on request.**

## Validate after pasting
Run the pages through **Google Rich Results Test** (search.google.com/test/rich-results) and the
**Schema Markup Validator** (validator.schema.org). All JSON-LD in this pack has been syntax-checked.

---

## AEO / GEO — next steps (not done this pass)
Classic SEO above is the foundation (most AI-answer citations come from pages already ranking).
When you want to push further into being **cited by ChatGPT / Perplexity / Google AI Overviews**,
the highest-value moves — evidence-backed (Princeton GEO study: +22–41% AI visibility) — are:
- **Answer-first FAQ + headings**: open each FAQ answer / section with a direct 40–60 word answer, then expand. Phrase headings as the real questions people ask.
- **Stats with named sources + inline citations** — the single most reliable lift for AI citation. Your MISP/CTIS operational experience and any proprietary data are strong, citable assets.
- **Named author bios + `Person` schema** (`sameAs` → LinkedIn) on key pages — a strong trust signal for a cybersecurity brand (E-E-A-T).
- **Entity consistency** — same brand description across the site and third-party profiles (LinkedIn, Crunchbase, etc.).

These involve editing on-page copy, so they were deferred (this pass was technical + metas). Happy
to do them as a follow-up.

## Notes on things that recently changed
- **FAQ rich results were removed by Google (May 2026).** FAQPage schema still parses for AI/machines but no longer shows the SERP dropdown — hence it's low priority here.
- **`llms.txt` — skip it.** Google confirmed it ignores the file; ~10% adoption with no measurable SEO/citation effect. Not worth adding for a marketing site.
- **Sitelinks searchbox is deprecated** — that's why the WebSite schema here omits `SearchAction`.
- **Title/description lengths aren't hard limits** — Google truncates by pixel width and often rewrites both; the targets here (≤60 / ~155) are safe display widths, not rules.
