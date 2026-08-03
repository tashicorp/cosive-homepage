# Cosive — FAQPage JSON-LD

⚠️ **Low priority.** Google removed FAQ *rich results* in May 2026, so this no longer shows the SERP dropdown. It remains valid Schema.org and still helps AI/answer engines parse your Q&A. Paste a page's block into **Page settings → Custom Code → Inside `<head>`** only if you want that parsing/AEO benefit.

Generated from each page's existing FAQ accordion — review the text, then use.

*Optional:* you can fold a page's `FAQPage` into that page's `@graph` in `per-page-schema.md` (add it as another array item) instead of pasting a separate `<script>` block — either works.

---

## Automate Your Cybersecurity Ops Team  (3 Q&A)
`https://www.cosive.com/automate-cybersecurity-ops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can automation help our security team move faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation helps your team move faster by handling routine incident-response steps — enrichment, IOC lookups, ticketing — in seconds instead of minutes. That cuts mean-time-to-detect and mean-time-to-respond, and frees analysts for the complex investigations that genuinely need human judgement. Instead of copying data between tools by hand, automated playbooks run the repetitive work for you."
      }
    },
    {
      "@type": "Question",
      "name": "How will SOAR help my team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SOAR platform helps in three ways: it cuts manual workload by automating repetitive tasks like alert enrichment, IOC lookups and ticket creation; it ensures consistency, so every alert gets the same thorough treatment no matter who’s on shift; and it acts as a force multiplier for small teams, handling the volume so your analysts focus on the incidents that genuinely need human investigation."
      }
    },
    {
      "@type": "Question",
      "name": "How will frontier AI models like Mythos 5 impact cybersecurity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frontier AI models will accelerate both sides. Attackers will use them to generate more convincing phishing, find vulnerabilities faster and automate reconnaissance at scale. Defenders have to respond by automating their own processes — using SOAR and AI-assisted triage to match the speed and volume of AI-powered attacks. The organisations that automate early will be best placed to handle the increased pace."
      }
    }
  ]
}
</script>
```

## Build & Integrate CTI Tools  (7 Q&A)
`https://www.cosive.com/build-and-integrate-cti-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What TIP platforms do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with MISP, OpenCTI, EclecticIQ Intelligence Center and any other STIX/TAXII-compatible platform. MISP is our strongest area — we’re core contributors and offer it managed as CloudMISP — but we can integrate with any TIP that exposes an API or supports standard protocols."
      }
    },
    {
      "@type": "Question",
      "name": "Can you get threat intelligence into our MISP platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build custom integrations that connect your existing tools to MISP — ingesting threat feeds, pushing indicators from your SIEM, or automating the flow of intelligence from your SOAR. Whatever the source, we build the connector that makes it happen."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build plugins and integrations for our security tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If it exposes an API, yes. We’ve built MISP modules, OpenCTI connectors and EclecticIQ extensions, and we can build plugins for any tool with an extension point or API — connecting your TIP to your SIEM, SOAR, ticketing and the rest of your stack."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help automate our CTI workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — natively within your tool or as a plugin. We build automated workflows for triage, enrichment and dissemination, and can embed AI/ML-powered analytics directly into your existing platforms, so routine steps run without analyst effort."
      }
    },
    {
      "@type": "Question",
      "name": "What languages do you develop in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most CTI tooling we build is Python — the standard for MISP modules, STIX processing and enrichment pipelines. We use TypeScript for analyst dashboards and APIs, and Rust where high-throughput feed processing or indicator matching demands it. If your ecosystem uses a specific language, we write code that fits your codebase and contribution guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What development practices do you follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CTI data formats keep evolving — STIX adds fields, MISP schemas change, feeds restructure — so we build around that: automated tests validated against real data samples, version-controlled configs, dependency scanning and code review on every change, with CI pipelines (GitHub Actions, GitLab CI) that run integration tests against a staging MISP instance before anything reaches production. You can maintain what we hand over with confidence."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical CTI integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single MISP module or TIP connector typically takes a few weeks. Connecting your TIP to multiple downstream systems — SIEM, SOAR, ticketing — with proper data mapping and STIX translation takes longer, and full platform builds like Atraxium run to months. We scope each engagement on the platforms and data flows involved and give you a realistic timeline before we start."
      }
    }
  ]
}
</script>
```

## Build & Integrate Fraud Tools  (7 Q&A)
`https://www.cosive.com/build-and-integrate-fraud-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kinds of fraud tools can you integrate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If it exposes an API, we can integrate it — transaction monitoring systems, fraud case management platforms, SIEMs, threat intelligence platforms and compliance tools. MISP is the platform most fraud-sharing communities use, so we have deep expertise there, but we also integrate STIX/TAXII platforms, proprietary systems and custom APIs. We work with what you have rather than replacing it."
      }
    },
    {
      "@type": "Question",
      "name": "What if our platform doesn’t have an API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can usually find another way in. Many platforms support file-based imports, database access, webhook triggers or extension plugins — we evaluate your specific setup and recommend the most reliable approach, including building bespoke tooling if that’s what it takes."
      }
    },
    {
      "@type": "Question",
      "name": "Where can you deploy our tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deploy to Azure, AWS, Google Cloud, Hetzner and on-premises infrastructure, in your preferred region — working with your existing setup rather than prescribing a platform, and configuring each deployment to meet your security, compliance and data-residency requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What languages do you develop in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Python and C# are most common in the fraud and banking environments we work in — Python for MISP integrations and data pipelines, C# for the .NET platforms common in financial institutions. We also use TypeScript for dashboards and Rust where transaction throughput or indicator matching demands high performance, matching the language to your stack so your team can maintain it."
      }
    },
    {
      "@type": "Question",
      "name": "What development practices do you follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build for environments where auditors review the code and regulators set the rules: secrets scanning, dependency vulnerability scanning, static analysis, automated testing, code review and full version history on every change, with CI/CD pipelines (Azure DevOps, GitHub Actions, GitLab) that add approval gates and audit logging for regulated deployments. For fraud integrations we add data validation and integrity checks so indicators flowing between your transaction-monitoring system and MISP stay reliable and traceable."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical fraud integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Connecting a single fraud platform to MISP typically takes a few weeks. Integrating multiple systems — transaction monitoring, case management, SIEM — with proper data mapping and compliance controls takes longer, and in banking the change-management and approval process is often slower than the build itself. We scope each engagement individually and give you a realistic timeline upfront."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle maintenance, and can you work with our team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build every integration with automated testing and CI/CD so it’s maintainable from day one — then either provide ongoing support or hand it over with full documentation, so you’re never left with a fragile script that breaks when an API changes. We regularly work alongside in-house teams too, whether that’s building collaboratively, upskilling your developers on MISP, or handling the specialist work while they focus on what they know best."
      }
    }
  ]
}
</script>
```

