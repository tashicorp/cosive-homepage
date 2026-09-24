# E-E-A-T Audit — cosive.com (live site)

*Audited 24 September 2026. Live site (www.cosive.com), not the repo mirror.*

## Context

Requested as a standalone assessment of how well cosive.com demonstrates Experience,
Expertise, Authoritativeness and Trust — the signals Google's quality rater guidelines and
answer engines use to judge whether content deserves to be cited.

**Scope:** the live production site only (not the repo mirror). **Findings only — no
remediation plan**, per the scoping decision.

**Method:** fetched and inspected the homepage, `/about`, `/team`, `/contact-us`, `/blog`,
two full blog posts, two team profile pages, and `/misp-vs-opencti`. Raw JSON-LD pulled
directly via HTTP rather than rendered text, so the structured-data findings are exact.

**Confidence caveat:** 2 of 12 blog posts were inspected at the schema level. Because
Webflow renders all posts from one collection template, defects found in both are almost
certainly present on all 12 — but that is inference, not per-post verification.

**Checked and cleared:** the repo staging mirror contains visible placeholder testimonials
and "replace with real case studies" notices on the CloudMISP page. These are **not present
on the live site** — verified directly. Staging-only, no action needed.

---

## Verdict by pillar

| Pillar | Rating | One-line reason |
|---|---|---|
| **Experience** | Strong | Genuine first-person operator voice; the hardest pillar to fake, and it's real here |
| **Expertise** | Strong in copy, weak in markup | Credentials are impressive and specific, but thin on profile pages and largely invisible to machines |
| **Authoritativeness** | Strong | CTIS, MISP, FIRST, NZITF, OASIS, CTI-CMM — top-tier, verifiable affiliations |
| **Trust** | Moderate | Named testimonials and ABN in schema, but no registered address anywhere on-page |
| **Machine-readability** | **Weak — this is the bottleneck** | Article schema actively contradicts the visible page |

The content earns E-E-A-T. The structured data throws a significant part of it away.

---

## Findings, ranked by severity

### P1-1 — Every article credits the *company* as author, not the person

Both sampled posts declare:

```json
"author": { "@type": "Organization", "name": "Cosive" }
```

Meanwhile the visible page shows "Chris Horsley, Principal Security Consultant & CTO",
hyperlinked to `/team/chris-horsley`.

This is the single largest E-E-A-T loss on the site, for three reasons:

1. Google's author-markup guidance is explicit that `author` should identify the
   **person** who wrote the piece; an Organization author is for genuinely corporate content.
2. The site **already has** the Person entities needed — `#chris-horsley` and
   `#terry-macdonald` are defined sitewide with `sameAs` LinkedIn and `knowsAbout`. The
   articles simply never reference them.
3. The machine-readable claim *contradicts* the human-readable one. Contradiction between
   the two is worse than the absence of either.

**Evidence:** `/blog/creating-cti-like-a-journalist`, `/blog/ism-june-2026-update-...` — both identical.

### P1-2 — Homepage carries two conflicting Organization entities

The homepage serves **two** `ld+json` blocks:

- A full `@graph` with `@id: https://www.cosive.com/#organization`, `legalName: "Cosive Pty Ltd"`,
  ABN `24608265345`, `memberOf` FIRST, GitHub + LinkedIn + YouTube `sameAs`. This one is good.
- A **second, standalone `Organization`** with no `@id`, a thinner property set, and:

```json
"url": "/website-v2/home"
```

That is a relative path to what looks like an internal Webflow staging page. Two
un-reconciled Organization nodes on the site's most authoritative page means Google must
guess which describes the real entity, and one of them points at a URL that isn't the
homepage.

### P1-3 — `dateModified` is earlier than `datePublished` on every sampled post

| Post | datePublished | dateModified |
|---|---|---|
| Creating CTI Like a Journalist | 2025-12-10T03:30Z | 2025-12-03T04:40Z |
| ISM June 2026 Update | 2026-09-07T07:33Z | 2026-09-07T06:51Z |

A page cannot be modified before it was published. Invalid date pairs are a known trigger
for Google discarding the dates entirely — and freshness is a ranking input for the
compliance and threat-landscape content this site publishes.

Worse, on the journalist post the **visible** dates are "Published July 31, 2025 / Updated
December 10, 2025" — a third, different pair. All three disagree.

### P2-1 — Author pages carry no Person schema for their own subject

`/team/prescott-pym` serves `Organization`, `WebSite`, and `Person` ×2 — and those two
Persons are Chris Horsley and Terry MacDonald, the sitewide founder entities. **Prescott
has no Person entity on his own profile page.** No `ProfilePage` type either, which is
Google's supported markup for exactly this page.

