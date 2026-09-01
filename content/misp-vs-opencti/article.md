# MISP vs OpenCTI: a practical 2026 comparison

*By the Cosive team — the engineers who designed and run Australia's national **Cyber Threat Intelligence Sharing (CTIS)** platform, a multi-tenant MISP deployment serving 450+ organisations. We contribute to open-source MISP and build OpenCTI connectors and deployments for our clients, so we work with both platforms in production.*

*Technically reviewed by **Chris Horsley**, Cosive co-founder and MISP contributor.*

*Published 2 May 2024 · **Last updated 13 August 2026***

---

MISP and OpenCTI are the two leading open-source cyber threat intelligence platforms, and teams evaluating one almost always weigh it against the other. The short version: **MISP is the stronger choice for indicator-centric threat sharing and running or joining sharing communities, while OpenCTI is built around a STIX 2.1 knowledge graph that models threat actors, campaigns and TTPs in rich detail.** Both are genuinely open source, both interoperate through STIX, and — in our experience deploying both — the "right" answer depends far more on what your analysts need to *do* than on any feature checklist.

This comparison is current as of August 2026: MISP is on the **2.5.x** line ([v2.5.44, released July 2026](https://github.com/MISP/MISP/releases/tag/v2.5.44)) and OpenCTI is on its calendar-versioned **7.x** series ([7.x, August 2026](https://github.com/OpenCTI-Platform/opencti/releases)).

## Both MISP and OpenCTI share the benefits of being open source

MISP and OpenCTI are both scrutinised and patched by the security community. Being open source, many people have the chance to spot and patch potential vulnerabilities before they make it into a production release. You can inspect the code to be sure there are no exploitable flaws. With closed source software, you must simply trust that the company behind the software follows secure development practices.

One nuance worth knowing in 2026: the two projects use different open-source models. MISP is released in full under the [AGPLv3 licence](https://github.com/MISP/MISP/blob/2.5/LICENSE) — the entire platform is open source. OpenCTI ships as a **Community Edition under the Apache 2.0 licence** plus a separate **Enterprise Edition** under a proprietary licence, where vendor Filigran gates a set of advanced features (see *Cost and support* below). Both are legitimate open-source strategies, but it changes what "free" gets you.

## Cost and support

MISP and OpenCTI are free to use, provided you are prepared to host the platforms on your own infrastructure. The downside of free is that these platforms don't come with any guarantee of support if things go wrong. You'll need to rely on volunteers in the open source community for whom you are not a #1 priority.

That's why some teams opt for managed and supported versions of these platforms, like [CloudMISP](https://www.cosive.com/cloudmisp) — our fully managed MISP service — or [OpenCTI's Enterprise Edition and hosted SaaS](https://filigran.io/services/opencti-enterprise-edition/) from Filigran, which provide a guaranteed support SLA. By 2026, managed offerings for both platforms have matured considerably, making them viable for organisations that want open-source flexibility without the internal maintenance overhead.

The support models differ. With MISP, the whole platform is open, so a managed provider like Cosive runs and supports the same software you could self-host — the value is in the operations, upgrades and expertise, not in unlocking features. With OpenCTI, [several capabilities are Enterprise-Edition-only](https://docs.opencti.io/latest/administration/enterprise/) — automated playbooks, Priority Intelligence Requirements (PIRs), FINTEL report templates, activity/audit logging, organisation segregation, UI-based SSO configuration, and the platform's AI features (AI Insights, NLP entity extraction, natural-language query). If those matter to you, factor an Enterprise licence into the cost, not just hosting.

## MISP vs OpenCTI: feature comparison

### Data modelling and sharing formats

MISP uses the MISP data model and emphasises Indicators of Compromise (IoCs) and Indicators of Attack (IoAs). It exchanges data in STIX and via TAXII: through the bundled [misp-stix library](https://github.com/MISP/misp-stix), MISP imports STIX 1.1.1, 1.2, 2.0 and 2.1 and exports to STIX 2.x. (Worth noting for anyone assuming STIX 2.1 is a day-one feature — it [arrived in MISP core in October 2021 with v2.4.149](https://www.misp-project.org/2021/10/11/MISP.2.4.149.released.html/).)

OpenCTI's data model is [based on STIX 2.1 almost in its entirety](https://docs.opencti.io/latest/usage/data-model/), extended with additional object types, and it allows extensive customisation of entities — mandatory attributes, default values, confidence scales and workflow statuses. This makes it well suited to detailed descriptions of Tools, Techniques and Procedures (TTPs) and to mapping threat data flexibly.

MISP, meanwhile, continues to lead in structured handling of attributes and context tagging through its **Galaxy** and **Taxonomy** systems. Galaxies attach large, community-maintained knowledge clusters — threat actors, malware, tools, ransomware, MITRE ATT&CK and more — to events and attributes, drawing on the [200+ clusters in the misp-galaxy repository](https://github.com/MISP/misp-galaxy). Taxonomies provide machine-tag libraries (TLP, PAP, the admiralty scale and many others) for consistent classification.

### MITRE ATT&CK support

Both platforms support MITRE ATT&CK, in keeping with their different models. In OpenCTI, ATT&CK Tactics and Techniques are [first-class entity types](https://filigran.io/platform/opencti/): analysts can pivot across threat actors, malware and techniques, view the ATT&CK matrix, and export ATT&CK Navigator layers. MISP represents ATT&CK through its ATT&CK galaxy, tagging events and attributes with techniques so they travel with shared intelligence. ATT&CK data hygiene is an area both communities are still refining — as recently as [late 2025 the OpenCTI community was working on normalising and de-duplicating imported ATT&CK references](https://github.com/OpenCTI-Platform/connectors/issues/5149) — so treat "ATT&CK support" as a capability both platforms have and continue to improve, rather than a settled advantage for either.

### System architecture

OpenCTI is a stack of components — a React frontend, a GraphQL API on a Node.js backend, a search engine ([Elasticsearch ≥ 8.0 or OpenSearch ≥ 2.9](https://docs.opencti.io/latest/deployment/overview/)), Redis for caching and its live event stream, RabbitMQ as the message broker, S3-compatible object storage (MinIO or any S3 store), plus Python workers and connectors — that run as separate applications in a broader system. Because of this, it is a good fit for container orchestration, and most people install OpenCTI using Docker, running a container for each enabled connector. Connectors are the cornerstone of the platform: there are [five connector roles](https://docs.opencti.io/latest/deployment/connectors/) (external import, internal enrichment, import, export and stream), and Filigran advertises 300+ ready-made integrations.

MISP has a shorter list of backing services — a [MySQL/MariaDB database and Redis](https://www.misp-project.org/sizing-your-misp-instance/) — and therefore fewer moving parts than OpenCTI (it also needs PHP with a web server and Python 3 to run). Even so, MISP's architecture still has a database, a cache, background workers, a web app and an API.

Overall, MISP incorporates fewer distinct technologies than OpenCTI, which can make it easier to troubleshoot and manage for smaller teams — though OpenCTI's component model is what lets it scale horizontally behind a load balancer for large deployments. In our own operation of MISP at national scale, the smaller dependency surface is a real day-to-day advantage for patching and upgrades.

### Performance and scalability

Both platforms have seen significant performance work. On the MISP side, the 2.5 line delivered concrete large-dataset improvements — [v2.5.16 (July 2025)](https://www.misp-project.org/2025/07/19/misp.2.5.16.and.2.4.214.html/) added a high-performance re-indexing routine (`cake Admin runDBScript`), reworked attribute fetching to efficient database JOINs, replaced expensive `NOT IN()` correlation queries with temporary tables, and fixed a `restSearch` bug that the maintainers say "can dramatically improve API responsiveness" on large instances. Further search optimisations followed in later 2.5.x releases. The correlation engine itself was reworked across the line: bi-directional correlation in v2.5.16, a new [on-demand correlation engine in v2.5.18](https://www.misp-project.org/2025/08/20/misp.2.5.18.released.html/), and an on-demand "recorrelate" in v2.5.21. (These landed in specific 2.5.x point releases rather than in the foundational 2.5.0 build, which was primarily a move to PHP 8.1 and a new Supervisor-based background-job system.)

### Visualisation and analysis

Both platforms provide strong but differently-shaped analysis tooling. MISP offers mature correlation views, galaxy/cluster visualisations, event graphs, charts and maps, plus dashboards for making sense of large volumes of indicators. OpenCTI is built around an investigation **knowledge graph** — exploring the relationships between actors, malware, campaigns and techniques is central to its interface — alongside dashboards and the ATT&CK matrix view. If your work is indicator- and correlation-heavy, MISP's views will feel natural; if it's entity- and relationship-heavy (who is behind this, what campaign, which techniques), OpenCTI's graph is a genuine strength.

### Integration with security tools

MISP has a wide range of integrations thanks to its established presence, covering firewalls, IDS, SIEM systems and more, and it is well supported by enrichment modules ([misp-modules](https://github.com/MISP/misp-modules)), a large default feed catalogue, and a mature Python client (PyMISP). It is favoured for native feed ingestion, IOC correlation, enrichment and automated data curation with minimal custom scripting.

OpenCTI focuses on integrating with threat-intelligence sources and platforms through its connector framework. The two platforms interoperate directly: OpenCTI ships a [native, officially maintained MISP connector](https://github.com/OpenCTI-Platform/connectors/tree/master/external-import/misp) — this is not new (it is one of OpenCTI's original external-import connectors, predating 2025 by years). It pulls MISP events into OpenCTI as STIX 2.1 objects, with a separate stream connector able to push OpenCTI data back to MISP. Both platforms therefore support bi-directional sharing with other systems.

### User experience

MISP is very powerful but can be complex, and may require more technical expertise to configure and use effectively. Recent releases have modernised the interface: MISP is [progressively migrating to a new Bootstrap 5 "Overmind" theme](https://www.misp-project.org/2026/04/29/misp.2.5.37.released.html/) (a beta UI/UX mode arrived in late 2025), decomposed the heavy event view into faster AJAX-loaded panels, and — in [v2.5.37, April 2026](https://www.misp-project.org/2026/04/29/misp.2.5.37.released.html/) — introduced a first-class **event templating** system with its own schema, validation and library catalogue to streamline consistent data entry.

OpenCTI is designed around a polished single-page interface, aiming to be accessible to analysts with varying technical backgrounds; light and dark themes have long been built in. Its recent development has focused on the wider Filigran XTM Suite, the OpenCTI 7 long-term-support line, a browser extension for in-context analysis, and Enterprise-Edition automation and RBAC.

## Community and support: a closer look at MISP vs OpenCTI

### MISP: the advantage of longevity

MISP has had time to cultivate a large user community. The project began in [2011 as a proof of concept called "CyDefSIG"](https://www.misp-project.org/who/), created by Christophe Vandeplas and adopted by Belgian Defence; it was renamed MISP in 2012 after NATO's involvement, and has been developed at CIRCL ever since. (So the platform is a year or two older than the "2012" you'll often see quoted.) It now has a large network of users ranging from government agencies to academic institutions, which translates to a significant repository of shared knowledge.

The community's size enables an assortment of integrations and extensions, readily available on GitHub. Its user base contributes to a thriving exchange of scripts and solutions for common problems, and MISP's [mailing list and chat rooms](https://www.misp-project.org/support/) remain active places to seek advice and share experience. The core [MISP/MISP repository has around 6,469 stars and 1,623 forks](https://api.github.com/repos/MISP/MISP) — and that understates the ecosystem, which is spread across many repositories (PyMISP, misp-modules, misp-stix, misp-galaxy and more). Development is very active, shipping incremental releases roughly monthly.

### OpenCTI: the fast-rising contender

Despite being newer, OpenCTI has made significant strides in community engagement since its [first public release (v1.0.0) in June 2019](https://github.com/OpenCTI-Platform/opencti/releases/tag/1.0.0). Created by Samuel Hassine and colleagues in collaboration with France's ANSSI and CERT-EU, and now backed by the company [Filigran (founded in 2022)](https://filigran.io/blog/we-are-filigran-the-new-home-for-opencti-and-openaev/), its modern approach has attracted a fast-growing base of contributors. The [OpenCTI repository now carries around 9,803 stars and 1,431 forks](https://api.github.com/repos/OpenCTI-Platform/opencti) — having overtaken MISP's core repo on stars — with active engagement on GitHub and a Slack community.

### Cross-community sharing

Cross-pollination between the two communities benefits everyone, since both can convert data to and from STIX (with varying degrees of fidelity). The canonical tool for MISP is [misp-stix](https://misp.github.io/misp-stix/), which MISP core uses for STIX import and export; a [February 2025 update](https://www.misp-project.org/2025/02/07/MISP_Support_for_Analyst_Data_converter_from_STIX2.html/) added conversion of STIX 2.1 Notes and Opinions into MISP Analyst Data, closing a gap where analyst context was previously lost.

It's worth being clear-eyed about conversion fidelity, because it's where interoperability projects most often disappoint. Both the MISP↔STIX path and the MISP→OpenCTI connector route through STIX 2.1, so **STIX mapping coverage is the practical ceiling on accuracy** — any MISP construct without a clean STIX 2.1 equivalent is where loss concentrates. The OpenCTI MISP connector also has [documented limits at scale](https://github.com/OpenCTI-Platform/connectors/blob/master/external-import/misp/README.md): objects are batched in chunks of up to 9,999, and events exceeding roughly 10,000 combined attributes and objects are still imported as entities but without the relationships between them. Plan integrations around these realities rather than assuming lossless round-trips.

## Which platform is more popular?

Popularity depends heavily on how you measure it, and the honest 2026 answer is "it's close, and it depends." By GitHub stars, [OpenCTI (~9,803) has overtaken MISP's core repo (~6,469)](https://api.github.com/repos/OpenCTI-Platform/opencti) — a reversal from a few years ago. MISP, however, still leads on forks and, more importantly, on real-world deployment inside threat-sharing communities, which drives a level of viral adoption between industry peers wanting to participate in sharing. (We'd caution against leaning on Google Trends here, as older comparisons did: "MISP" is an ambiguous acronym with many non-security meanings, so raw search-interest comparisons overstate it and aren't a reliable popularity measure.) The fairer summary: OpenCTI is the faster-growing project by developer interest, while MISP retains the larger operational footprint in sharing communities.

## Which should you choose?

There's no universal winner — the two tools optimise for different jobs, and in our client work we deploy both (and sometimes both together).

- **Lean towards MISP** if your priority is **sharing** — running or joining a threat-sharing community, ingesting and distributing IoCs at scale, correlating indicators across events, and feeding detections into SIEMs and controls. It's the de facto standard for community sharing, which is exactly why we built Australia's national CTIS on it.
- **Lean towards OpenCTI** if your priority is **analysis and knowledge management** — modelling threat actors, campaigns and TTPs as a connected STIX 2.1 knowledge graph, with strong entity-relationship visualisation, and (via Enterprise Edition) playbooks, PIRs and RBAC.
- **Consider both** — because they interoperate over STIX, some teams ingest and share via MISP while using OpenCTI as an analyst workbench. The connector limits above are worth designing around.

If MISP is the best fit for your organisation, we recommend [CloudMISP](https://www.cosive.com/cloudmisp), our managed MISP service. CloudMISP makes it easy for any CTI team to get up and running with a production-ready MISP — without the barriers and blockers of an internal IT project — run by the team that operates Australia's national CTIS for 450+ organisations.

If you're exploring OpenCTI but need help with deployment and connectors, [Cosive's engineering team](https://www.cosive.com/contact-us) can assist with containerised deployments, connector development and production tuning. [Contact us](https://www.cosive.com/contact-us) to discuss your needs.

---

## Frequently asked questions

### Should we choose MISP or OpenCTI?

Choose MISP if your priority is threat sharing — running or joining a sharing community and distributing IoCs at scale; choose OpenCTI if your priority is analysis — modelling actors, campaigns and TTPs in a STIX 2.1 knowledge graph. In our work building Australia's national CTIS on MISP and deploying OpenCTI for clients, the deciding factor is almost always what your analysts need to do day to day, not a feature count. Many teams that share heavily standardise on MISP; teams doing deep actor/campaign analysis often prefer OpenCTI's graph.

### Can MISP and OpenCTI work together?

Yes. OpenCTI ships a native, officially maintained MISP connector that imports MISP events into OpenCTI as STIX 2.1 objects, and a stream connector can push OpenCTI data back to MISP — so a common pattern is to share via MISP and analyse in OpenCTI. Design around the connector's documented limits: it batches objects in chunks of up to 9,999, and events over roughly 10,000 combined attributes and objects are imported without their inter-object relationships. Because everything routes through STIX 2.1, conversion fidelity is bounded by STIX mapping coverage.

### Is OpenCTI a drop-in MISP alternative?

No — they solve different problems. MISP is indicator- and sharing-centric with mature Galaxy/Taxonomy tagging and a huge feed and sharing-community ecosystem; OpenCTI is a STIX 2.1 knowledge graph centred on entities and their relationships. Migrating between them is a data-modelling exercise, not a like-for-like swap, and some MISP constructs have no clean STIX 2.1 equivalent. Teams replacing one with the other should expect to rethink workflows, not just export and import.

### Do we need a managed service for either platform?

Not necessarily — both are free to self-host — but many teams choose managed offerings to avoid the operational overhead of upgrades, scaling and patching. For MISP, our CloudMISP delivers a production-ready, single-tenant instance on dedicated infrastructure with SSO and SIEM sync, run by MISP contributors. For OpenCTI, Filigran offers a hosted Enterprise Edition SaaS. Note a key difference: with MISP, managed means operations only (all features are open source); with OpenCTI, a number of advanced features are Enterprise-Edition-only, so a licence unlocks capability as well as support.

### Are MISP and OpenCTI really open source?

Both are, but under different models. MISP is released in full under the AGPLv3 licence — the whole platform is open. OpenCTI is dual-model: a Community Edition under Apache 2.0, plus an Enterprise Edition under a proprietary licence that gates advanced features such as playbooks, PIRs, audit logging, UI-based SSO and AI capabilities. Both are legitimate open-source approaches; the practical difference is what the free version includes.

---

*Sources for every figure and version in this article are listed in the accompanying sources file. Reviewed for technical accuracy by Chris Horsley, Cosive co-founder and MISP contributor, on 13 August 2026.*
