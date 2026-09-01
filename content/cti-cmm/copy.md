# /cti-cmm — page copy

Copy for `cti-cmm.html`. Australian English, Cosive tone of voice (`tov/Cosive Tone of Voice.txt`).
Each section is headed with the component it maps to in `docs/section-library.md` so it drops
straight into an existing pattern. CSS donor page for anything not already in the scaffold:
`improve-cti-team.html`.

**Status:** framework and tool facts are researched and sourced (see *Sources*). Customer quotes
and case studies are `[PLACEHOLDER]` — Cosive must supply. Anything else needing sign-off is
listed under *Needs confirmation*.

---

## Page metadata

Per `seo/page-metadata.md` conventions.

- **SEO title** (43): `CTI-CMM Assessment & Benchmarking | Cosive`
- **Meta description** (156): `CTI-CMM measures how well your threat intelligence supports the people who use it. We run independent assessments — and give you a free self-assessment tool.`
- **OG title**: `Benchmark your CTI programme against CTI-CMM`
- **OG description**: `An independent CTI-CMM assessment scores your programme across 11 domains and hands back a prioritised roadmap. From contributors to the framework itself.`
- **OG image**: `images/og/og-cti-cmm.png` — **needs creating** (1200×630), match existing `images/og/` style.
- **Canonical**: `https://www.cosive.com/cti-cmm` (Webflow global self-referencing canonical).

> ⚠️ The scaffold's current meta description (`cti-cmm.html:7` and the JSON-LD at `:24`) says
> *"Cosive consultants help author it"*. That overclaims — every other page on the site says
> **contributors**. Replace with the description above.

---

## 1. Banner — `.page-banner` (hub variant, already built)

Breadcrumb: **Home / CTI-CMM**
H1: **CTI-CMM**

Add a `p.banner-description` under the H1:

> The capability maturity model for threat intelligence. We run independent assessments against it, and help you act on what they find.

**Add a hero CTA** — primary button **Book a CTI-CMM assessment** → `#contact`, with a quieter secondary line: *Or score yourself with our free tool first* → `/cti-cmm-assessment-tool`. The hero previously had no call to action at all, which is a real gap on a service page.

---

## 2. What CTI-CMM is — `section.infra-section` (white, §11)

`.section-label`: **The framework**
`h2.heading-style-h2`: **What CTI-CMM is**

**Answer-first capsule** — keep this as the opening paragraph, unbroken. This is the unit an answer
engine lifts, so it has to stand alone:

> CTI-CMM is the Cyber Threat Intelligence Capability Maturity Model: a free, vendor-neutral framework for measuring how well your threat intelligence programme supports the people who depend on it. It scores your practices across 11 business domains at four maturity levels, CTI0 to CTI3, and gives you a prioritised path to improve.

Then:

> What makes it different is where it starts. Most maturity models ask what your intelligence team owns — how many feeds, which platform, how many analysts. CTI-CMM asks who your intelligence is *for*, and how well it serves them. Your stakeholders are the vulnerability managers deciding what to patch first, the incident responders scoping a breach, the risk team briefing the board. If they aren't making better decisions because of your CTI, the tooling underneath it doesn't count for much.

> That framing is why the model is useful to teams of any size. You don't need a large programme to score well at the foundational level — you need to know who you're serving and to serve them consistently. A team of one, working to a clear set of requirements, can be more mature under CTI-CMM than a team of ten producing reports nobody reads.

> The framework is free and open. It was built by a volunteer group of practitioners drawn from across the industry, and it stays vendor-neutral by design — nothing in it points you at a product. Cosive consultants are among its contributors.

**Service capsule** — a second answer-first unit, set apart visually (left rule on `Color/Blue Tint`). This is the "what does Cosive do" counterpart to the framework capsule above, and it is what an answer engine should lift when asked who runs CTI-CMM assessments:

