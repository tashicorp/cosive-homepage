# Cosive site relaunch — SEO-safe go-live plan

**Goal:** launch the redesigned site (new home + CloudMISP replacing existing pages, ~20 new pages, `/capabilities/*` and `/capability-area/*` deprecated) **without the overall site or the surviving pages losing rankings**. Losing traffic to the deliberately-retired pages is acceptable; collateral damage to everything else is not.

**Companion file:** `qa/page-inventory.csv` — the keep/retire decision for all 206 current URLs. This plan tells you *how* to execute whatever that sheet says.

---

## The one thing that matters most

This is a **same-domain restructure** (`www.cosive.com` stays). That means:

- **No** Search Console "Change of Address" (that's only for domain moves).
- The entire risk surface is three things: **redirects, the sitemap, and the surviving pages staying byte-for-byte reachable.** Get those right and site-wide rankings are protected.
- The classic way these launches lose site-wide traffic is **not** the retired pages — it's (a) accidentally breaking or noindexing pages that were supposed to survive, and (b) mass-redirecting dead pages to the homepage, which Google treats as a "soft 404." We avoid both explicitly below.

Sources: [Google Search Central — Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Search Engine Land — Site migration SEO checklist](https://searchengineland.com/guide/ultimate-site-migration-seo-checklist).

---

## How each page bucket is handled

The CSV sorts all 206 URLs into three buckets. Handling per bucket:

### KEEP (105) — home, blog + 64 posts, team, presentations, core/legal
- **URL does not change.** No redirect. The only requirement is that the page still returns **200** at the exact same URL after launch.
- Home and CloudMISP are "replace in place": same URL, new content. That is *not* a migration event for Google — it's just a content update. Keep the URL identical.
- **Risk to watch:** don't let the relaunch accidentally unpublish, rename, or noindex any of these. The blog (65 URLs) and presentations (20) are a large share of the site's ranking footprint — they must survive untouched.

### RETIRE (44) — all `/capabilities/*` and `/capability-area/*`
- **301 redirect** each one to the closest surviving page (the `redirect_target` column in the CSV). A 301 passes ~all ranking signal/link equity to the target.
- **Never** point these at the homepage as a catch-all — Google classifies bulk "everything → /" redirects as soft-404s and drops the equity. Always redirect to the most *topically relevant* surviving page. The CSV already proposes one per row.
- **Webflow constraint:** Webflow's redirect table only serves **301s** — it cannot natively serve a **410 Gone**. That's fine: for these pages a 301-to-relevant is the preferred signal anyway.

### REVIEW (57) — old content/SEO pages, blog categories, past events
This is the bucket that decides whether the launch is safe. **Decide each row in the CSV**, then it falls into one of two paths:

- **Flip to KEEP** → leave live, URL unchanged. Recommended for anything that currently ranks or earns traffic (e.g. `/misp-guide`, `/threat-intelligence`, `/what-is-misp`, the `/misp-vs-*` comparisons). You don't have to link to them from the new nav — an "orphaned but indexed" page keeps its rankings. Cutting a page that ranks is a permanent traffic loss with no upside.
- **Flip to RETIRE** → add a `redirect_target` (closest surviving page) and 301 it, same rule as above.

**Recommendation:** before deciding, pull each REVIEW URL's last-12-months clicks/impressions from Search Console (Performance → Pages) and organic sessions from GA4. Retire only pages with ~zero traffic *and* no backlinks. When in doubt, KEEP — an orphaned page costs nothing; a wrongly-retired ranking page is gone.

> **410 vs 301 for genuinely dead pages:** in theory a page with no equity and no relevant target should return **410 Gone** (faster de-indexing, frees crawl budget). Webflow can't serve 410 natively — options are (a) 301 to the nearest relevant page anyway, or (b) simply delete/unpublish and let it 404 (Google drops 404s within weeks; they do **not** harm the rest of the site). Do **not** invent an irrelevant 301 just to avoid a 404.

---

## Pre-launch checklist

1. **Finalize `qa/page-inventory.csv`** — every row is KEEP or RETIRE; every RETIRE has a `redirect_target`. No rows left as REVIEW.
2. **Build the redirect map** from the CSV (path-only form for Webflow, e.g. `/capabilities/cloud-misp` → `/cloudmisp`). One row per RETIRE URL. Avoid redirect *chains* (A→B→C) — point every old URL at its **final** destination.
3. **Confirm every KEEP URL exists in the new build** at the identical path and returns 200. This is the highest-value check — script it (crawl the KEEP list, assert 200).
4. **Self-referencing `rel="canonical"`** on every new/replaced page (each page's canonical points to itself). Webflow adds this by default — verify it wasn't overridden.
5. **Remove staging noindex / robots blocks.** The single most common migration disaster is a `noindex` or `Disallow: /` left over from the staging site. Check `robots.txt` and every new page's meta robots before launch.
6. **Prepare the new `cosive-sitemap.xml`** — it must list **only** final live URLs (all KEEP + any REVIEW-kept). No retired URLs, no redirecting URLs. (I can regenerate this from the finalized CSV.)
7. **Update internal links** in the new pages to point directly at final URLs — internal links should never rely on a redirect.

## Launch-day sequence

1. Publish the new site (home + CloudMISP swap in place; new pages go live; retired pages unpublished).
2. **Immediately** add all 301 redirects in Webflow: **Site Settings → Publishing → 301 Redirects** (requires a paid plan). Redirects and the page-removal must go live together so no retired URL ever returns a bare 404 with no redirect.
3. Publish the updated `cosive-sitemap.xml`; **submit it in Search Console** (Sitemaps report). Leave the old sitemap submitted too, for now — Google uses it to re-crawl old URLs and discover the redirects faster.
4. Spot-check redirects live: `curl -I https://www.cosive.com/capabilities/cloud-misp` should return `301` → `/cloudmisp`. Test 8–10 representative RETIRE URLs.

Source: [Webflow — How do I set up redirects](https://help.webflow.com/hc/en-us/articles/33961294898835-How-do-I-set-up-redirects), [Finsweet — 301 redirects in Webflow](https://finsweet.com/seo/article/301-redirects).

## Post-launch monitoring (Search Console)

- **Keep all 301s in place ≥ 1 year** (Google's explicit guidance — signal transfer isn't instant).
- **Days 1–14: check daily.** Pages report → watch "Not indexed" for surviving pages that shouldn't be there; Crawl stats for spikes in 404s that *aren't* on your retire list (those are accidental breakage — fix immediately).
- **Weeks 2–8: check weekly.** Performance report → compare total site clicks/impressions vs the pre-launch baseline. Expect some wobble for 2–6 weeks as Google recrawls; a sustained site-wide drop = investigate redirects/noindex.
- Sitemaps report may warn that old-sitemap URLs "redirect" — that's **normal**, ignore it. Retire the old sitemap once the retired URLs drop out of the index (usually a few weeks).
- Expect: retired URLs fall out of the index (intended), their equity flows to redirect targets, surviving pages hold steady.

Sources: [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Intero Digital — 301 vs 404 vs 410](https://www.interodigital.com/blog/the-complete-guide-to-redirecting-deleted-pages-301-404-or-410/).

## Rollback

Because home/CloudMISP are content-swaps and the rest are additive + redirects, rollback is low-risk: unpublish new pages, remove the new redirects, re-publish previous content. Keep the pre-launch Webflow backup/version so you can revert the content swap if needed.

---

## Baseline to capture *before* launch (do this now)

So you can prove the launch didn't hurt the site, snapshot these while the old site is live:
- Search Console Performance: total clicks/impressions (last 3 months) + per-page for all KEEP and REVIEW URLs → export.
- GA4 organic sessions by landing page (last 3 months) → export.
- A full crawl of the current site (Screaming Frog or similar) → the list of every currently-indexed URL and its status.

---

## What I can generate next from the finalized CSV
1. **Webflow redirect map** — a paste-ready `old-path,new-path` list of every RETIRE row for Site Settings → Publishing → 301 Redirects.
2. **Rewritten `cosive-sitemap.xml`** — final live URLs only.
3. **A launch-day runbook** — the sequence above as a tickable checklist.