## Build & Integrate SecOps Tools  (7 Q&A)
`https://www.cosive.com/build-and-integrate-secops-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What SIEM and SOAR platforms can you integrate with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with Microsoft Sentinel, Splunk, Elastic Security, CrowdStrike Falcon, Swimlane, Splunk SOAR, and others. If your platform exposes an API or supports standard integration protocols, we can connect it. We've been building security operations integrations for 8 years and can learn new platforms quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a custom tool for our SOC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your team needs a tool that doesn’t exist — a custom analyst workbench, a detection engineering console, an evidence collection platform — we can build it. Our developers are security engineers who understand SOC workflows. We scope each project by understanding how your analysts actually work, then build something that fits."
      }
    },
    {
      "@type": "Question",
      "name": "Can you connect our EDR to our SIEM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build connectors that push EDR telemetry into your SIEM in real time — alerts, endpoint events, and detection metadata. We have built EDR-to-SIEM integrations for CrowdStrike, Microsoft Defender, and SentinelOne, and can work with any EDR that exposes an API."
      }
    },
    {
      "@type": "Question",
      "name": "Can you automate our alert triage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build automated triage workflows that score and enrich alerts before your analysts see them. Low-confidence alerts get deprioritised automatically, high-confidence alerts get fast-tracked with context attached. We can build this into your SOAR, as a standalone service, or as a plugin for your existing tools."
      }
    },
    {
      "@type": "Question",
      "name": "What is Detection-as-Code and should we use it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detection-as-Code means managing your SIEM detection rules, correlation queries, and response playbooks as version-controlled code — with pull requests, automated testing, and CI/CD deployment. It is useful when your team has outgrown manually editing rules in a web console. We build the tooling and pipelines that make Detection-as-Code practical for SOC teams."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support after building an integration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every project includes documentation and handover so your team can maintain it independently. We also offer ongoing support arrangements — monitoring, updates when vendor APIs change, and enhancements as your requirements evolve."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical SOC integration project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A straightforward API-to-API connector typically takes a few weeks. More complex projects — multiple platforms, custom data mapping, or automation workflows — take longer. We scope each engagement individually and give you a realistic timeline upfront."
      }
    }
  ]
}
</script>
```

