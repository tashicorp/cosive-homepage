# Cosive — AEO content pack (get cited by AI answer engines)

The deferred "content" tier from the plan. This is what moves you from *ranking* to being
**cited by ChatGPT, Perplexity and Google AI Overviews**. Evidence base: the Princeton GEO study
(+22–41% AI visibility), where the biggest, most reliable gains came from **provenance** — stats,
quotes and citations — not keywords.

Good news from the audit: your FAQ content is already **question-headed and mostly answer-first**
(e.g. *"SOAR stands for Security Orchestration, Automation and Response…"*). So this is targeted
tightening, not a rewrite. Three workstreams, highest-value first.

---

## 1. Author E-E-A-T + `Person` schema  ⭐ highest value for a cyber brand

AI engines increasingly cite brands with **verifiable, named experts**. Add a short author/expert
byline to key pages (the 4 pillars, CloudMISP, and any page making strong claims), and back it with
`Person` schema.

**On the page (Webflow):** a small byline block — author photo, name, role, and a LinkedIn link —
e.g. *"Written by [Name], [Role] at Cosive — [8 years as MISP contributors / former SOC analyst]."*

**Schema** (Page settings → Custom Code → Head), one per named author:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{{AUTHOR_NAME}}",
  "jobTitle": "{{ROLE e.g. Principal CTI Consultant}}",
  "worksFor": { "@type": "Organization", "name": "Cosive", "url": "https://cosive.com" },
  "sameAs": [ "{{LINKEDIN_PROFILE_URL}}" ],
  "knowsAbout": ["Cyber threat intelligence", "MISP", "Threat intelligence sharing", "Security operations"]
}
</script>
```
Tie your real experience in (MISP contributors, operators of the Australian CTIS serving 450+ orgs,
FIRST.org members) — that first-hand-experience signal is exactly what E-E-A-T and AI trust reward.

---

## 2. Answer-first "capsule" on every key section

Open each FAQ answer and each major section with a **direct 40–60 word answer**, then expand. This
is the single format most often lifted into AI answers. Your definitions are already close — tighten
the first sentence so it stands alone as a quotable unit.

**Pattern:** `[Term/answer] is [plain-English definition]. [One sentence of why it matters].` …then detail.

**Worked example (your real content):**
- *Already strong:* "SOAR stands for Security Orchestration, Automation and Response. It's a category of platform that connects your security tools together and automates workflows between them…" → keep as-is; it's a model answer capsule.
- *Tighten this one* — "How can automation help us move faster?"
  - **Before:** "Automation removes manual bottlenecks from your incident response and triage processes. Instead of analysts copying data between tools…"
  - **After (capsule):** "Automation helps your team move faster by handling routine incident-response steps — enrichment, lookups, ticketing — in seconds instead of minutes. That cuts mean-time-to-detect and mean-time-to-respond, and frees analysts for the judgement calls only people can make. In practice, that means…"

Apply the same first-sentence tightening across the 126 Q&A already in `faqpage-schema.md`.

---

## 3. Stats with named sources  ⭐ biggest Princeton-study lift

Add a concrete, **sourced** statistic roughly every 150–200 words on cornerstone pages, linking to
an authoritative domain. You sit on unusually citable assets — use them:
- **Proprietary/operational data:** metrics from running CTIS (450+ orgs), CloudMISP uptime, time-to-value figures, community growth — first-party stats AI engines love to cite.
- **Authoritative externals:** MITRE ATT&CK, FIRST.org, ENISA/ACSC, Verizon DBIR, CTI-CMM / SIM3 docs.
- Format: `"X% … (Source, Year)"` with an inline link. Remove hedging ("we think", "arguably") — it lowers citation odds.

---

## Quick wins checklist
- [ ] Add named-author byline + `Person` schema to the 4 pillar pages + CloudMISP.
- [ ] Tighten the opening sentence of each FAQ answer into a standalone 40–60 word capsule.
- [ ] Add 1–2 sourced stats to each pillar/product page (lead with your own operational data).
- [ ] Keep answers jargon-light and in the `tov/` voice (plain, pragmatic, no fear-framing).
- [ ] Refresh cornerstone pages quarterly — AI citations decay without freshness.

## What I need from you to finish this
1. **Author details** — name(s), role/title, and LinkedIn URL for whoever should be credited on the pillar pages (needed for the bylines + `Person` schema).
2. **Any stats you're happy to publish** — CTIS scale, CloudMISP uptime/SLA, community sizes, time-to-value, etc. (or point me at where they live and I'll write them up with sources).
3. **Go-ahead to edit on-page copy** — items 2 and 3 change live page text, so I'll draft them for your review rather than assume.
