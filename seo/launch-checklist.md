# Cosive — Launch checklist (URLs, redirects, schema)

Do these at cutover, when the Webflow site moves from `/website-v2/…` staging routes to final
production URLs. Getting URLs right at launch protects the schema work (Parts C/D) and the rankings.

---

## 1. CloudMISP URL migration — final slug `/cloudmisp`

The most important, already-ranking page. It currently lives at `/capabilities/cloud-misp` (a CMS
artefact). Move it to a clean `/cloudmisp`.

**Live state (confirmed Aug 2026):**
- `/capabilities/cloud-misp` → **200** (the ranking page)
- `/cloud-misp` → 301 → `/capabilities/cloud-misp`
- `/cloudmisp` → 301 → `/capabilities/cloud-misp`
- `/capabilities/cloudmisp` → 404

**Do it in this order (avoids a redirect loop):**
1. **Delete** the existing redirects `/cloud-misp → /capabilities/cloud-misp` **and**
   `/cloudmisp → /capabilities/cloud-misp`. (If you skip this and add the new rule, you get a loop:
   `/cloudmisp ⇄ /capabilities/cloud-misp`, which breaks the page.)
2. Publish the page so **`/cloudmisp` returns 200**.
3. Add **`301 /capabilities/cloud-misp → /cloudmisp`**.
4. Add **`301 /cloud-misp → /cloudmisp`** (the hyphen variant — single hop).

**Notes**
- ✅ **No schema change needed** — every CloudMISP JSON-LD block already uses `https://www.cosive.com/cloudmisp`, and the `manage-my-misp` breadcrumb already points there.
- Keep all 301s **permanent** — a 301 passes full ranking signal; old backlinks live forever.
- Expect a **brief ranking wobble → recovery** over a few weeks. Monitor the CloudMISP page in
  Google Search Console (Performance + Coverage). There is no "Change of Address" step — that's
  domain-level; a single-URL move is handled entirely by the 301 + matching canonical.
- **Risk if done wrong:** redirect loop (step 1 skipped); duplicate content if both `/cloudmisp` and
  `/capabilities/cloud-misp` stay live without a redirect; lost equity if the 301 is ever removed.

---

## 2. ⭐ Final URL ↔ schema alignment (ALL pages) — highest-priority launch task

**Rule:** each page's final URL must **exactly equal** the `@id` / `url` / breadcrumb `item` in its
per-page JSON-LD (`seo/per-page-schema.md`) — and any absolute internal links. A mismatch = a
**conflicting canonical** on that page, which undermines the whole structured-data effort.

Our schema uses **flat, filename-based slugs**. The current **staging** routes are folder-nested with
different wording. Reconcile these before/at launch.

| Our schema slug (`per-page-schema.md`) | Current staging route | Match? |
|---|---|---|
| `/cyber-threat-intelligence` | `/website-v2/cyber-threat-intelligence` | ✅ |
| `/fraud-data-sharing` | `/website-v2/fraud-data-sharing` | ✅ |
| `/cloudmisp` | `/website-v2/cloudmisp` | ✅ |
| `/consume-share-fraud-data` | `/website-v2/fraud-data/consume-share-fraud-data` | slug ✅ / folder differs |
| `/build-and-integrate-fraud-tools` | `/website-v2/fraud-data/build-and-integrate-fraud-tools` | slug ✅ / folder differs |
| `/help-us-join-first` | `/website-v2/secops/help-us-join-first` | slug ✅ / folder differs |
| `/security-operations` | `/website-v2/secops/cyber-security-operations` | ❌ |
| `/consume-share-threat-intelligence` | `/website-v2/cti/consume-share-cyber-threat-intelligence` | ❌ |
| `/start-cti-sharing-community` | `/website-v2/cti/start-a-threat-intel-sharing-community` | ❌ |
| `/improve-cti-team` | `/website-v2/cti/improve-your-threat-intelligence-team` | ❌ |
| `/manage-my-misp` | `/website-v2/cti/manage-my-misp-for-me` | ❌ |
| `/build-and-integrate-cti-tools` | `/website-v2/cti/build-and-integrate-threat-intelligence-tools` | ❌ |
| `/find-useful-threat-intel-feeds` | `/website-v2/cti/find-useful-threat-intelligence-feeds` | ❌ |
| `/start-sharing-community` | `/website-v2/fraud-data/start-a-fraud-data-sharing-community` | ❌ |
| `/start-new-cybersecurity-ops-team` | `/website-v2/secops/start-a-new-cybersecurity-ops-team` | ❌ |
| `/improve-secops-team` | `/website-v2/secops/improve-my-cybersecurity-ops-team` | ❌ |
| `/automate-cybersecurity-ops-team` | `/website-v2/secops/automate-my-cybersecurity-operations` | ❌ |
| `/use-attack-framework` | `/website-v2/secops/use-the-att-ck-framework` | ❌ |
| `/build-and-integrate-secops-tools` | `/website-v2/secops/build-and-integrate-security-operations-tools` | ❌ |

**Decision to make:** for each page, pick the final URL, then either —
- **(a)** set the Webflow slug (and folder, if kept) to match the schema slug above, **or**
- **(b)** update the schema to the chosen final URL: `@id`, `url`, and breadcrumb `item` in
  `seo/per-page-schema.md`, plus the breadcrumb `item` on any page that references it, plus absolute
  internal links.

If you go with **(b)**, hand me the final slug list and I'll regenerate the blocks with the existing
`resync` / `merge-perpage-faq` scripts, then re-audit. **Also decide whether final URLs keep the
`/cti/ /secops/ /fraud-data/` folders** — if so, the breadcrumb `item` URLs (and Service `url`/`@id`)
must include the folder too.

*(Note: whichever slugs win, keep 301s from the old production URLs of any page that already ranks.)*

---

## 3. Delete the duplicate CTI page
`consume-share-cyber-threat-intelligence-copy` is a duplicate that carries the **same** `@id`s and
canonical as the real page. **Delete it** (or 301 it to the real page) before launch — two live URLs
claiming the same entity is a self-inflicted duplicate.

---

## 4. Site-wide URL hygiene (see `seo/README.md` for the full Webflow checklist)
- Global **self-referencing canonical** ON (Site settings → SEO).
- **XML sitemap** contains the **final URLs only** — regenerate/republish after slugs are finalised.
- **robots.txt** allows reputable AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)
  and references the sitemap.
- Every redirect resolves in **≤1 hop** to a 200 (no chains, no loops).

---

## 5. Post-cutover verification
- For each key URL: `curl -sI https://www.cosive.com/<slug>` → expect final **200**, **≤1** redirect,
  correct `Location` on any old→new hops.
- Re-run the **JSON-LD audit** (the Node fetch-and-parse used during this build) against the **final**
  URLs: confirm each page has its per-page `@graph` (Service + BreadcrumbList + FAQPage), it parses,
  `Service.provider → #organization`, and every `@id`/`url` matches the live URL.
- Google **Rich Results Test** + **validator.schema.org** on a couple of representative pages.

---

## Related (tracked elsewhere)
- AEO content pass → `seo/aeo-post-launch-plan.md`
- Deferred legal pages (Terms of Use, Fair Use Policy)
- Chris review of the CloudMISP Integrations example tool names
