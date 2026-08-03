# Cosive — FAQPage JSON-LD

⚠️ **Low priority.** Google removed FAQ *rich results* in May 2026, so this no longer shows the SERP dropdown. It remains valid Schema.org and still helps AI/answer engines parse your Q&A. Paste a page's block into **Page settings → Custom Code → Inside `<head>`** only if you want that parsing/AEO benefit.

Generated from each page's existing FAQ accordion — review the text, then use.

*Optional:* you can fold a page's `FAQPage` into that page's `@graph` in `per-page-schema.md` (add it as another array item) instead of pasting a separate `<script>` block — either works.

---

## Automate Your Cybersecurity Ops Team  (4 Q&A)
`https://www.cosive.com/automate-cybersecurity-ops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can automation help us move faster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation removes manual bottlenecks from your incident response and triage processes. Instead of analysts copying data between tools, running lookups, and writing reports by hand, automated playbooks handle routine steps in seconds. This means faster mean-time-to-detect, faster mean-time-to-respond, and more time for your team to focus on the complex investigations that actually need human judgement."
      }
    },
    {
      "@type": "Question",
      "name": "How will Mythos 5 and other Frontier AI models impact cybersecurity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Frontier AI models will likely accelerate both sides of cybersecurity. Attackers will use them to generate more convincing phishing, discover vulnerabilities faster, and automate reconnaissance at scale. Defenders need to respond by automating their own processes — using SOAR platforms and AI-assisted triage to match the speed and volume of AI-powered attacks. The organisations that automate early will be better positioned to handle the increased pace."
      }
    },
    {
      "@type": "Question",
      "name": "What is SOAR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SOAR stands for Security Orchestration, Automation and Response. It's a category of platform that connects your security tools together and automates workflows between them. Instead of analysts manually pivoting between your SIEM, threat intel platform, ticketing system, and firewall, a SOAR platform orchestrates those actions through automated playbooks. Think of it as codifying your best analyst's decision-making into repeatable, automated processes."
      }
    },
    {
      "@type": "Question",
      "name": "How will SOAR help me and my team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SOAR platform helps your team in three key ways. First, it reduces the manual workload by automating repetitive tasks like alert enrichment, IOC lookups, and ticket creation. Second, it ensures consistency — every alert gets the same thorough treatment regardless of which analyst is on shift or how busy the day is. Third, it acts as a force multiplier for small teams — automation handles the volume so your analysts can focus on the incidents that genuinely need human investigation."
      }
    }
  ]
}
</script>
```

## Build & Integrate CTI Tools  (8 Q&A)
`https://www.cosive.com/build-and-integrate-cti-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you help me get threat intelligence into my MISP platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build custom integrations that connect your existing security tools to MISP. Whether you need to ingest threat feeds, push indicators from your SIEM, or automate the flow of intelligence from your SOAR — we can build the integration that makes it happen."
      }
    },
    {
      "@type": "Question",
      "name": "What TIP platforms do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with MISP, OpenCTI, EclecticIQ Intelligence Center, and other STIX/TAXII-compatible platforms. We're TIP experts — MISP is our strongest area, but we can integrate with any platform that exposes an API or supports standard protocols."
      }
    },
    {
      "@type": "Question",
      "name": "What languages do you develop in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most CTI tooling we build is in Python — it's the standard for MISP modules, STIX processing, and enrichment pipelines. We also use TypeScript for web-based analyst dashboards and APIs, and Rust where high-throughput feed processing or indicator matching demands it. If your TIP ecosystem uses a specific language, we write code that fits into your existing codebase and contribution guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What CI/CD platforms can you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GitHub Actions and GitLab CI/CD are the most common in CTI teams we work with, but we also build on Azure DevOps, Bitbucket Pipelines, and Jenkins. For MISP modules and TIP connectors specifically, we set up pipelines that run integration tests against a staging MISP instance before deployment — so you know a new module works before it touches production data."
      }
    },
    {
      "@type": "Question",
      "name": "What development practices do you follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CTI data formats evolve — STIX adds fields, MISP schemas change, feed sources restructure their output. Our development practices are designed around that reality: automated tests that validate against real data samples, version-controlled configurations, dependency scanning, and code review on every change. When we hand over a MISP module or enrichment pipeline, your team can maintain it with confidence."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build plugins for my security tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If it has an API, yes. We're TIP experts — we've built MISP modules, OpenCTI connectors, and EclecticIQ extensions — but we can also build plugins for any technology that exposes an extension point or API."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help automate our CTI workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — either natively within your tool or as a plugin. We build automated workflows for triage, enrichment, dissemination, and more. We also build AI/ML-powered analytics that can be embedded directly into your existing platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical CTI integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A single MISP module or TIP connector typically takes a few weeks. Connecting your TIP to multiple downstream systems — SIEM, SOAR, ticketing — with proper data mapping and STIX translation usually takes longer. Full platform builds like Atraxium are measured in months. We scope each engagement based on the specific platforms and data flows involved, and give you a realistic timeline before we start."
      }
    }
  ]
}
</script>
```