> `HOW WE HELP` — We run independent CTI-CMM assessments. We work through the practices in all 11 domains with you and the stakeholders your programme serves, score where you actually are, and hand back a rating per domain with a prioritised roadmap for closing the gaps.

> Most teams come to us for a baseline they can take to their leadership — something more defensible than a self-score, and specific enough to act on the following quarter.

---

## 3. Customer quotes — `section.hero-testimonial` (§17)

`.testimonial-label`: **What our customers say about us**

**Quote 1 — real, reusable as-is.** This is the only named, attributed customer quote on the site
(currently on `improve-cti-team.html:1677`, `manage-my-misp.html`, `consume-share-threat-intelligence.html`).
It's an engagement quote rather than a product one, so it fits here:

> “Cosive brought a high level of expertise and depth of knowledge to our engagement, and from the outset they were collaborative in developing the engagement methodology and deliverables.”
> — Sasenka Abeysooriya, Program Director
> *(logo: `logos/uq.svg`, alt "The University of Queensland")*

**Quote 2 — `[PLACEHOLDER]`.** See the appendix for what's needed.

---

## 4. CTI-CMM in more detail — `section.infra-section--alt` (light grey, §12)

`.section-label`: **How the model works**
`h2.heading-style-h2`: **Eleven domains, four levels**

> CTI-CMM organises your programme around 11 domains — the business functions that threat intelligence exists to support. For each one the model sets out a purpose, the CTI mission that serves it, and the practices that mark each level of maturity. **In an assessment we work through every domain with the stakeholders it serves**, so the score reflects how your intelligence actually lands rather than how it looks on paper.

**The 11 domains** (render as a two-column list or `.build-grid` of small cards):

| | Domain |
|---|---|
| 01 | Asset, Change and Configuration Management |
| 02 | Threat and Vulnerability Management |
| 03 | Risk Management |
| 04 | Identity and Access Management |
| 05 | Situational Awareness |
| 06 | Event and Incident Response, Continuity of Operations |
| 07 | Third-Party Risk Management |
| 08 | Fraud and Abuse Management |
| 09 | Workforce Management |
| 10 | Cybersecurity Architecture |
| 11 | Cybersecurity Program Management |

**The four maturity levels** (render as `.build-grid` / `.build-feature` cards, numbers 0–3):

- **CTI0 — Pre-foundational.** The practice isn't happening yet.
- **CTI1 — Foundational.** Ad hoc and reactive. Work happens case by case, largely undocumented, and delivers short-term value that's hard to measure.
- **CTI2 — Advanced.** Standardised and proactive. Practices are documented, repeatable and often automated, and you can show the impact they have.
- **CTI3 — Leading.** Prescriptive and business-aligned. Intelligence carries recommendations, not just observations, and its metrics map to business outcomes.

> Four things change as a programme moves up: intelligence goes from **ad hoc to programmatic**, from **tactical to strategic**, from **generic to contextual**, and from **neutral observation to prescriptive recommendation**. That last shift is usually the hardest and the most valuable — it's the difference between telling a stakeholder what happened and telling them what to do about it.

> We score each domain separately rather than handing you a single number. That per-domain picture is far more useful than an overall grade — most programmes are uneven, strong on incident response and thin on third-party risk, and those gaps are where we focus the roadmap.

**Who we do this with:**

> We work with organisations globally, and we've run CTI and maturity work across critical infrastructure, government, global finance, retail and education. Sector matters less than you'd expect: the domains are the same everywhere, and it's the stakeholders and their decisions that differ.

---

## 5. Free assessment tool — centred CTA block (§13 tail pattern)

Sits in the gap between §4 and §6, per the brief. Pattern: `h3` + `p` + `a.btn-primary` in a
centred block (`text-align: center`, `margin-top: var(--space-6xl)`).

`h3`: **Want a baseline before you talk to us?**

> Our CTI-CMM assessment tool is free, needs no sign-up, and covers all 11 domains of CTI-CMM v1.3. Score your current and target maturity for each practice, mark the domains that don't apply, and it builds you a prioritised planning sheet showing where the gaps are. Everything saves in your browser — your answers never leave your machine.

