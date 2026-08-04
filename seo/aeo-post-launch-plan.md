# Cosive — AEO content pass: post-launch action plan

**Status: parked until after launch.** This is the execution-ready companion to `aeo-content.md`
(which holds the strategy + evidence). Pick this up once the site is on its **final routes** — do
**not** run it while pages are on `/website-v2/…` staging paths.

## Why post-launch
1. It changes **visible page copy** (author bylines + inline stats) in the Webflow Designer — best
   done once content and routes are stable.
2. `Person` schema and internal citation links should use the **final canonical URLs**, not staging.

## Prerequisites — 3 inputs the team must supply before starting
1. **Author identity** — who is credited on each cornerstone page, with exact **role/title** and
   **LinkedIn URL**. (Candidates already on-site with LinkedIn: Chris Horsley, Terry MacDonald,
   Prescott Pym, James Garratt.)
2. **Publishable stats** — which proprietary numbers are OK to print (CTIS scale, any CloudMISP
   uptime/SLA, time-to-value), and the **source** to cite for the CTIS "450+ organisations" figure.
3. **Go-ahead to edit live copy** — bylines and inline stats are opinionated; draft → review → publish.

## Current state (survey, Aug 2026)
- **No author bylines** exist on any page; **no per-page `Person`/`Article` schema**.
- **Every Cosive credential claim is currently unsourced** (no citation links anywhere except fonts).
- ✅ **Workstream 2 is already mostly done**: the `/faqs` rework made all ~111 FAQ answers
  answer-first. Only non-FAQ *section* openers remain (workstream 5 below).
- Founders are already in the **site-wide** `Person` graph (`structured-data.md`:
  `#chris-horsley`, `#terry-macdonald`) — per-page author schema can reference those `@id`s.

---

## Workstream 1 — Author E-E-A-T + `Person` schema  ⭐ highest value
Add a small byline block (photo · name · role · LinkedIn) to the **4 cornerstone pages** and back it
with `Person` schema. First-hand-experience signals (MISP contributors, CTIS operators, FIRST
members) are exactly what E-E-A-T / AI trust reward.

**Byline insertion points (from survey):**
- `cyber-threat-intelligence.html` — after hero `<h1>` (~L1031), before "Select your goal" `<h3>` (~L1032).
- `fraud-data-sharing.html` — after hero `<h1>` (~L1029), before `<h3>` (~L1030).
- `security-operations.html` — after hero `<h1>`, before the "Select your goal" `<h3>` (~L1140).
- `cloudmisp.html` — after the `cm-hero__subtitle` paragraphs (~L1660), before the CTA; or under the
  `cm-intro` H2 (~L1685).
- Reuse existing styling: `.person-title` / `.credentials-caption` (name+role+photo patterns already
  in the design) for visual consistency.

**Schema options (decide at execution):**
- Per-page standalone `Person` block (template in `aeo-content.md`), **or**
- Fold an `author` reference into that page's existing per-page `@graph` in `per-page-schema.md`
  (e.g. `Service`/`WebPage` `author: { "@id": ".../#chris-horsley" }`) — cleaner, reuses the
  site-wide Person definition, no duplication.

**Input needed:** author per page + role titles.

---

## Workstream 3 — Sourced stats  ⭐ biggest GEO lift
Add 1–2 concrete, **sourced** statistics to each cornerstone page (~every 150–200 words on the
richest pages). Lead with proprietary data; format `"X … (Source, Year)"` with an inline link;
strip hedging ("we think", "arguably").

**Prime candidates — all currently unsourced (turn into cited stats):**
| Claim | Where it's asserted | Source to cite |
|---|---|---|
| Australia's CTIS — **450+ organisations** (most-repeated claim) | `cyber-threat-intelligence.html:~1258`, `cloudmisp.html:~2221`, `index.html` | ACSC/CTIS public page or ACSC annual report (team to confirm) |
| Operate MISP across **APAC, Europe, Middle East, North America** | `cloudmisp.html:~2209` | first-party |
| **Antifraud protecting FIs since 2016** | `fraud-data-sharing.html:~1136` | first-party |
| **Liaison Members of FIRST** / co-chair FIRST IEP-SIG | `security-operations.html` diff-06, `index.html:~1719` | first.org member/SIG page |
| **Co-designers of CTIS** / national threat-sharing program | `index.html:~1637`, case study | ACSC |
| **Core MISP contributors** | `cyber-threat-intelligence.html:~1258`, `index.html:~1645` | MISP project / GitHub |
| CloudMISP **uptime / SLA**, **time-to-value** | not currently stated | first-party (needs a real figure) |

**Authoritative externals to cite where relevant:** MITRE ATT&CK, FIRST.org, ENISA/ACSC,
Verizon DBIR, CTI-CMM / SIM3 docs.

**Input needed:** which numbers are OK to publish + the CTIS-scale source.

---

## Workstream 2 (remainder) — Answer-first section openers
FAQ capsules are done. Apply the same **40–60 word answer-first opener** to the major **non-FAQ
sections** on cornerstone pages (`[Term/answer] is [plain definition]. [Why it matters].` then
detail). Low effort — catalogue the sections during execution.

---

## Delivery model
Same as the schema work: edit the **repo HTML** (build reference) with byline/stat copy, **draft for
review before anything goes live**, then mirror into the **Webflow Designer**; paste any `Person`
schema like Parts C/D. Keep copy in the `tov/` voice (plain, pragmatic, no fear-framing).

## Verification (after publishing)
- Rich Results Test (search.google.com/test/rich-results) + validator.schema.org detect the `Person`
  and it resolves within the graph (`author` `@id` → the Person node).
- Byline renders correctly on each cornerstone page.
- Every added stat has a working citation link.

## Checklist
- [ ] Byline + author `Person` on the 4 cornerstones (CTI, Fraud, SecOps, CloudMISP).
- [ ] 1–2 sourced stats on each cornerstone (lead with proprietary CTIS/first-party data).
- [ ] Answer-first openers on major non-FAQ sections.
- [ ] Jargon-light, `tov/` voice, no hedging.
- [ ] Set a reminder to refresh cornerstone pages ~quarterly (AI citations decay without freshness).

## Related / not in this pass
- Legal pages (Terms of Use, Fair Use Policy) — still deferred.
- Chris review of the CloudMISP Integrations example tool names before promoting that list.