## CloudMISP  (7 Q&A)
`https://www.cosive.com/cloudmisp`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is CloudMISP different from running MISP ourselves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is a fully managed MISP platform: you get a production-quality instance on dedicated AWS infrastructure with tested automatic upgrades, encrypted cross-region backups, enterprise SSO and 24/7 monitoring — run by the team that operates Australia's national CTIS for 450+ organisations. Running MISP yourself means building and owning all of that. You could self-host — some teams do. The real question is whether infrastructure is the best use of your analysts' time. CloudMISP takes upgrades, patching, high availability, backups and scaling off their plate, so they focus on creating, curating and sharing intelligence — with direct access to Cosive's MISP specialists."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in each CloudMISP bundle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every CloudMISP bundle comes with at least one production-quality MISP instance on dedicated infrastructure — managed hosting in your preferred AWS region, a dedicated VPC, automatic updates, encrypted backups, enterprise SSO, monitoring and production support. The bundles differ by how much training and hands-on help you need. Core suits teams already comfortable with MISP. Accelerator adds MISP Kickstart training for up to five users and 10 days of Cosive professional services each year — built for teams new to MISP. Share adds a second instance, so you can run one internally and a separate sharing hub for your community."
      }
    },
    {
      "@type": "Question",
      "name": "What can CloudMISP integrate with, and which standards does it support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP connects to the tools your team already runs — SIEMs, EDR, SOAR, network security, enrichment services and other threat-intel platforms — and speaks the open standards MISP supports: STIX/TAXII, OpenIOC, YARA and CSV. Indicators flow into your detection stack without custom plumbing. Our engineers can build and maintain those integrations for you. Optional add-ons include a TAXII Sharing Server for STIX/TAXII sharing and a dedicated Integration Server for heavier integrations."
      }
    },
    {
      "@type": "Question",
      "name": "Where is our data hosted, and how is it kept secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your CloudMISP instance runs in its own dedicated VPC in the AWS region you choose, with encrypted cross-region backups and enterprise SSO controlling access — so your threat intelligence stays isolated to your environment and meets your data-residency requirements. Cosive monitors and patches it 24/7. The platform uses a self-healing architecture with automatic security patching and tested upgrades applied for you."
      }
    },
    {
      "@type": "Question",
      "name": "How do we get started, and how long does it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started begins with a CloudMISP demo and a short scoping conversation about your goals, communities and integrations. Most teams are live on a production instance within a few weeks — the main variable is scoping your sharing groups and connecting your tools. If your team is new to MISP, the Accelerator bundle includes MISP Kickstart training and 10 days of Cosive professional services to get you productive quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Does Cosive contribute to the open-source MISP project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cosive actively contributes to open-source MISP — submitting bug fixes, feature enhancements and documentation — and we operate MISP at national scale, running Australia's Cyber Threat Intelligence Sharing platform (CTIS) for 450+ organisations. That first-hand experience directly shapes how we build, run and support CloudMISP. We also take part in the MISP community through conferences and working groups."
      }
    },
    {
      "@type": "Question",
      "name": "I’m a security researcher — can I get a free CloudMISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is a commercial managed service, so we don't offer free instances — but MISP itself is free and open-source, and you can download and run it yourself. If you're affiliated with a university or research institution, get in touch and we'll see what we can do. We're always glad to support the security research community where we can."
      }
    }
  ]
}
</script>
```

## Consume & Share Fraud Data  (7 Q&A)
`https://www.cosive.com/consume-share-fraud-data`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What regulatory fraud data sharing frameworks do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We connect banks to the major regulatory fraud-sharing frameworks — including ECB FRIDA, France’s FNC-RF, and exchanges supervised by APRA in Australia, the FCA in the UK, and SAMA and CBUAE in the Middle East. Two of the main EU frameworks in more detail: ECB FRIDA (Fraud Reporting and Information-sharing for the Detection and Assessment of fraud) — the ECB’s pan-European fraud data sharing initiative under PSD2 and the upcoming PSR. We help banks structure and exchange fraud indicators across EU member institutions. FNC-RF (Fichier National des Comptes à Risques et des Fraudes) — the Banque de France’s national file for at-risk accounts and fraud. We help French regulated banks share fraud typology data, mule account indicators, and suspicious account information. If your regulator has a specific platform or format requirement, we adapt to it."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle data sovereignty and residency requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is deployed in your preferred AWS region, so your fraud data stays within the jurisdiction you choose. For European banks subject to DORA and GDPR, we offer deployment on the AWS EU Sovereign Cloud — purpose-built infrastructure that keeps data and metadata within the EU, operated by EU-resident staff. You retain full ownership and control of your data at all times. MISP’s granular sharing controls let you define exactly which institutions see which data, down to individual indicators. Data is encrypted in transit and at rest."
      }
    },
    {
      "@type": "Question",
      "name": "We already have fraud detection tools in place. How does this integrate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with the fraud management platforms banks already use — SAS, NICE Actimize, Featurespace, Splunk, and others. We connect them to your MISP instance via REST APIs, STIX/TAXII endpoints, or orchestration plugins, so shared fraud indicators flow directly into your existing detection and monitoring workflows. This isn’t a rip-and-replace. The goal is to make your current tools more effective by feeding them intelligence from your regulatory exchange and peer banks."
      }
    },
    {
      "@type": "Question",
      "name": "What experience does Cosive have with central banks and regulators?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We’ve worked with central banks and financial regulators across multiple jurisdictions. Our team designed and built the infrastructure for Australia’s national threat sharing program, and we’ve helped banks connect to regulatory exchanges in Europe, the UK, the Middle East, and Asia-Pacific. We’re also contributors to MISP — the open-source platform that underpins most regulatory fraud data sharing frameworks — and Liaison Members of FIRST.org, the international incident response organisation. This gives us direct relationships with the teams building the frameworks your institution needs to connect to."
      }
    },
    {
      "@type": "Question",
      "name": "How does fraud data sharing support our DORA obligations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DORA (the Digital Operational Resilience Act) requires financial entities in the EU to establish capabilities for sharing cyber threat and fraud intelligence with trusted communities. Articles 45 and 49 specifically encourage voluntary sharing arrangements between financial entities, provided appropriate confidentiality protections are in place. We help you meet these requirements by deploying a managed sharing platform with the access controls, audit logging, and data governance DORA expects — then connecting you to the relevant regulatory and peer-to-peer sharing communities. The same platform supports both fraud data and cyber threat intelligence sharing, so you can address both obligations with a single infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can we be operational?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most banks are sharing fraud data within a few weeks. The CloudMISP platform itself deploys in days — the majority of time goes into scoping your sharing requirements, configuring taxonomies and sharing groups to match your regulator’s data model, and connecting integrations to your fraud systems. If you’re joining an existing regulatory exchange like FRIDA or FNC-RF, we handle the data mapping and connectivity so your team can focus on operationalising the intelligence rather than building infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "What makes CloudMISP the right platform for fraud data sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is built on MISP, the open-source platform designed for structured threat intelligence sharing, and its core capabilities translate directly to fraud data exchange: Granular sharing controls define exactly which organisations see which data. Taxonomies and galaxies provide standardised vocabularies for classifying fraud events across institutions. Correlation engine links related indicators automatically, surfacing patterns like coordinated mule networks. API-first design means every capability is accessible programmatically for integration with your fraud management platform. CloudMISP also includes the MITRE Fight Fraud Framework (F3) galaxy out of the box — a behaviour-based framework purpose-built for financial fraud that gives participating banks a consistent schema for exchanging fraud TTPs at scale. Because CloudMISP is fully managed, your team gets new frameworks and platform updates automatically."
      }
    }
  ]
}
</script>
```

## Consume & Share Threat Intelligence  (7 Q&A)
`https://www.cosive.com/consume-share-threat-intelligence`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you help us comply with NIS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NIS2 requires essential and important entities to share cyber threat intelligence (Article 29). We deploy managed sharing platforms — like CloudMISP — and connect you to the relevant sectoral ISACs and national CERTs, with the access controls, audit logging and data governance you need to demonstrate compliance."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with DORA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. DORA (Articles 45 and 49) encourages voluntary threat intelligence sharing between financial entities where appropriate confidentiality protections are in place. We deploy platforms with access controls, audit logging and data governance, then connect you to the relevant sharing communities. The same platform handles both threat intelligence and fraud data sharing, so you address both obligations on one infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with the SOCI Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Australia’s Security of Critical Infrastructure (SOCI) Act requires reporting cyber incidents to ASD. We connect you to the ASD’s ACSC threat-sharing feeds and set up reporting workflows via MISP, so your organisation meets its obligations efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with the UK CSR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The UK Cyber Security and Resilience Bill strengthens obligations for critical infrastructure operators. We connect you to UK NCSC feeds and establish sharing arrangements with sector-specific communities so you meet the new requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can you connect us to national CERT and NCSC feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We connect you to national CERT and NCSC threat feeds — including the NZ and UK NCSCs and their MISP-based sharing platforms — handling authentication, feed configuration and automated ingestion, then building workflows so your team can action the intelligence inside your existing tools."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help me start a CTI sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We’ve designed and operated threat intelligence sharing communities for national CERTs and government agencies — covering governance frameworks, platform deployment, member onboarding and ongoing community management. Learn more about starting a sharing community."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us share threat intelligence, not just consume it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — sharing is as important as consuming. We set up sharing workflows, configure TLP and sharing-group controls, automate publishing indicators, and connect you to the communities that matter — sector ISACs, national CERTs or peer organisations — so intelligence flows both ways."
      }
    }
  ]
}
</script>
```

## Cyber Threat Intelligence  (7 Q&A)
`https://www.cosive.com/cyber-threat-intelligence`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is cyber threat intelligence (CTI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cyber threat intelligence (CTI) is the collection, analysis and sharing of information about cyber threats — who is targeting you, how they operate, and what to do about it. It turns raw threat data into decisions your team can act on, from blocking an indicator today to shaping your controls, priorities and budget over the year ahead."
      }
    },
    {
      "@type": "Question",
      "name": "What is a threat intelligence platform (TIP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A threat intelligence platform (TIP) is software that aggregates, correlates and manages threat intelligence from many sources, so your team can enrich indicators, share them with trusted partners and push them into detection tools. MISP is the world's most widely used open-source TIP — and the platform Cosive builds on with CloudMISP."
      }
    },
    {
      "@type": "Question",
      "name": "What is MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP (Malware Information Sharing Platform) is the world's most widely used open-source platform for storing, correlating and sharing threat intelligence with trusted communities. Cosive is a core MISP contributor and runs it at national scale — operating Australia's CTIS for 450+ organisations — and offers it fully managed as CloudMISP."
      }
    },
    {
      "@type": "Question",
      "name": "What is CTI-CMM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CTI-CMM (Cyber Threat Intelligence Capability Maturity Model) is a framework for measuring how mature a threat intelligence programme is across collection, analysis, dissemination and feedback. It gives you a baseline, a benchmark against peers and a prioritised path to improve. Cosive runs CTI-CMM assessments and offers a free CTI-CMM assessment tool."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I share my cyber threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sharing threat intelligence gives everyone in your community earlier warning of attacks: when one organisation spots an indicator or technique, the others can defend against it before it reaches them. It also strengthens ties with peers and regulators, and many resilience frameworks now expect it. Cosive helps teams move from consuming intelligence to sharing it safely."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us find good threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we help you identify, evaluate and source the commercial, open-source and community feeds that fit your threat landscape, then configure MISP to ingest, correlate and deduplicate them so your analysts work on analysis, not data wrangling. See our guide to finding useful threat intelligence feeds."
      }
    },
    {
      "@type": "Question",
      "name": "Can you assess and benchmark our CTI maturity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We run CTI maturity assessments using CTI-CMM to benchmark your programme against industry peers, score you across collection, analysis, dissemination and feedback, and hand back a prioritised roadmap. You can start with our free CTI-CMM assessment tool before a full engagement."
      }
    }
  ]
}
</script>
```

## Find Useful Threat Intelligence Feeds  (6 Q&A)
`https://www.cosive.com/find-useful-threat-intel-feeds`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What threat intelligence feed providers do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with a broad range of commercial and open-source feed providers worldwide, and we’re vendor-neutral — rather than pushing one source, we match you to the feeds that best cover your priority intelligence requirements (PIRs) and operational context, under a single contract where that’s simpler for you."
      }
    },
    {
      "@type": "Question",
      "name": "Can you get threat intelligence feeds into our TIP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we configure feed ingestion, build custom connectors and automate the workflows that get intelligence flowing into your threat intelligence platform, whether that’s CloudMISP, OpenCTI, EclecticIQ or another STIX/TAXII-compatible platform. You get clean, deduplicated intelligence in your tools without manual copy-paste."
      }
    },
    {
      "@type": "Question",
      "name": "What are PIRs (priority intelligence requirements)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priority intelligence requirements (PIRs) define what your organisation actually needs to know about the threat landscape — the questions your intelligence programme exists to answer. They guide which feeds you subscribe to, where analysts focus and what you report, so your CTI effort stays aligned to real business risk rather than chasing everything."
      }
    },
    {
      "@type": "Question",
      "name": "What is a CTI workflow, and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CTI workflow is the process for ingesting, triaging, enriching and distributing threat intelligence. Without one, feeds just become noise; with a good one, the right intelligence reaches the right people at the right time — and flows automatically into the tools that act on it."
      }
    },
    {
      "@type": "Question",
      "name": "Why does triaging threat intelligence matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not all intelligence is relevant to you, so triage is how analysts focus on what matters — filtering out noise and prioritising the indicators that match your threat profile and PIRs. It’s the difference between a feed that drives action and one that drowns your team in alerts."
      }
    },
    {
      "@type": "Question",
      "name": "Should I subscribe to as many feeds as possible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — more feeds doesn’t mean better intelligence. What matters is coverage of your PIRs: a few well-chosen, high-quality feeds consistently outperform a large number of overlapping or irrelevant ones, and cost less to run. Start from what you need to know, then choose feeds to match."
      }
    }
  ]
}
</script>
```

## Fraud Data Sharing  (6 Q&A)
`https://www.cosive.com/fraud-data-sharing`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is fraud data sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fraud data sharing is the structured exchange of fraud indicators, typologies and intelligence between financial institutions, regulators and industry groups. It lets banks detect and stop fraud collectively — sharing mule accounts, fraudster identifiers, emerging attack patterns and suspicious transactions in a standardised, machine-readable format that plugs straight into detection systems."
      }
    },
    {
      "@type": "Question",
      "name": "Why is fraud data sharing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fraudsters hit many banks at once, but each bank usually detects fraud in isolation — so a fraudster blocked by one simply moves to the next. Sharing fraud data lets banks see threats their peers have already caught, block mule accounts across institutions in near real time, meet fraud-reporting regulations, and cut losses collectively rather than one bank at a time."
      }
    },
    {
      "@type": "Question",
      "name": "What types of fraud indicators can be shared?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can share mule account details, suspicious transaction patterns, fraudster identifiers, device fingerprints, IP addresses, phishing URLs and fraud typology descriptions. Cosive configures your platform with fraud-specific object templates and taxonomies so every indicator is structured, searchable and machine-readable — ready to feed straight into your detection and monitoring systems."
      }
    },
    {
      "@type": "Question",
      "name": "What fraud data sharing platforms can you connect us to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialise in MISP, the world's leading open-source intelligence-sharing platform, and offer it fully managed as CloudMISP. Through it we connect you to regulatory frameworks (APRA, ECB FRIDA, FCA, SAMA), peer-to-peer groups with other banks, industry sharing communities and commercial feeds — and integrate with your existing fraud tools like SAS, NICE Actimize, Featurespace and Splunk."
      }
    },
    {
      "@type": "Question",
      "name": "Is shared fraud data kept confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You decide exactly which organisations receive your data, with granular controls at the event, attribute or object level through distribution levels and sharing groups. Data is encrypted in transit and at rest, sharing agreements govern how recipients may use it, and you keep full control of your contributions at all times."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most organisations are up and running on a CloudMISP instance within a few weeks. Platform deployment is fast — most of the time goes into scoping your sharing requirements, configuring taxonomies and sharing groups to match your regulatory obligations, and connecting your existing fraud tools. Peer-to-peer or community sharing timelines depend on how many partner institutions you are onboarding."
      }
    }
  ]
}
</script>
```

## Help Us Join FIRST  (4 Q&A)
`https://www.cosive.com/help-us-join-first`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is FIRST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FIRST (Forum of Incident Response and Security Teams) is the world’s largest community of incident response teams. Founded in 1990, it connects more than 700 teams across over 100 countries — national CERTs, government agencies, financial institutions, technology companies and MSSPs — who share threat intelligence, coordinate incident response and develop the standards used across the industry. It also runs the annual FIRST Conference, one of the most respected defender events globally."
      }
    },
    {
      "@type": "Question",
      "name": "Why should we join FIRST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FIRST membership gives your incident-response team access to trusted intelligence-sharing channels — including the FIRST MISP server — direct collaboration with experienced teams worldwide, discounted access to the annual FIRST Conference, and participation in the Special Interest Groups that shape industry standards. It’s also a recognised credential that signals to regulators, partners and customers that your team meets an international standard of maturity."
      }
    },
    {
      "@type": "Question",
      "name": "What does the FIRST application process involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Applying for FIRST membership involves a structured maturity assessment against specific criteria, a member sponsor, and documentation of your team’s processes. Cosive runs a SIM3 gap analysis upfront to benchmark you against those requirements, close the gaps and prepare the application — so you go in ready rather than discovering issues mid-review."
      }
    },
    {
      "@type": "Question",
      "name": "Can we apply for FIRST membership ourselves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can — and some teams succeed on their own. But applications are judged against maturity criteria that aren’t always obvious from the outside, so unprepared teams often find it takes longer or surfaces gaps they didn’t expect. Working with Cosive means you go in knowing what evaluators look for, and the upfront SIM3 gap analysis leaves your team stronger before you even submit."
      }
    }
  ]
}
</script>
```

## Improve Your Threat Intelligence Team  (3 Q&A)
`https://www.cosive.com/improve-cti-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you help us improve our CTI team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We start with an honest assessment of where your CTI capability is now, identify the gaps that matter most, and build a prioritised roadmap that fits your budget, team size and context. We help at every maturity level — formalising what you already do, choosing a platform, building out the team or upskilling analysts — and we define what “good” looks like for you rather than prescribing a one-size-fits-all model."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us adopt frameworks like ATT&CK and CTI-CMM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We benchmark your programme with CTI-CMM for an objective maturity baseline and actionable recommendations, and we map your detections against MITRE ATT&CK to find and close coverage gaps. Both plug straight into your roadmap, so adopting a framework drives real improvements rather than sitting on a shelf."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to specific threat intelligence feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We connect you to government feeds (NCSC, ASD ACSC, CISA), commercial feeds, open-source sources and sector-specific sharing communities — configuring automated ingestion, handling authentication and format translation, and building workflows so analysts can act on the intelligence inside your existing tools. See our guide to finding useful feeds."
      }
    }
  ]
}
</script>
```

## Improve Your Cybersecurity Ops Team  (4 Q&A)
`https://www.cosive.com/improve-secops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you help us improve our SecOps team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We start by assessing where your team is now — usually with a SIM3 or SOC-CMM maturity assessment — then build a prioritised improvement plan across people, process and tooling. From there we do the practical work: sharpening detection engineering, mapping coverage to MITRE ATT&CK, running tabletop exercises and upskilling analysts so improvements stick. See our full security operations services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the VERIS framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VERIS (Vocabulary for Event Recording and Incident Sharing) is a framework for describing security incidents in a structured, repeatable way. Developed by the team behind the Verizon Data Breach Investigations Report (DBIR), it gives you a common taxonomy for recording who did what to which assets and what the impact was — so you can build a consistent incident database that supports trend analysis, benchmarking and evidence-based security decisions."
      }
    },
    {
      "@type": "Question",
      "name": "What is the SOC-CMM capability maturity model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SOC-CMM (Security Operations Centre Capability Maturity Model) is a framework for assessing and improving a SOC’s maturity across domains including business alignment, people, process, technology and services. It suits teams that are primarily SOC-focused rather than broader CSIRT or incident-response teams — we help you choose between SOC-CMM and SIM3 based on your team structure and goals."
      }
    },
    {
      "@type": "Question",
      "name": "What is a TTX (tabletop exercise)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A TTX (tabletop exercise) is a discussion-based exercise where your team walks through their roles and responses during a simulated security incident. Unlike a full drill, it doesn’t touch live systems — it’s a structured conversation that surfaces gaps in process, communication and decision-making before a real incident does. We design and facilitate TTXs tailored to your threat landscape so the scenarios are relevant and the outcomes actionable."
      }
    }
  ]
}
</script>
```

## Managed MISP (Manage my MISP)  (5 Q&A)
`https://www.cosive.com/manage-my-misp`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens to our existing data if we move to a managed instance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We migrate everything — events, attributes, taxonomies, galaxies, tags, sharing groups and feed configurations. We export from your current instance, import into CloudMISP, and verify every item transferred correctly before you cut over. Your analysts keep working in the same MISP environment they know, just without the operational overhead."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us get more value from MISP without replacing our current setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — not every team needs managed hosting. We improve how you use the MISP you already run: designing workflows that match how your analysts actually work, connecting better intelligence sources, integrating MISP with your SIEM, SOAR or EDR, and building repeatable processes for collection, analysis and dissemination. We meet you where you are."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle MISP updates and security patches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For managed instances, we test every MISP release against a staging environment first, then roll it out — usually within days — using blue/green deployments for zero downtime and no risk of a broken update reaching production. For self-hosted teams, we advise on upgrade planning and help you build a sustainable patching process."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to threat intelligence feeds and sharing communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We connect you to government feeds, commercial providers, open-source sources and sector-specific sharing communities, configuring ingestion for every MISP-supported feed type — MISP feeds, freetext, CSV and STIX/TAXII — and building workflows so analysts can act on the intelligence inside your existing tools. See our guide to finding useful feeds."
      }
    },
    {
      "@type": "Question",
      "name": "How do we know which of your MISP services is right for us?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tell us where you are and we’ll give you honest advice. Some teams hand off MISP operations entirely with CloudMISP; others want targeted help with one problem — connecting a feed, integrating a SIEM, or improving analysis workflows. We’ll recommend what would actually help, whether that’s managed hosting, a consulting engagement, or something you can do yourselves."
      }
    }
  ]
}
</script>
```

## Security Operations  (9 Q&A)
`https://www.cosive.com/security-operations`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SecOps (security operations)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security operations (SecOps) is the people, processes and tools that keep an organisation monitored and defended day to day — detecting threats, investigating alerts, responding to incidents and continuously improving. A SecOps or SOC team runs monitoring and triage, incident response, threat hunting and detection engineering. Cosive helps you start, run and improve security operations with independent, engineering-led advice."
      }
    },
    {
      "@type": "Question",
      "name": "What is SOAR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SOAR (Security Orchestration, Automation and Response) is a category of platform that connects your security tools together and automates the workflows between them — enrichment, triage, ticketing and response — so routine steps happen in seconds instead of minutes. It cuts alert noise and frees analysts for the judgement calls only people can make. Cosive helps teams adopt SOAR pragmatically."
      }
    },
    {
      "@type": "Question",
      "name": "What is SIM3?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SIM3 (Security Incident Management Maturity Model) measures how mature an incident-response capability is across four areas: organisation, human, tools and processes. It's the model used to benchmark CSIRTs and prepare for FIRST membership or TF-CSIRT accreditation. Cosive runs SIM3 assessments — benchmarking your team, identifying gaps and building a remediation plan aligned to those requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How do you assess our SOC maturity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We assess your security operations with the SIM3 maturity model across four dimensions — organisation, human resources, tools and processes — giving you a clear picture of where you stand, where the gaps are, and a prioritised roadmap you can take to the board. We also work with SOC-CMM where it fits your goals."
      }
    },
    {
      "@type": "Question",
      "name": "How do I prioritise which threats to focus on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use threat modelling to pinpoint the adversaries, techniques and attack vectors most relevant to your sector and infrastructure, then map your coverage to MITRE ATT&CK so you can see exactly where detection is strong and where to invest next. See our guide to using the ATT&CK framework."
      }
    },
    {
      "@type": "Question",
      "name": "Our security tools don't talk to each other — can you help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — we integrate your SIEM, SOAR, EDR, threat intelligence platforms and ticketing systems into one connected workflow. Our approach is vendor-neutral: we get more value from what you already run rather than pushing replacements. See how we build and integrate security operations tools."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us stand up a new CSIRT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We've built CSIRTs at national, sector and organisational levels across government and critical infrastructure — covering team structure, processes, tooling and training, and guiding you through SIM3 assessment and FIRST membership once you're operational. See how we help you start a new security operations team."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest path to FIRST membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We guide you through the whole process — from a gap analysis against the entry requirements to building the processes and documentation the review committee expects. Our team includes FIRST.org advisors who know exactly what acceptance takes. See how we help you join FIRST."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make the case for security operations investment to the board?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frame it in terms the board understands: risk reduction, incident-response times, detection-coverage percentages and benchmark comparisons against peers. A mature SOC isn't a cost centre — it's a measurable reduction in organisational risk, and we help you build that business case with hard numbers from your maturity assessment."
      }
    }
  ]
}
</script>
```

## Start a CTI Sharing Community  (5 Q&A)
`https://www.cosive.com/start-cti-sharing-community`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you help us start a new sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with you from the start — defining the community’s purpose and scope, identifying founding members, designing governance and legal frameworks, choosing a platform like CloudMISP, and planning member onboarding and engagement. Whether you’re a national cyber security centre, an ISAC or an enterprise sharing with peers, we tailor the approach — and we’ve done it at national scale and for smaller sector groups."
      }
    },
    {
      "@type": "Question",
      "name": "Our sharing is still manual — how do you help us automate it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many communities start with email, spreadsheets and PDF reports — a perfectly valid start. When you’re ready to automate, we deploy a platform like CloudMISP, configure MISP or STIX/TAXII integrations for each member, and build ingestion and dissemination pipelines. We meet each member at their maturity level — some connect via API on day one, others need a simpler path — so no member gets left behind."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle the legal side of sharing threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legal concerns are consistently the biggest barrier to getting a community off the ground, so we tackle them head-on — drafting data-handling agreements, defining TLP and classification rules, and designing workflows that give legal and compliance teams confidence that sensitive information stays within agreed boundaries. We’ve navigated this with government agencies, regulators and enterprise legal teams across multiple jurisdictions. The goal isn’t to eliminate risk — it’s to make it well-understood and manageable."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also help us consume threat intelligence, not just share it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same platform and expertise we use for community sharing also supports organisations that want to consume threat intelligence from external feeds, open-source intelligence and commercial providers. Learn more about consuming and sharing threat intelligence."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find good threat intelligence feeds for my programme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain a curated view of open-source and commercial feeds and help you evaluate which are most relevant to the threats you actually face — then integrate them into your tools so analysts can act on the intelligence, not just collect it. See our guide to finding useful threat intelligence feeds."
      }
    }
  ]
}
</script>
```

## Start a New Cybersecurity Ops Team  (5 Q&A)
`https://www.cosive.com/start-new-cybersecurity-ops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I start a cybersecurity operations team from scratch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by understanding what your organisation actually needs to protect, then map the functions your team will provide — monitoring, detection, incident response, vulnerability management — and match them to realistic team sizes and budgets. Most effective teams start small (two or three people on the highest-priority functions) and grow deliberately. A SIM3 assessment gives you an objective baseline, and a phased roadmap stops you trying to do everything at once."
      }
    },
    {
      "@type": "Question",
      "name": "How many people do I need on a security operations team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There’s no single number — it depends on the functions you need to cover, your risk profile and your coverage requirements. Some organisations run effective security operations with three people; others need fifteen or more. Start by defining what your team must do — 24/7 monitoring versus business-hours triage — then factor in what can be automated or outsourced. A small team doing the right things well beats a large one spread too thin."
      }
    },
    {
      "@type": "Question",
      "name": "What roles do I need to hire for a new SOC or SecOps team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most new teams start with a mix of incident responders and security analysts who can triage alerts, investigate incidents and maintain detection rules, then add dedicated roles — threat intelligence, detection engineering, vulnerability management, security automation — as they mature. When hiring, prioritise strong analytical thinking and clear communication: technical knowledge can be trained, but investigative judgement is harder to teach."
      }
    },
    {
      "@type": "Question",
      "name": "What frameworks should I use to build a security operations team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The two most widely used are SIM3 (best for benchmarking and certifying CSIRTs and SOCs) and SOC-CMM (designed specifically for SOC-focused teams). MITRE ATT&CK is also valuable for mapping detection coverage and finding gaps. The right choice depends on your team structure and goals — we help you pick and apply the one that fits."
      }
    },
    {
      "@type": "Question",
      "name": "Should I outsource security operations or build an in-house team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both work, and many organisations use a hybrid. An in-house team gives you direct control, deeper organisational knowledge and the ability to handle sensitive investigations internally; outsourcing to a managed SOC can provide 24/7 coverage and specialist expertise a small internal team can’t sustain. It often comes down to which functions need internal context — incident response and threat intelligence do — versus which can be commoditised, like first-tier monitoring. A small in-house team plus external support is a common, effective start."
      }
    }
  ]
}
</script>
```

## Start a Fraud Data Sharing Community  (6 Q&A)
`https://www.cosive.com/start-sharing-community`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you help me plan a new sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help with every stage of community planning — from identifying your community niche and defining membership requirements, to designing governance frameworks, funding models, and the technical infrastructure that underpins it all. We build most communities on CloudMISP, our managed MISP platform purpose-built for multi-party fraud data sharing with member isolation and granular sharing groups — and we also support self-hosted MISP, STIX/TAXII exchanges and custom integrations. Whether you're a central bank, government agency or industry body, we design a community that fits your sector's needs and regulatory context."
      }
    },
    {
      "@type": "Question",
      "name": "My regulator's platform isn't listed. Can you support my regulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We've worked with regulators globally and can support any structured data exchange requirement. We'll work with you to understand your regulator's specific format, reporting cadence, and connectivity requirements, then configure the platform accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "How do you help onboard new members into a sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting member organisations from “interested” to “actively sharing” is the hardest part of running a community. We make onboarding frictionless by handling the technical setup — provisioning accounts, configuring sharing groups and access controls, and integrating the platform with each member's existing fraud or security tools via API. We also run analyst workshops that cover what to share, how to structure indicators, and how to get value from community data. New members can start by consuming shared intelligence before they're ready to contribute, which lowers the barrier to entry. After go-live we help community operators spot inactive members and re-engage them so the community keeps growing. We've done this at national scale with Australia's threat sharing program. Talk to us about member onboarding."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also help me share cyber threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same platform that supports fraud data sharing can also be used for cyber threat intelligence. Many communities share both. Learn more about our cyber threat intelligence services."
      }
    },
    {
      "@type": "Question",
      "name": "Why would my bank share fraud data with competitors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fraud rings don't target one bank at a time — they hit multiple institutions simultaneously. No single bank sees the full picture, which is exactly what the attackers rely on. Sharing mule account indicators, fraud typologies, and emerging scheme patterns across banks means every member detects attacks faster and with more confidence. The key concern we hear from CISOs is loss of control over sensitive data. MISP's sharing groups and granular access controls address this directly: each bank decides exactly what it shares, with whom, and under what terms. Proprietary customer data never leaves your organisation — what gets shared are anonymised indicators and tactical patterns that help the whole community defend better. This isn't theoretical. Communities like the UK's CIFAS and Australia's AFP-led fraud intelligence program have proven the model at scale. The net effect is straightforward: your own detection rates improve as other members contribute their observations, and you gain early warning of schemes before they reach your customers."
      }
    },
    {
      "@type": "Question",
      "name": "How does a sharing community help us meet regulatory expectations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regulators increasingly expect financial institutions to actively participate in fraud intelligence sharing — not just file compliance reports after the fact. Running or joining a structured sharing community demonstrates proactive risk management to your supervisors and positions your institution as a responsible actor in the financial ecosystem. Emerging regulations are making this expectation explicit. The EU's PSD3/PSR framework, the UK's APP fraud measures, and similar obligations in Australia all point toward mandatory participation in fraud data sharing. A community built on a platform like CloudMISP means you're already ahead of these requirements rather than scrambling to comply after they take effect. From a practical standpoint, the platform's logging and reporting capabilities produce audit-ready evidence of your sharing activity. When a supervisor asks what your institution is doing to combat fraud collaboratively, you have a clear, documented answer — complete with participation metrics, sharing volumes, and contribution history."
      }
    }
  ]
}
</script>
```

## Use the ATT&CK Framework  (6 Q&A)
`https://www.cosive.com/use-attack-framework`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the MITRE ATT&CK Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MITRE ATT&CK is a free, globally used knowledge base of real-world adversary tactics and techniques — how attackers behave once inside a network, from initial access through to exfiltration. Security teams use it to map detection coverage, guide threat hunting and structure threat intelligence. The full knowledge base is at attack.mitre.org, and the ATT&CK Navigator lets you build custom coverage heatmaps."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from CAPEC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CAPEC (Common Attack Pattern Enumeration and Classification) catalogues attack patterns at a higher level of abstraction — general categories of attack. ATT&CK focuses on observed adversary behaviour and TTPs from real intrusions, giving far more specific, actionable detail about how attackers operate in practice."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from CVE and CWE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CVE identifies specific software vulnerabilities and CWE classifies types of software weakness, while ATT&CK describes what attackers do after exploiting them — the tactics and techniques they use to move through your environment, escalate privileges and reach their objectives. They’re complementary: CVE/CWE tell you what’s vulnerable, ATT&CK tells you what adversaries do next."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from the Cyber Kill Chain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cyber Kill Chain (from Lockheed Martin) describes attack phases at a high level across seven stages, from reconnaissance to actions on objectives. ATT&CK goes far more granular within each phase, with hundreds of specific techniques mapped to real threat groups. Think of the Kill Chain as the high-level narrative and ATT&CK as the detailed playbook beneath it."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from the Diamond Model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Diamond Model describes the relationships between four features of an intrusion — adversary, capability, infrastructure and victim — as a way to structure intelligence analysis. ATT&CK provides the detailed technique taxonomy you map into it, populating the “capability” vertex with granular, observed adversary behaviours."
      }
    },
    {
      "@type": "Question",
      "name": "How can Cosive help us put ATT&CK into practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We turn ATT&CK from a reference into working defence — mapping your current detection coverage against the framework, running gap analysis, and building the detection engineering to close the highest-priority gaps. That way your team focuses effort where real adversaries operate, not everywhere at once."
      }
    }
  ]
}
</script>
```