The author pages are the site's best E-E-A-T asset and they are machine-invisible for
8 of 10 staff.

### P2-2 — Person coverage stops at three people

Only Terry, Chris and Prescott appear as `Person` anywhere (in the homepage `member[]`
array). The other seven team members — including Tash Postolovski and Neethu Pushkaran,
who are credited authors on live posts — have no entity at all.

### P2-3 — Self-serving review markup on the homepage

The homepage `Organization` includes a `review[]` array with testimonials about Cosive,
published by Cosive. Google's structured-data policy excludes reviews the entity collects
and controls about itself; this is ignored at best and a manual-action risk at worst. One
entry also has an `author` Person with a `jobTitle` but **no `name`**, which is invalid.

### P2-4 — The "8 years" experience claim is stale and hardcoded (verified live)

Two service pages repeat a company-experience claim that no longer matches the founding date:

- `/cti/build-and-integrate-threat-intelligence-tools` — 3 instances: *"We've been doing this
  for 8 years and can learn new platforms quickly"*, *"We have been building CTI integrations
  for 8 years"*, and inside the page's `Service` schema: *"backed by 8 years as MISP contributors"*.
- `/secops/build-and-integrate-security-operations-tools` — 5 instances, including inside
  `FAQPage` answer text and the `Service` description.

Cosive was founded in 2015, which is **11 years** as of 2026. The number was hardcoded and
never maintained, so the site now **understates its own experience by three years** — and
does so inside structured data, where it is machine-read.

Two compounding problems: it implies three separate 8-year specialisms that all began
simultaneously, and an unmaintained figure is itself a staleness signal on pages that are
otherwise making expertise claims.

*(The homepage's "one customer for 8 years continuously" is a different, legitimate claim —
specific customer tenure, not company age. No change needed there.)*

### P3-1 — Profile bios are thin and stale

Chris Horsley's bio is one sentence: "over seven years of experience working in national
CSIRTs, almost five years of experience consulting to CSIRTs, and five years experience as
a software developer and sysadmin prior to that."

That copy is years out of date — Cosive was founded in 2015, so "almost five years
consulting" now understates by roughly six years. Meanwhile the homepage says "12 years
working with national CSIRTs" and `/about` calls him an "internationally acclaimed speaker
and trainer" with **no talk list, no conference names, no dates** to support it.

No profile page lists certifications, qualifications, or publications. For a firm selling
to central banks and government, the credential surface is notably thinner than the actual
credentials.

### P3-2 — Blog index shows neither author nor date

`/blog` cards display title and category only. Author and date are the two signals a
reader (and a crawler) uses to judge an article before clicking — both are present on the
article itself but dropped from the index.

---

## What is genuinely strong — protect this

1. **First-person operator experience.** "I've certainly seen CTI teams who are so caught
   up in collecting, processing, and analysing incoming intelligence feeds that they forget
   to produce." This is the Experience pillar working exactly as intended, and it is the
   component competitors cannot manufacture.
2. **Citation density.** ~8–10 outbound links to authoritative sources on the sampled
   article (SANS, MISP Project, Wikipedia, vendor advisories). Well above typical vendor-blog
   practice.
3. **Verifiable authority.** Co-designed CTIS; MISP contributors; NZITF chair; FIRST IEP-SIG
   co-chair; OASIS STIX/TAXII/CybOX contributors; CTI-CMM contributors. These are checkable
   third-party facts, which is what separates authority from assertion.
4. **Visible byline pattern is correct** — photo, name, role at top, linked to the author
   page, fuller bio at the bottom. The HTML pattern is right; only the schema is wrong.
5. **Named testimonial with full attribution** (Sasenka Abeysooriya, Program Director,
   University of Queensland) plus a sector-level customer list and a "100+ global customers"
   claim.
6. **Infrastructure present:** `robots.txt`, `sitemap.xml` and `llms.txt` all serve HTTP 200.

---

## Trust gaps worth a decision

- **No postal or registered address** appears anywhere on the site. `/contact-us` has a
  phone number (+61 3 9957 1193) and business hours; the footer has "© 2026 Cosive Pty Ltd".
  The ABN exists **only inside JSON-LD** — invisible to a human evaluating the company.
  For a vendor selling to banks, government and critical infrastructure, a missing
  registered address is a real trust signal gap, not a cosmetic one.
- **One testimonial is anonymised** ("Principal Threat Analyst, mining & metals industry").
  Defensible for a security customer, but it carries less weight than the named one.

---

## Next step

No fixes proposed, as scoped. The decision to make is which of P1-1, P1-2 and P1-3 to
treat as urgent — all three are template-level changes in Webflow that would apply across
all 12 posts at once.
