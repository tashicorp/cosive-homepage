# Sources & fact-check ledger — MISP vs OpenCTI (updated 13 Aug 2026)

All facts in `article.md` were verified against primary sources (official GitHub releases, docs.opencti.io, misp-project.org, filigran.io) via a deep-research + adversarial-verification pass. This file is the audit trail: (A) the claim-by-claim ledger showing what changed vs the old article, and (B) the citation list.

## A. Claim ledger — old article → verdict → what we did

| # | Original claim | Verdict | Action in rewrite |
|---|---|---|---|
| 1 | "MISP established in 2012" | **FALSE** | Corrected: project began 2011 as "CyDefSIG"; renamed MISP in 2012 after NATO. |
| 2 | "OpenCTI launched in 2019" | CONFIRMED | Kept (v1.0.0 tagged 28 Jun 2019). |
| 3 | "OpenCTI uses STIX 2.1 + customisable entities" | CONFIRMED | Kept, expanded. |
| 4 | "In 2025 OpenCTI improved ATT&CK mapping" | **UNVERIFIABLE** | Removed the 2025-improvement claim; reframed as "both support ATT&CK and are still refining it" (cited the open late-2025 normalisation issue). |
| 5 | "MISP 2.5 changed object templates & correlation" | **FALSE (misattributed)** | Rewritten: 2.5.0 = PHP 8.1 + Supervisor jobs; correlation reworked in 2.5.16/2.5.18/2.5.21; templating in 2.5.37. |
| 6 | "MISP 2.5 reduced API latency / improved indexing" | CONFIRMED | Kept, attributed to v2.5.16+. |
| 7 | "OpenCTI stack: React, GraphQL, Elasticsearch, Redis, Minio, RabbitMQ, Python workers/connectors" | CONFIRMED | Kept, with ES-or-OpenSearch and MinIO-or-S3 nuance + version floors. |
| 8 | "MISP deps: Redis and MySQL" | CONFIRMED | Kept; noted MariaDB recommended + PHP/web + Python 3. |
| 9 | "In 2025 OpenCTI added native MISP/TIP support via connectors" | **FALSE** | Corrected: native MISP connector predates 2025 by years. |
| 10 | "MISP more popular (Google Trends)" | **OUTDATED** | Rewritten honestly: by GitHub stars OpenCTI now leads (9,803 vs 6,469); MISP leads on forks + sharing-community footprint; Trends unreliable (acronym ambiguity). |
| 11 | "OpenCTI added dark mode + simplified onboarding this year" | **FALSE** | Removed; dark mode is a long-standing default. |
| 12 | "MISP 2.5 improved event editing workflows / revamped object UI" | **FALSE (misattributed)** | Rewritten: Overmind UI migration + decomposed event views + event templating landed across 2.5.29–2.5.37 (2025–26). |
| 13 | "Managed offerings for both matured (CloudMISP, OpenCTI enterprise support)" | CONFIRMED | Kept, expanded with the CE/EE distinction. |

## B. Citations (primary unless noted)

**MISP**
- Latest release v2.5.44 — https://github.com/MISP/MISP/releases/tag/v2.5.44
- Release feed / cadence — https://www.misp-project.org/tags/release/
- v2.5.16 performance & correlation — https://www.misp-project.org/2025/07/19/misp.2.5.16.and.2.4.214.html/
- v2.5.18 on-demand correlation + scheduler — https://www.misp-project.org/2025/08/20/misp.2.5.18.released.html/
- v2.5.37 event templating (Apr 2026) — https://www.misp-project.org/2026/04/29/misp.2.5.37.released.html/
- v2.5.2 (initial 2.5) — https://www.misp-project.org/2024/11/19/MISP.2.5.2.released.html/
- STIX 2.1 arrived in v2.4.149 (Oct 2021) — https://www.misp-project.org/2021/10/11/MISP.2.4.149.released.html/
- Analyst Data STIX2 converter (Feb 2025) — https://www.misp-project.org/2025/02/07/MISP_Support_for_Analyst_Data_converter_from_STIX2.html/
- Project history (2011 CyDefSIG / 2012 rename) — https://www.misp-project.org/who/
- Galaxy clusters — https://github.com/MISP/misp-galaxy
- misp-stix converter — https://github.com/MISP/misp-stix · https://misp.github.io/misp-stix/
- Sizing / dependencies — https://www.misp-project.org/sizing-your-misp-instance/
- Support / community — https://www.misp-project.org/support/
- GitHub stats (6,469★ / 1,623 forks) — https://api.github.com/repos/MISP/MISP

**OpenCTI**
- Releases (7.x, calendar versioning) — https://github.com/OpenCTI-Platform/opencti/releases
- v1.0.0 (Jun 2019) — https://github.com/OpenCTI-Platform/opencti/releases/tag/1.0.0
- Deployment overview / stack + version floors — https://docs.opencti.io/latest/deployment/overview/
- Connectors (5 roles) — https://docs.opencti.io/latest/deployment/connectors/
- Data model (STIX 2.1) — https://docs.opencti.io/latest/usage/data-model/
- Enterprise Edition gated features — https://docs.opencti.io/latest/administration/enterprise/
- Platform overview (ATT&CK, STIX 2.1) — https://filigran.io/platform/opencti/
- OpenCTI v7 / LTS + XTM — https://filigran.io/blog/opencti-v7/
- Filigran founding (2022) — https://filigran.io/blog/we-are-filigran-the-new-home-for-opencti-and-openaev/
- Native MISP connector + limits — https://github.com/OpenCTI-Platform/connectors/tree/master/external-import/misp · https://github.com/OpenCTI-Platform/connectors/blob/master/external-import/misp/README.md
- ATT&CK normalisation still open (late 2025) — https://github.com/OpenCTI-Platform/connectors/issues/5149
- Enterprise SaaS / support — https://filigran.io/services/opencti-enterprise-edition/ · https://filigran.io/services/software-as-a-service/
- GitHub stats (9,803★ / 1,431 forks) — https://api.github.com/repos/OpenCTI-Platform/opencti

**Cosive (first-party, for the managed-MISP + experience claims)**
- CloudMISP — https://www.cosive.com/cloudmisp

## Caveats carried into the copy (kept honest)
- GitHub stars are a **directional** popularity proxy only; MISP's footprint is split across many repos, so a single-repo count understates it. The article states this.
- Exact Google Trends index values were **not** independently retrieved; the article deliberately avoids relying on Trends.
- CloudMISP and OpenCTI EE **pricing is quote-based** (not public), so the article makes no cost-figure comparison.
- misp-stix / MISP→OpenCTI round-trip loss is characterised **qualitatively** (feature-gap based); no measured %-loss figure is published, and the article does not invent one.