CTA: **Open the assessment tool** → `/cti-cmm-assessment-tool`

**Visual — example radar chart.** The band is a two-column layout: copy and CTA left, a white card right showing example tool output. The card is headed *Domain Maturity Overview* (the tool's own panel title) and carries a visible **"Example output — illustrative scores, not real client data"** caption plus a reading: *a typical shape — strong on incident response, thin on third-party risk and workforce.*

The chart replicates the tool's Chart.js radar: 11 axes using the framework's short domain names, concentric polygon grid at `rgba(0,0,0,0.1)`, 0–100 scale with ticks every 20, `rgba(42,182,246,0.2)` fill. The stroke is the tool's own `blueDark` **#1a9fd8** rather than its `#2AB6F6` — the bright blue measures 2.30:1 on white, below the 3:1 WCAG floor for graphics, so the tool's own chart is faint. #1a9fd8 clears it at exactly 3.00:1. Drawn as inline SVG, since the page cannot load Chart.js from a CDN.

⚠️ **Confirm the axis labels** match the tool's `nickname` values. ASSET and THREAT appear verbatim in the tool's source; the other nine are the documented CTI-CMM abbreviations and load at runtime, so they could not be read from the page.

*(Build note: the tool is a web app embedded from `cosive.github.io/cti-cmm-assessment-tool`; source at `github.com/chorsley/cti-cmm-assessment-tool`. It's an alternative to the official CTI-CMM spreadsheet, adding a dashboard, auto-save, and JSON/CSV import-export.)*

---

## 6. Why CTI-CMM helps — `section.infra-section` (white, §11 + `.build-grid`)

`.section-label`: **What you get out of it**
`h2.heading-style-h2`: **What an assessment gives you**

> An assessment is worth doing when it changes what you do next. Ours is built to hand a CTI lead four things they can act on the week it lands.

`.build-feature` cards:

**01 · A language your stakeholders already speak**
> We run the scoring sessions with the stakeholders themselves, in their language — vulnerability management, third-party risk, incident response — not intelligence jargon. Most teams tell us that conversation is worth as much as the score.

**02 · A budget case that holds up**
> "We need more feeds" is a hard ask. We give you the other version: you are at CTI1 for incident response, here is where comparable organisations sit, and here are the three practices that close the gap. An independent score carries weight a self-assessment does not.

**03 · A prioritised roadmap, not a wish list**
> We hand back a rating per domain and recommendations ordered by impact and effort — one maturity level at a time, in the domains that matter most to you. Not a list of everything that is imperfect.

**04 · A baseline you can measure against**
> Your first assessment with us is the reference point. When we re-run it, you can show your leadership whether the work they funded actually shifted anything.

---

## 7. Case studies — `section.case-studies-section` (§22)

`.section-label`: **Case studies**
`h2.heading-style-h2`: **CTI-CMM work we've done**

⚠️ **All three are `[PLACEHOLDER]`.** No CTI-CMM-specific case study exists on the site today. See
the appendix for the fill-in template. The closest existing candidate to adapt is the index.html
card *"Maturing a CTI programme for a national energy provider"* (tag: Critical Infrastructure) —
confirm with Cosive whether that engagement used CTI-CMM before reusing it here.

`a.cases-cta`: **See more of our work** → `/case-studies`

---

## 8. How an engagement works — `section.infra-section--dark` + `.icon-item-step`

Pattern as `use-attack-framework.html:1311` ("How we run an ATT&CK engagement").

`.section-label`: **Our approach**
`h2.heading-style-h2`: **How a CTI-CMM engagement works**

> We run assessment as a cycle rather than a one-off audit. The assessment is the cheap part; the value is in what you do with it, and in coming back to check whether it worked.

**Step 01 — Assess**
> We work through the practices in each of the 11 domains with you and the stakeholders your programme serves, and score where you actually are. You get a rating per domain plus an overall picture, with the evidence behind each score written down.

**Step 02 — Plan**
> We turn the gaps into a roadmap, built one maturity level at a time and sequenced by impact and effort. Your stakeholders help set the targets, because they're the ones who'll tell you whether the improvement landed.

**Step 03 — Deploy**
> You execute the roadmap. We can stay involved for the parts that need specialist help — requirements, tooling, integration, analyst training — or step back and let your team run it.

**Step 04 — Measure**
> Come back to four questions: are you delivering measurable value, can you demonstrate it, what didn't get done, and what support do you need from leadership to finish it. Then the cycle starts again from a higher baseline.

**Why bring someone in:**

> You can run CTI-CMM yourself — the framework is free and so is our tool, and for a lot of teams that's the right starting point. An independent assessment adds four things: people who have run this many times before, an objective read that isn't shaped by internal politics, a sense of how you compare to similar organisations, and a result that carries more weight with your leadership than a self-score.

CTA: `a.btn-primary` **Talk to us about an assessment** → `#contact`

---

## 9. Credentials — `section.credentials-section` (§3)

`.credentials-label`: **Why work with us**
`h2.heading-style-h2`: **We helped build the model we assess you against**

`.icon-item` entries (each opens with `<strong>`):

- **Contributors to CTI-CMM** — Chris Horsley and Prescott Pym are among the volunteer contributors to the framework.
- **We built the free assessment tool** — the CTI-CMM web assessment tool is ours, open source, and tracks the current v1.3 model.
- **We run national-scale intelligence sharing** — Cosive co-designed and operates CTIS, Australia's national threat intelligence sharing programme, serving 450+ organisations.
- **50+ threat intelligence platform deployments** across 12 countries.
- **Practitioners, not auditors** — every engagement is staffed by senior consultants who have built and run CTI programmes themselves.

`.credentials-photo`: reuse `images/shared/terry-presenting.jpg` or the Prescott NZITF photo, with the existing caption style.

---

## 10. FAQ — `section.faq-section` (§4)

Written to the `faqs` skill: answer-first, one concrete specific per answer, no hedging, no
duplication of any question already on the site. (Checked against all 100+ existing FAQ questions —
`What is CTI-CMM?` and `Can you assess and benchmark our CTI maturity?` already live on
`cyber-threat-intelligence.html` and are deliberately **not** repeated here.)

**Which organisations get the most out of a CTI-CMM assessment?**
> Any organisation that has a threat intelligence function, or is about to build one. CTI-CMM measures how well intelligence supports the people who use it, not how much tooling you own, so it works for a team of one as well as a team of thirty. We run assessments across critical infrastructure, government, global finance, retail and education. It's most useful when you have stakeholders asking for more than you can currently give them, and need to work out what to fix first.

**How long does a CTI-CMM engagement take?**
> `[PLACEHOLDER — Cosive to supply real duration.]` Draft shape once confirmed: *"A standard assessment takes about [N weeks] from kick-off to final report: [N] workshops with your CTI team and stakeholders, [N] weeks of analysis, then a readout session. Scope drives the number — assessing all 11 domains takes longer than focusing on the four or five that matter most to you."*

**Do you work with other CTI frameworks?**
> Yes. We assess against CTI-CMM for threat intelligence programmes, [SIM3](security-operations.html) for CSIRT and incident-response maturity, and [SOC-CMM](improve-secops-team.html) for SOC-focused teams, and we map detection coverage against [MITRE ATT&CK](use-attack-framework.html). Which one fits depends on your team's shape rather than your industry — we'll tell you if CTI-CMM isn't the right model for what you're trying to measure.

**How often should we reassess?**
> Reassess once you've had time to act on the last set of recommendations — for most programmes that's about every 12 months. CTI maturity assessment works as a cycle, not a one-off audit: assess, plan, deploy, measure, then start again from a higher baseline. Reassessing too soon just re-measures work that hasn't landed yet; leaving it too long means you lose the thread between the roadmap and the result.

**Can we run our own CTI-CMM assessment?**
> Yes, and for many teams it's the right place to start. Our [CTI-CMM assessment tool](/cti-cmm-assessment-tool) is free, needs no sign-up, and covers all 11 domains of CTI-CMM v1.3 — score current and target maturity per practice and it builds a prioritised planning sheet. Everything saves in your browser, so your answers never leave your machine. Bring us in when you want an objective second read, a comparison against similar organisations, or a result that carries weight with your board.

---

## 11. Sinewave divider — `.people-cta-separator` (§5)

`<img src="icons/cosive-sinewave.svg" alt="Cosive">` — use the `cosive-sinewave` skill.

---

## 12. Contact form — `section.contact-section#contact`

`.section-label`: **Get in touch**
`h2.heading-style-h2`: **Find out where your CTI programme stands**
`p.contact-subtitle`: **Tell us about your programme and we'll come back with a realistic scope for an assessment.**

Fields exactly as `improve-cti-team.html:2019` — `first_name`, `last_name`, `email`, `company`,
`message`, and `<button type="submit" class="btn-primary">Send</button>`.

**Hidden fields:**
```html
<input type="hidden" name="category" value="CTI">
<input type="hidden" name="page" value="cti-cmm">
```

> ⚠️ **Decide before building.** The brief says "Pipedrive category as Cyber Threat Intelligence".
> `todo/webflow-make-pipedrive-integration.md` defines the Pipedrive `Service interest` field as a
> single-option list of exactly `CTI | Fraud | SecOps | MISP | General`, and requires a `page`
> hidden field too. But most CTI pages currently hardcode `value="Cyber Threat Intelligence"`,
> which is not a valid option in that list; `consume-share-threat-intelligence.html` uses `CTI`.
> **`CTI` is the value that matches the documented Pipedrive taxonomy** — recommended above. If
> Cosive would rather keep the long form, the Pipedrive option set needs changing to match, and the
> other CTI pages need reconciling either way. (Separately: `consume-share-fraud-data.html` sends
> `category="CloudMISP"`, which looks like a bug.)

---

## Footer

No change needed. `_footer.html:86` already reads `© 2026 Cosive Pty Ltd. All rights reserved.`
and `cti-cmm.html` inherits it via `footer-include.js` — **do not hardcode a copyright on this page.**

The brief's footer item refers to the **live Webflow site**, which currently renders a second,
stray line — `© Cosive Pty Ltd. All Rights Reserved.` — below the correct one. That's a Webflow
fix, not a repo change.

---

## Appendix — `[PLACEHOLDER]` material Cosive must supply

### Customer quotes (need 1–2 CTI-CMM-specific)
For each: exact quote text · person's name and title (or the role + sector if they can't be named) ·
organisation and whether it can be named · logo file if nameable · **written approval to publish**.

Ideally one quote speaks to the *assessment* being useful (the readout, the roadmap) and one to the
*outcome* (what changed afterwards).

### Case studies (need 3)
For each:

| Field | |
|---|---|
| Tag / sector | e.g. Critical Infrastructure |
| Title | short, outcome-led |
| Description | 2–3 sentences: situation → what we did → result |
| Starting and finishing maturity | per domain if available |
| Any hard number | domains improved, time taken, gaps closed |
| Image | currently the site uses Unsplash stock; a real photo is better if available |
| Named or de-identified? | |

### ⚠️ Conflict with existing site copy — needs a decision

Two FAQ answers on `cyber-threat-intelligence.html` (lines 1301 and 1331) say CTI-CMM measures
maturity **"across collection, analysis, dissemination and feedback"**. That is the classic
intelligence-cycle framing, and it does not describe CTI-CMM. The model is organised around
**11 business domains** (Asset/Change/Config, Threat & Vuln, Risk, IAM, Situational Awareness,
Incident Response, Third-Party Risk, Fraud & Abuse, Workforce, Architecture, Program Management),
each scored **CTI0–CTI3**. There is no collection/analysis/dissemination/feedback axis in it.

This page describes the framework correctly, which means it will **contradict the CTI pillar page**
until that page is corrected. Recommended fix on `cyber-threat-intelligence.html`:

> CTI-CMM (Cyber Threat Intelligence Capability Maturity Model) is a framework for measuring how well
> your threat intelligence programme supports the people who depend on it, scored across 11 business
> domains at four maturity levels. It gives you a baseline, a benchmark against peers and a
> prioritised path to improve. Cosive runs CTI-CMM assessments and offers a free
> [CTI-CMM assessment tool](/cti-cmm-assessment-tool).

Same correction applies to the second answer ("score you across…"). Both are mirrored in
`seo/faqpage-schema.md` and `seo/per-page-schema.md` and must be resynced if changed.

*(This supersedes the earlier instruction to reuse "collection, analysis, dissemination and
feedback" verbatim — that phrase is fine as a description of the intelligence cycle, just not as a
description of CTI-CMM's structure.)*

### Needs confirmation
1. **Engagement duration** — FAQ 2 is blocked on this.
2. **Reassessment cadence** — "about every 12 months" is a reasonable default drawn from Cosive's own
   assess-plan-deploy-measure framing, but it isn't stated anywhere Cosive has published. Confirm or correct.
3. **Industry list** — "critical infrastructure, government, global finance, retail and education"
   comes from the brief. Confirm it's a claim Cosive can stand behind, since it appears twice
   (§4 and FAQ 1).
4. **"Practitioners, not auditors"** credential — check this matches how Cosive staffs assessments.

---

## Sources

- [cti-cmm.org](https://cti-cmm.org/) — framework, stakeholder-first approach, version history (v1.0 = 10 domains; v1.1 added Fraud; v1.3 current).
- [Cosive — Using the CTI-CMM Model to Evaluate Threat Intel Program Maturity](https://www.cosive.com/blog/cti-cmm) — the four progression themes, the assess/plan/deploy/measure cycle, the case for independent assessment, "CTI maturity assessment is ideally not a one-off exercise".
- [Intel 471 — Introducing the CTI Capability Maturity Model](https://www.intel471.com/blog/introducing-the-cti-capability-maturity-model-a-resource-for-measuring-and-building-mature-cti-programs) — origin, 28-member volunteer group, stakeholder-first rationale.
- [Briefing: The CTI Capability Maturity Model](https://breached.company/briefing-the-cyber-threat-intelligence-capability-maturity-model-cti-cmm/) — the 11 domain names and the CTI0–CTI3 level definitions.
- Cosive's assessment tool, read directly: `https://www.cosive.com/cti-cmm-assessment-tool` (embeds `cosive.github.io/cti-cmm-assessment-tool`) and its source at `github.com/chorsley/cti-cmm-assessment-tool` — v1.3.1, 11 domains, benchmark/planning modes, local-storage auto-save, JSON/CSV export.
- On-site consistency: `tov/Cosive Tone of Voice.txt`, `docs/section-library.md`, `todo/webflow-make-pipedrive-integration.md`, `seo/page-metadata.md`, and the existing CTI-CMM copy in `index.html`, `about.html`, `cyber-threat-intelligence.html`, `improve-cti-team.html`.

## Follow-ups once this page ships

- Repoint the "CTI-CMM" link in `improve-cti-team.html:1990` (currently → `cyber-threat-intelligence.html`) at `/cti-cmm`, and do the same in the `cyber-threat-intelligence.html` FAQ answers.
- Add `Service` and `FAQPage` JSON-LD to `cti-cmm.html`; it currently has only `WebPage` + `BreadcrumbList`.
- Add `/cti-cmm` to `cosive-sitemap.xml` and `llms.txt` (llms.txt currently credits CTI-CMM benchmarking to `/improve-cti-team` only).
- Resync any FAQ text into `seo/faqpage-schema.md` and `seo/per-page-schema.md`.