## Build & Integrate Fraud Tools  (10 Q&A)
`https://www.cosive.com/build-and-integrate-fraud-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What languages do you develop in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Python and C# are the most common in the fraud and banking environments we work in — Python for MISP integrations and data pipelines, C# for .NET platforms common in financial institutions. We also use TypeScript for web-based dashboards and Rust where transaction throughput or indicator matching demands high performance. We match the language to your existing technology stack so the code fits into your environment and your team can maintain it."
      }
    },
    {
      "@type": "Question",
      "name": "What CI/CD platforms can you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Azure DevOps is the most common in the financial institutions we work with, but we also build on GitHub Actions, GitLab CI/CD, Bitbucket Pipelines, and Jenkins. For regulated environments, we configure pipelines with approval gates, audit logging, and deployment controls that satisfy compliance requirements — not just automated builds, but a deployment process your auditors can review."
      }
    },
    {
      "@type": "Question",
      "name": "Where can you deploy our tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deploy to Azure, AWS, Google Cloud, Hetzner, and on-premises infrastructure. For cloud deployments, we can deploy to your preferred region on any of those providers. We work with your existing infrastructure rather than prescribing a specific platform, and we configure deployments to meet your security, compliance, and data residency requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What development practices do you follow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build for environments where auditors review the code and regulators set the rules. That means secrets scanning, dependency vulnerability scanning, static analysis, automated testing, code review, and full version history on every change. For fraud data integrations specifically, we add data validation and integrity checks so that indicators flowing between your transaction monitoring system and MISP are reliable and traceable."
      }
    },
    {
      "@type": "Question",
      "name": "What kinds of tools can you integrate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If it has an API, we can integrate it. We've integrated transaction monitoring systems, fraud case management platforms, SIEMs, threat intelligence platforms, compliance tools, and more. We work with what you have rather than asking you to replace it."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work with MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. MISP is the platform most fraud sharing communities use, so we have deep expertise there. But we also integrate with STIX/TAXII platforms, proprietary systems, and custom APIs. If your community or regulator uses a different platform, we can integrate with it."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical fraud integration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Connecting a single fraud platform to MISP typically takes a few weeks. Integrating multiple systems — transaction monitoring, case management, SIEM — with proper data mapping and compliance controls takes longer. In banking environments, the integration work itself is often faster than the change management and approval process. We scope each engagement individually, account for those realities, and give you a realistic timeline upfront."
      }
    },
    {
      "@type": "Question",
      "name": "What if our platform doesn't have an API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can often find other ways to integrate. Some platforms support file-based imports, database access, webhook triggers, or extension plugins. We evaluate your specific setup and recommend the most reliable approach — including building bespoke tooling if that's what it takes."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle ongoing maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We create new integrations with automated testing and CI/CD pipelines, so they're designed to be maintainable from day one. We can provide ongoing support, or hand the integration over to your team with full documentation. Either way, you're not left with a fragile script that breaks when an API changes."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing development team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly work alongside in-house teams, whether that means creating new integrations collaboratively, upskilling your developers on MISP and its APIs, or handling the specialist work while your team focuses on what they know best. We adapt to your preferred ways of working."
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
        "text": "We work with Microsoft Sentinel, Splunk, Elastic Security, CrowdStrike Falcon, Swimlane, Splunk SOAR, and others. If your platform exposes an API or supports standard integration protocols, we can connect it. We have been building security operations integrations for 8 years and can learn new platforms quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a custom tool for our SOC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your team needs a tool that doesn't exist — a custom analyst workbench, a detection engineering console, an evidence collection platform — we can build it. Our developers are security engineers who understand SOC workflows. We scope each project by understanding how your analysts actually work, then build something that fits."
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
        "text": "It depends on scope. A straightforward API-to-API connector might take a few weeks. More complex projects involving multiple platforms, custom data mapping, or automation workflows take longer. We scope each engagement individually and give you a realistic timeline upfront."
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
      "name": "What is MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP (Malware Information Sharing Platform) is an open-source threat intelligence platform used by security teams worldwide. It helps organisations collect, store, share, and correlate indicators of compromise (IOCs) and other threat data. MISP is maintained by an active global community and is used by national CERTs, ISACs, and private-sector security teams alike."
      }
    },
    {
      "@type": "Question",
      "name": "How is CloudMISP different to open-source MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is built on MISP, but it is not just MISP on a server. We add managed infrastructure, automatic upgrades with comprehensive testing, SSO integration, encrypted backups, self-healing architecture, and enterprise features like TAXII serving and custom SIEM integrations. You get an enterprise-grade platform — with the reliability, security, and compliance posture your organisation expects — without needing a team to build and maintain the infrastructure around it."
      }
    },
    {
      "@type": "Question",
      "name": "Does Cosive contribute to the open-source MISP project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cosive actively contributes to the MISP open-source project. We submit bug fixes, feature enhancements, and documentation improvements. We also participate in the MISP community through conferences, working groups, and community discussions. Our experience operating MISP at scale directly informs the contributions we make upstream."
      }
    },
    {
      "@type": "Question",
      "name": "What is MISP good for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP excels at collecting and correlating indicators of compromise, managing threat intelligence feeds, sharing intelligence with trusted partners, and distributing IOCs to security tools like SIEMs and firewalls. It is particularly strong for teams that need to collaborate — whether internally across departments or externally across organisations and sectors."
      }
    },
    {
      "@type": "Question",
      "name": "What is MISP not good for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP is not a SIEM, a SOAR, or an endpoint detection tool. It does not replace your security monitoring stack — it complements it. If you need real-time alerting, automated response playbooks, or endpoint visibility, those are separate tools that MISP integrates with. MISP is best thought of as the connective tissue that makes your other security tools more effective."
      }
    },
    {
      "@type": "Question",
      "name": "I'm a security researcher — can I have a free CloudMISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is a commercial managed service, so we do not offer free instances. However, MISP itself is free and open-source — you can download and run it yourself. If you are a researcher affiliated with a university or research institution, get in touch and we will see what we can do. We are always happy to support the security research community where we can."
      }
    },
    {
      "@type": "Question",
      "name": "I could build this all myself!",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You absolutely could — and some organisations do. The question is whether that is the best use of your team's time. Running MISP at enterprise scale means handling upgrades, monitoring, encrypted backups, SSO integration, high availability, compliance, and scaling — on top of the analyst workflow that MISP is actually for. CloudMISP lets your team focus on threat intelligence work instead of infrastructure maintenance. For most teams, that trade-off makes sense. Plus, with CloudMISP you get direct access to the Cosive team — specialists who can help you operationalise MISP, connect it to your workflows, and get real value from your threat intelligence programme."
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
        "text": "We work with banks connected to the major regulatory sharing frameworks, including: ECB FRIDA (Fraud Reporting and Information-sharing for the Detection and Assessment of fraud) — the ECB's pan-European fraud data sharing initiative under PSD2 and the upcoming PSR. We help banks structure and exchange fraud indicators across EU member institutions. FNC-RF (Fichier National des Comptes &agrave; Risques et des Fraudes) — the Banque de France's national file for at-risk accounts and fraud. We help French regulated banks share fraud typology data, mule account indicators, and suspicious account information. We also support APRA-regulated banks in Australia, FCA-regulated institutions in the UK, and banks supervised by SAMA and CBUAE in the Middle East. If your regulator has a specific platform or format requirement, we can adapt to it."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle data sovereignty and residency requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is deployed in your preferred AWS region, so your fraud data stays within the jurisdiction you choose. For European banks subject to DORA and GDPR, we offer deployment on the AWS EU Sovereign Cloud — purpose-built infrastructure that keeps data and metadata within the EU, operated by EU-resident staff. You retain full ownership and control of your data at all times. MISP's granular sharing controls let you define exactly which institutions see which data, down to individual indicators. Data is encrypted in transit and at rest."
      }
    },
    {
      "@type": "Question",
      "name": "We already have fraud detection tools in place. How does this integrate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with the fraud management platforms banks already use — SAS, NICE Actimize, Featurespace, Splunk, and others. We connect them to your MISP instance via REST APIs, STIX/TAXII endpoints, or orchestration plugins, so shared fraud indicators flow directly into your existing detection and monitoring workflows. This isn't a rip-and-replace. The goal is to make your current tools more effective by feeding them intelligence from your regulatory exchange and peer banks."
      }
    },
    {
      "@type": "Question",
      "name": "What experience does Cosive have with central banks and regulators?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We've worked with central banks and financial regulators across multiple jurisdictions. Our team designed and built the infrastructure for Australia's national threat sharing program, and we've helped banks connect to regulatory exchanges in Europe, the UK, the Middle East, and Asia-Pacific. We're also contributors to MISP — the open-source platform that underpins most regulatory fraud data sharing frameworks — and Liaison Members of FIRST.org, the international incident response organisation. This gives us direct relationships with the teams building the frameworks your institution needs to connect to."
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
        "text": "Most banks are sharing fraud data within a few weeks. The CloudMISP platform itself deploys in days — the majority of time goes into scoping your sharing requirements, configuring taxonomies and sharing groups to match your regulator's data model, and connecting integrations to your fraud systems. If you're joining an existing regulatory exchange like FRIDA or FNC-RF, we handle the data mapping and connectivity so your team can focus on operationalising the intelligence rather than building infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "What makes CloudMISP the right platform for fraud data sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is built on MISP, the open-source platform designed for structured threat intelligence sharing. Its core capabilities translate directly to fraud data exchange: Granular sharing controls define exactly which organisations see which data. Taxonomies and galaxies provide standardised vocabularies for classifying fraud events across institutions. Correlation engine links related indicators automatically, surfacing patterns like coordinated mule networks. API-first design means every capability is accessible programmatically for integration with your fraud management platform. CloudMISP also includes the MITRE Fight Fraud Framework (F3) galaxy out of the box — a behaviour-based framework purpose-built for financial fraud that gives participating banks a consistent schema for exchanging fraud TTPs at scale. Because CloudMISP is fully managed, your team gets new frameworks and platform updates automatically."
      }
    }
  ]
}
</script>
```

## Consume & Share Threat Intelligence  (9 Q&A)
`https://www.cosive.com/consume-share-threat-intelligence`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What threat intelligence platforms do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is our managed MISP SaaS — rearchitected, containerised, and deployed in a dedicated VPC in your preferred AWS region. We also support Filligran OpenCTI and EclecticIQ Intelligence Center . We integrate with existing MISP deployments and other vendor TIPs via STIX/TAXII and REST APIs. If your organisation already runs a platform, we work with it rather than replacing it."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with NIS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NIS2 requires essential and important entities to share cyber threat intelligence. We deploy managed sharing platforms and connect you to relevant sectoral ISACs and national CERTs, covering Article 29 information sharing requirements. Our platforms include the access controls, audit logging, and data governance needed to demonstrate compliance."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with DORA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. DORA Articles 45 and 49 encourage voluntary threat intelligence sharing between financial entities, provided appropriate confidentiality protections are in place. We deploy platforms with access controls, audit logging, and data governance, then connect you to the relevant sharing communities. The same platform handles both threat intelligence and fraud data sharing, so you can address both obligations with a single infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with the SOCI Act?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Australia's Security of Critical Infrastructure Act requires reporting of cyber incidents to ASD. We help you connect to ASD ACSC's threat sharing feeds and establish reporting workflows via MISP, so your organisation can meet its obligations efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us comply with the UK CSR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The UK Cyber Security and Resilience Bill strengthens obligations for critical infrastructure operators. We help you connect to UK NCSC feeds and establish sharing arrangements with sector-specific communities, ensuring your organisation meets the new requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to the NZ NCSC feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help organisations connect to the NZ National Cyber Security Centre's threat intelligence feeds via MISP, configure automated ingestion, and develop workflows to action the intelligence within your existing security tools."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to the UK NCSC feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We configure connections to the UK NCSC's threat data feeds, including their MISP-based sharing platform. We handle authentication, feed configuration, and integration with your existing security tools."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help me start a cyber threat intelligence sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We've designed and operated threat intelligence sharing communities for national CERTs and government agencies. We help with governance frameworks, platform deployment, onboarding processes, and ongoing community management. Learn more about starting a sharing community ."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also help me share cyber threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Sharing is as important as consuming. We help you establish sharing workflows, configure TLP and sharing group controls, develop automation for publishing indicators, and connect to your relevant sharing communities — whether they're sector ISACs, national CERTs, or peer organisations."
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
      "name": "What is CTI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cyber Threat Intelligence is the collection, analysis, and dissemination of information about current and potential cyber threats. It helps organisations understand who is targeting them, how attacks are carried out, and what they can do to defend themselves. CTI turns raw threat data into actionable intelligence that security teams can use to prioritise defences and respond to incidents faster."
      }
    },
    {
      "@type": "Question",
      "name": "What is a TIP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Threat Intelligence Platform (TIP) is software that aggregates, correlates, and manages threat intelligence from multiple sources. It allows security teams to collect indicators of compromise (IOCs), enrich them with context, share them with trusted partners, and feed them into detection and response tools. MISP is the world's most widely used open-source TIP."
      }
    },
    {
      "@type": "Question",
      "name": "What is MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP (Malware Information Sharing Platform) is the world's most widely used open-source platform for sharing, storing, and correlating threat intelligence. It enables organisations to share indicators of compromise, threat reports, and contextual information with trusted communities. Cosive is a core contributor to MISP and operates CloudMISP, a fully managed MISP hosting service."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I share my cyber threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sharing threat intelligence helps the broader security community detect and respond to threats faster. When organisations share indicators, TTPs, and threat reports, everyone benefits from earlier warning of attacks. Sharing also strengthens relationships with peers and regulators, and many frameworks now require or encourage intelligence sharing as part of operational resilience."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us find good threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help organisations identify and evaluate commercial, open-source, and community threat intelligence feeds relevant to their threat landscape. We configure MISP to ingest, correlate, and deduplicate feeds so your analysts spend time on analysis, not data wrangling."
      }
    },
    {
      "@type": "Question",
      "name": "Can you benchmark us against others?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We conduct CTI maturity assessments using frameworks like CTI-CMM to benchmark your program against industry peers. This identifies gaps in your collection, analysis, dissemination, and feedback processes, and provides a prioritised roadmap for improvement."
      }
    },
    {
      "@type": "Question",
      "name": "Can you do CTI-CMM audits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We are experienced in CTI-CMM (Cyber Threat Intelligence Capability Maturity Model) assessments. We evaluate your CTI program across all maturity dimensions, provide a detailed scorecard, and deliver actionable recommendations to advance your capabilities."
      }
    }
  ]
}
</script>
```

## Find Useful Threat Intelligence Feeds  (7 Q&A)
`https://www.cosive.com/find-useful-threat-intel-feeds`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What threat intelligence feed providers do you have a relationship with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with a range of commercial and open-source feed providers globally. Rather than being tied to one vendor, we match you with the providers that best cover your PIRs and operational context."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help me get threat intelligence into my MISP platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We configure feed ingestion, build custom connectors, and set up automated workflows to get intelligence flowing into your MISP instance."
      }
    },
    {
      "@type": "Question",
      "name": "What are PIRs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Priority Intelligence Requirements. They define what your organisation actually needs to know about the threat landscape — guiding your feed selection, analyst focus, and reporting."
      }
    },
    {
      "@type": "Question",
      "name": "What TIP platforms do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer CloudMISP (our managed MISP platform), OpenCTI Enterprise, and EclecticIQ Intelligence Center. We also integrate with other STIX/TAXII-compatible platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What is a CTI workflow and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CTI workflow is the process for ingesting, triaging, enriching, and distributing threat intelligence. Without one, feeds become noise. A good workflow ensures the right intelligence reaches the right people at the right time."
      }
    },
    {
      "@type": "Question",
      "name": "Why do you need to triage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not all intelligence is relevant to your organisation. Triaging lets your analysts focus on what matters — filtering out noise and prioritising indicators that match your threat profile and PIRs."
      }
    },
    {
      "@type": "Question",
      "name": "Should I get as many intelligence feeds as possible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "More feeds doesn't mean better intelligence. What matters is coverage of your PIRs. A few well-chosen, high-quality feeds will outperform a large number of overlapping or irrelevant ones."
      }
    }
  ]
}
</script>
```

## Fraud Data Sharing  (8 Q&A)
`https://www.cosive.com/fraud-data-sharing`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Fraud Data Sharing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fraud data sharing is the structured exchange of fraud indicators, typologies, and intelligence between financial institutions, regulators, and industry groups. It enables banks to collectively detect and prevent fraud by sharing information about known fraudsters, mule accounts, emerging attack patterns, and suspicious transactions in a standardised, machine-readable format."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Fraud Data Sharing important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fraudsters target multiple banks simultaneously, but each bank typically detects fraud in isolation. Without shared intelligence, a fraudster blocked by one bank simply moves to the next. Sharing fraud data means banks can see threats detected by peers before they strike, block mule accounts across institutions in near real-time, meet growing regulatory requirements for fraud reporting, and reduce fraud losses collectively rather than individually."
      }
    },
    {
      "@type": "Question",
      "name": "What fraud data sharing platforms can you help connect us to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialise in MISP (Malware Information Sharing Platform), the world's leading open-source threat intelligence sharing platform. Through MISP, we can connect you to regulatory sharing frameworks (APRA, ECB FRIDA, FCA, SAMA), peer-to-peer sharing groups with other banks, industry sharing communities (ISACs, sector-specific groups), and commercial threat intelligence feeds. We also integrate MISP with your existing fraud tools — SAS, NICE Actimize, Featurespace, Splunk, and others."
      }
    },
    {
      "@type": "Question",
      "name": "What is MISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP (Malware Information Sharing Platform) is the world's most widely used open-source platform for sharing, storing, and correlating threat intelligence and fraud indicators. Originally developed for cyber threat intelligence, MISP is now used extensively by central banks, financial regulators, and banking communities for fraud data sharing. Cosive is a contributor to MISP and operates CloudMISP, a fully managed MISP hosting service."
      }
    },
    {
      "@type": "Question",
      "name": "What is CloudMISP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudMISP is Cosive's fully managed MISP hosting service. Instead of deploying and maintaining your own MISP instance, CloudMISP gives you a dedicated, production-ready platform with automated updates, backups, monitoring, and support. It's pre-configured with fraud-specific taxonomies, sharing groups, and integrations so you can start sharing fraud data immediately without the operational overhead of running the infrastructure yourself."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most organisations can be up and running with a CloudMISP instance within a few weeks. The initial platform deployment is fast — the majority of the time is spent on scoping your sharing requirements, configuring taxonomies and sharing groups to match your regulatory obligations, and connecting integrations to your existing fraud tools. For peer-to-peer or community sharing, timelines depend on the number of partner institutions being onboarded."
      }
    },
    {
      "@type": "Question",
      "name": "Is shared fraud data kept confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MISP provides granular controls over who can see what through its distribution levels and sharing groups. You decide exactly which organisations receive your data, and can restrict sharing at the event, attribute, or object level. Data is encrypted in transit and at rest, and sharing agreements govern how recipients may use the intelligence. You retain full control over your contributions at all times."
      }
    },
    {
      "@type": "Question",
      "name": "What types of fraud indicators can be shared?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MISP supports a wide range of fraud-relevant indicator types including mule account details, suspicious transaction patterns, fraudster identifiers, device fingerprints, IP addresses, phishing URLs, and fraud typology descriptions. Cosive configures your instance with fraud-specific object templates and taxonomies so indicators are structured, searchable, and machine-readable — ready to feed directly into your detection and monitoring systems."
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
        "text": "FIRST (Forum of Incident Response and Security Teams) is the world's largest community of incident response teams. Founded in 1990, it connects more than 700 teams across over 100 countries — including national CERTs, government agencies, financial institutions, technology companies, and managed security service providers. FIRST provides a trusted environment for member teams to share threat intelligence, coordinate incident response, develop standards, and learn from each other. It also runs the annual FIRST Conference, one of the most respected defender-oriented security events globally."
      }
    },
    {
      "@type": "Question",
      "name": "What is FIRST membership for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FIRST membership is for organisations that operate a security incident response team — whether that's a CSIRT, SOC, PSIRT, or MSSP. Membership gives your team access to trusted intelligence-sharing channels, collaboration with peers worldwide, training and workshops, and participation in Special Interest Groups that develop the standards and frameworks used across the industry. It also signals to your stakeholders, customers, and partners that your team meets a recognised standard of incident response maturity."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I get FIRST membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FIRST membership gives your team access to resources and relationships that are difficult to build on your own. You get access to the FIRST MISP server for shared threat intelligence, discounted access to the annual FIRST Conference, and the ability to collaborate directly with experienced incident response teams from around the world. Beyond the practical benefits, FIRST membership is a credential that demonstrates your organisation's commitment to professional security operations. It can strengthen your position with regulators, partners, and customers who want assurance that your security team operates to an international standard."
      }
    },
    {
      "@type": "Question",
      "name": "Why do I need help? I can do this on my own.",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You absolutely can apply on your own — and some teams do successfully. But the FIRST application process involves a structured maturity assessment, and applications are evaluated against specific criteria that aren't always obvious from the outside. Teams that go in without preparation sometimes find their application takes longer than expected, or they discover gaps they didn't anticipate. Working with us gives you the advantage of experience. We've been through the process, we understand what FIRST evaluators look for, and we can help you avoid common pitfalls. The SIM3 gap analysis we do upfront also delivers genuine operational improvements — so even before you submit your application, your team is already stronger."
      }
    }
  ]
}
</script>
```

## Improve Your Threat Intelligence Team  (5 Q&A)
`https://www.cosive.com/improve-cti-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you help us develop a CTI roadmap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We assess where your CTI capability is now, identify the gaps that matter most, and build a prioritised roadmap that accounts for your budget, team size, and organisational context. We don't prescribe a one-size-fits-all maturity model — we work with you to define what \"good\" looks like for your organisation and then map out how to get there incrementally."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ATT&CK Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MITRE ATT&CK is a knowledge base of adversary tactics, techniques, and procedures (TTPs) observed in real-world attacks. It provides a common language for describing what threat actors do and how they do it. Security teams use ATT&CK to map their detections, assess coverage gaps, track adversary behaviour during incidents, and communicate threats consistently across the organisation. We help teams adopt ATT&CK practically — mapping your existing detections, identifying gaps, and integrating ATT&CK into your incident response and CTI workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What is CTI-CMM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CTI-CMM (Cyber Threat Intelligence Capability Maturity Model) is a framework for assessing and improving your CTI programme's maturity. It evaluates capabilities across dimensions like collection, analysis, dissemination, and feedback — giving you a structured way to measure where you are, benchmark against peers, and prioritise improvements. We use CTI-CMM in our gap analysis engagements to provide an objective baseline and actionable recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us understand what to do next?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. If you're not sure whether you need a platform, a consultant, training, or something else entirely — that's a good place to start a conversation. We help organisations at every stage of CTI maturity figure out their next practical step, whether that's formalising what they already do, choosing a platform, or building out a team. Get in touch and tell us where you are. We'll give you honest advice about what would actually help."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to specific threat intel feeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help organisations connect to government feeds (NCSC, ASD ACSC, CISA), commercial feeds, open-source intelligence sources, and sector-specific sharing communities. We configure automated ingestion, handle authentication and format translation, and develop workflows so your analysts can act on the intelligence within your existing security tools."
      }
    }
  ]
}
</script>
```

## Improve Your Cybersecurity Ops Team  (7 Q&A)
`https://www.cosive.com/improve-secops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SecOps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security Operations (SecOps) is the practice of combining security and IT operations to protect an organisation's systems, data, and people. It covers everything from monitoring and detection to incident response and recovery. A strong SecOps function helps you identify threats early, respond effectively, and continuously improve your defences."
      }
    },
    {
      "@type": "Question",
      "name": "What does a SecOps team do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A SecOps team monitors, detects, investigates, and responds to cybersecurity threats across your organisation. Day-to-day activities typically include triaging security alerts, investigating potential incidents, maintaining detection rules, coordinating incident response, and working to continuously improve the organisation's security posture. The scope varies by organisation — some SecOps teams also manage vulnerability assessments, threat intelligence, and security tool administration."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ATT&CK Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MITRE ATT&CK is a knowledge base of adversary tactics, techniques, and procedures (TTPs) observed in real-world attacks. It provides a common language for describing what threat actors do and how they do it. Security teams use ATT&CK to map their detections, assess coverage gaps, track adversary behaviour during incidents, and communicate threats consistently across the organisation. We help teams adopt ATT&CK practically — mapping your existing detections, identifying gaps, and integrating ATT&CK into your incident response and SecOps workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What is the VERIS Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VERIS (Vocabulary for Event Recording and Incident Sharing) is a framework for describing security incidents in a structured and repeatable manner. It was developed by the team behind the Verizon Data Breach Investigations Report (DBIR) and provides a common taxonomy for recording who did what to which assets, and what the impact was. VERIS helps organisations build a consistent incident database that supports trend analysis, benchmarking, and evidence-based decision-making about security investments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the SIM3 capability maturity model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SIM3 (Security Incident Management Maturity Model) is a framework for assessing the maturity of security incident management teams across four dimensions: organisation, human, tools, and processes. It was developed by the Open CSIRT Foundation and is widely used to evaluate and certify CSIRTs and SOCs internationally. SIM3 provides a structured way to identify strengths and weaknesses, benchmark against peers, and build a prioritised improvement plan. We use SIM3 in our gap assessments because it gives teams a clear, objective baseline to work from."
      }
    },
    {
      "@type": "Question",
      "name": "What is the SOC-CMM capability maturity model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SOC-CMM (Security Operations Centre Capability Maturity Model) is a framework specifically designed for assessing and improving your SOC's maturity. It evaluates capabilities across domains including business alignment, people, process, technology, and services. SOC-CMM is a good fit for teams that are primarily SOC-focused rather than broader CSIRT or incident response teams. We help organisations choose between SIM3 and SOC-CMM based on their team structure and goals."
      }
    },
    {
      "@type": "Question",
      "name": "What is a TTX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A TTX (Table-Top Exercise) is a discussion-based exercise where team members walk through their roles and responses during a simulated security incident. Unlike a full drill, a TTX doesn't involve live systems — it's a structured conversation that helps teams identify gaps in their processes, communication, and decision-making before a real incident forces them to find out the hard way. We design and facilitate TTXs tailored to your organisation's threat landscape, ensuring the scenarios are relevant and the outcomes are actionable."
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
        "text": "We migrate everything — events, attributes, taxonomies, galaxies, tags, sharing groups, and feed configurations. We export your data from your current instance, import it into CloudMISP, and verify that everything transferred correctly before you cut over. Your analysts keep working in the same MISP environment they're used to, just without the operational overhead."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us get more value from MISP without replacing our current setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Not every organisation needs managed hosting. We help teams improve how they use MISP — designing workflows that match how your analysts actually work, connecting to better intelligence sources, integrating MISP with your SIEM, SOAR, or EDR, and building processes for collection, analysis, and dissemination. We meet you where you are and focus on practical improvements."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle MISP updates and security patches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For managed instances, we test every MISP release against a staging environment before deploying it. Most releases go out within days using blue/green deployments — zero downtime, no risk of a broken update reaching production. For self-hosted teams, we can advise on upgrade planning and help you implement a sustainable patching process."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us connect to threat intelligence feeds and sharing communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We help organisations connect to government feeds, commercial providers, open-source intelligence sources, and sector-specific sharing communities. We configure ingestion for all MISP-supported feed types — MISP feeds, freetext, CSV, and STIX/TAXII — and build workflows so your analysts can act on the intelligence within your existing security tools."
      }
    },
    {
      "@type": "Question",
      "name": "How do we know which of your services is right for us?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start a conversation and tell us where you are. Some teams need to hand off MISP operations entirely; others want targeted help with a specific problem — connecting to a feed, integrating with a SIEM, or improving their analysis workflows. We'll give you honest advice about what would actually help, whether that's managed hosting, a consulting engagement, or something you can do on your own."
      }
    }
  ]
}
</script>
```

## Security Operations  (8 Q&A)
`https://www.cosive.com/security-operations`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you assess our current SOC maturity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use the SIM3 maturity model to assess your security operations across four dimensions: organisation, human resources, tools, and processes. This gives you a clear picture of where you stand, where the gaps are, and a prioritised roadmap you can take to the board."
      }
    },
    {
      "@type": "Question",
      "name": "How do I prioritise which threats to focus on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use threat modelling to identify the adversaries, techniques, and attack vectors most relevant to your sector and infrastructure. Combined with ATT&CK mapping, this shows exactly where your detection coverage is strong and where to invest next."
      }
    },
    {
      "@type": "Question",
      "name": "We have multiple security tools that don't talk to each other — can you help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate SIEM, SOAR, EDR, threat intelligence platforms, and ticketing systems into a connected workflow. Our approach is vendor-neutral — we optimise what you already have rather than pushing replacements, so your team gets more value from existing investments."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us stand up a new CSIRT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We've helped build CSIRTs at national, sector, and organisational levels across government and critical infrastructure. We cover everything from team structure and processes to tooling and training, and can guide you through SIM3 assessment and FIRST membership once the team is operational."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest path to FIRST membership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We guide you through the full process — from gap analysis against entry requirements to building the processes and documentation needed for acceptance. Our team includes FIRST.org advisors who understand exactly what the review committee looks for."
      }
    },
    {
      "@type": "Question",
      "name": "What does a SIM3 assessment involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SIM3 measures your incident response maturity across four areas: organisation, human, tools, and processes. We benchmark your team against the model, identify gaps, and build a remediation plan aligned with FIRST membership or TF-CSIRT accreditation requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure improvements stick after you leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We upskill your team throughout every engagement, not just at the end. Knowledge transfer, documented playbooks, and hands-on mentoring mean your people can sustain and build on improvements independently. We build your capability, not a dependency."
      }
    },
    {
      "@type": "Question",
      "name": "How do I make the case for security operations investment to the board?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We help you frame security operations in terms the board understands: risk reduction, incident response times, detection coverage percentages, and benchmark comparisons against peers. A mature SOC isn't a cost centre — it's a measurable reduction in organisational risk."
      }
    }
  ]
}
</script>
```

## Start a CTI Sharing Community  (6 Q&A)
`https://www.cosive.com/start-cti-sharing-community`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you help us get started with a new sharing community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with you from the very beginning. That means defining the community's purpose and scope, identifying the right founding members, designing governance and legal frameworks, choosing a platform, and planning how you will onboard members and keep them engaged. Whether you are a national cyber security centre, an ISAC, or an enterprise team wanting to share with peers, we tailor the approach to your context and constraints. We have done this at national scale and for smaller, sector-specific groups."
      }
    },
    {
      "@type": "Question",
      "name": "Our community already exists but sharing is still mostly manual. How do you help us automate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many communities start with email, spreadsheets, and PDF reports. That is a perfectly valid starting point. When you are ready to automate, we help you deploy a platform like CloudMISP, configure MISP or STIX/TAXII integrations for each member, and build ingestion and dissemination pipelines. The key is meeting each member at their maturity level. Some will connect via API on day one; others will need a simpler path. We take an incremental approach so no member gets left behind."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle the legal challenges around sharing threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Legal concerns are consistently the biggest barrier to getting a sharing community off the ground. We help you draft data-handling agreements, define TLP and classification rules, and design sharing workflows that give legal and compliance teams confidence that sensitive information stays within agreed boundaries. We have navigated these conversations with government agencies, regulators, and enterprise legal teams across multiple jurisdictions. In our experience, the goal is not to eliminate risk — it is to make the risk well-understood and manageable."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms and standards do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support MISP (including our own CloudMISP managed platform), STIX/TAXII-based exchanges, and custom API integrations. Many communities use a combination — MISP as the core sharing platform with STIX/TAXII endpoints for members who need them. We create the new integrations that connect these to members' internal tools, whether that is a TIP, a SIEM, a SOAR platform, or something else entirely."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also help me consume cyber threat intelligence from external sources?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same platform and expertise we use for community sharing also supports individual organisations that want to consume threat intelligence from external feeds, open-source intelligence, and commercial providers. Learn more about consuming and sharing threat intelligence ."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find good threat intelligence feeds to bring into my programme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain a curated list of open-source and commercial threat intelligence feeds, and we can help you evaluate which ones are most relevant to the threats your organisation actually faces. We also help you integrate those feeds into your security tools so your analysts can act on the intelligence rather than just collecting it. Learn more about threat intelligence feeds ."
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
        "text": "Starting a cybersecurity operations team begins with understanding what your organisation actually needs to protect. Map out the functions your team will provide — such as monitoring, detection, incident response, and vulnerability management — then match those functions to realistic team sizes and budgets. Most effective teams start small, with two or three people covering the highest-priority functions, and grow deliberately as processes mature. A structured assessment using a framework like SIM3 gives you an objective baseline to plan from, and a phased roadmap helps you avoid trying to do everything at once."
      }
    },
    {
      "@type": "Question",
      "name": "How many people do I need on a security operations team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no single answer — it depends on the functions your team needs to cover, your organisation's risk profile, and your coverage requirements. Some organisations run effective security operations with three people; others need fifteen or more. The key is matching team size to your priority functions. Start by identifying what your team must do (e.g. 24/7 monitoring vs business-hours triage), then factor in which tasks can be automated or outsourced. It is better to have a small team doing the right things well than a larger team spread too thin."
      }
    },
    {
      "@type": "Question",
      "name": "What roles do I need to hire for a new SOC or SecOps team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The roles you need depend on the functions your team will provide. Most new teams start with a mix of incident responders and security analysts who can triage alerts, investigate potential incidents, and maintain detection rules. As the team matures, you may add dedicated roles for threat intelligence, detection engineering, vulnerability management, and security automation. When hiring, look for people with strong analytical thinking and communication skills — technical knowledge can be trained, but the ability to investigate and communicate clearly is harder to teach."
      }
    },
    {
      "@type": "Question",
      "name": "What frameworks should I use to build a security operations team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most widely used frameworks for planning and maturing a security operations team are SIM3 and SOC-CMM. SIM3 (Security Incident Management Maturity Model) assesses your team across four dimensions — organisation, human, tools, and processes — and is widely used to benchmark and certify CSIRTs and SOCs internationally. SOC-CMM (SOC Capability Maturity Model) is designed specifically for SOC-focused teams and evaluates capabilities across business alignment, people, process, technology, and services. MITRE ATT&CK is also valuable for mapping your detection coverage and identifying gaps. The right choice depends on your team structure and goals."
      }
    },
    {
      "@type": "Question",
      "name": "Should I outsource security operations or build an in-house team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both approaches can work, and many organisations use a hybrid model. An in-house team gives you direct control, deeper organisational knowledge, and the ability to handle sensitive investigations internally. Outsourcing (e.g. to a managed SOC) can provide 24/7 coverage and specialist expertise that a small internal team cannot sustain. The decision often comes down to which functions require internal context — incident response and threat intelligence benefit from people who understand your business — versus which can be commoditised, such as first-tier alert monitoring. Starting with a small in-house team supplemented by external support is a common and effective approach."
      }
    }
  ]
}
</script>
```

## Start a Fraud Data Sharing Community  (7 Q&A)
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
        "text": "Yes. We help with every stage of community planning — from identifying your community niche and defining membership requirements, to designing governance frameworks, funding models, and the technical infrastructure that underpins it all. Whether you're a central bank, government agency, or industry body, we'll work with you to design a community that fits your sector's needs and regulatory context."
      }
    },
    {
      "@type": "Question",
      "name": "What fraud data sharing platforms do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support a range of platforms and standards for community-based sharing: CloudMISP — Our fully managed MISP platform, purpose-built for multi-party fraud data sharing with member isolation, sharing groups, and enterprise-grade operations. We also support self-hosted MISP, STIX/TAXII-based exchanges, and custom API integrations. If your community has specific platform requirements, we can adapt to them."
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
        "text": "Getting member organisations from \"interested\" to \"actively sharing\" is the hardest part of running a community. We make onboarding frictionless by handling the technical setup — provisioning accounts, configuring sharing groups and access controls, and integrating the platform with each member's existing fraud or security tools via API. We also run analyst workshops that cover what to share, how to structure indicators, and how to get value from community data. New members can start by consuming shared intelligence before they're ready to contribute, which lowers the barrier to entry. After go-live we help community operators spot inactive members and re-engage them so the community keeps growing. We've done this at national scale with Australia's threat sharing program. Talk to us about member onboarding ."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also help me share cyber threat intelligence?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same platform that supports fraud data sharing can also be used for cyber threat intelligence. Many communities share both. Learn more about our cyber threat intelligence services ."
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

## Use the ATT&CK Framework  (5 Q&A)
`https://www.cosive.com/use-attack-framework`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where can I find more information about the ATT&CK Framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best starting point is attack.mitre.org , which hosts the full ATT&CK knowledge base including all tactics, techniques, and threat group profiles. The ATT&CK documentation covers how the framework is structured and maintained. For hands-on exploration, the ATT&CK Navigator tool lets you create custom heatmaps and coverage layers."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from CAPEC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CAPEC (Common Attack Pattern Enumeration and Classification) catalogues attack patterns at a higher abstraction level — describing general categories of attack. ATT&CK focuses on observed adversary behaviour and TTPs in real-world intrusions, providing much more specific and actionable detail about how attackers operate in practice."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from CVE and CWE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CVE identifies specific vulnerabilities in software, while CWE classifies types of software weaknesses. ATT&CK describes what attackers do after exploiting vulnerabilities — the tactics and techniques they use to move through your environment, escalate privileges, and achieve their objectives. They're complementary, not competing: CVE/CWE tell you what's vulnerable, ATT&CK tells you what adversaries do next."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from Lockheed Martin's Cyber Kill Chain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cyber Kill Chain describes attack phases at a high level across seven stages — from reconnaissance through to actions on objectives. ATT&CK provides much more granular detail within each phase, with hundreds of specific techniques mapped to real threat groups. Think of the Kill Chain as a high-level narrative and ATT&CK as the detailed playbook beneath it."
      }
    },
    {
      "@type": "Question",
      "name": "How is ATT&CK different from the Diamond Model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Diamond Model describes the relationships between four core features of an intrusion: adversary, capability, infrastructure, and victim. It's a framework for structuring intelligence analysis. ATT&CK provides the detailed technique taxonomy that you'd map into a Diamond Model analysis — specifically populating the \"capability\" vertex with granular, observed adversary behaviours."
      }
    }
  ]
}
</script>
```
