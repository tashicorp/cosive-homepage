# Cosive — Per-page JSON-LD (Service + Breadcrumb)

One `@graph` per page: a lean **Service** (its `provider` references the site-wide Organization by `@id`) plus a **BreadcrumbList**. Paste a page's block into **Page settings → Custom Code → Inside `<head>`**. The `@id` references resolve against the Organization defined site-wide in `structured-data.md`, so nothing is duplicated.

---

## Cyber Threat Intelligence
`https://www.cosive.com/cyber-threat-intelligence`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/cyber-threat-intelligence#service",
      "name": "Cyber Threat Intelligence Services",
      "serviceType": "Cyber threat intelligence",
      "description": "We help you consume, share and act on cyber threat intelligence — from your first feed to a mature CTI programme, with analysts always in the loop.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/cyber-threat-intelligence"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/cyber-threat-intelligence#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        }
      ]
    }
  ]
}
</script>
```

## Fraud Data Sharing
`https://www.cosive.com/fraud-data-sharing`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/fraud-data-sharing#service",
      "name": "Fraud Data Sharing",
      "serviceType": "Fraud data sharing",
      "description": "We help banks and financial institutions share fraud data securely to spot and stop suspicious activity faster — governance, platform and integration handled.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Banks and financial institutions"
      },
      "url": "https://www.cosive.com/fraud-data-sharing"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/fraud-data-sharing#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fraud Data Sharing",
          "item": "https://www.cosive.com/fraud-data-sharing"
        }
      ]
    }
  ]
}
</script>
```

## Security Operations
`https://www.cosive.com/security-operations`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/security-operations#service",
      "name": "Security Operations Services",
      "serviceType": "Security operations",
      "description": "We help you build, run and improve your security operations — from starting a new SOC to automating an established one. Practical advice from engineers.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/security-operations"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/security-operations#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        }
      ]
    }
  ]
}
</script>
```

## Consume & Share Threat Intelligence
`https://www.cosive.com/consume-share-threat-intelligence`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/consume-share-threat-intelligence#service",
      "name": "Consume & Share Threat Intelligence",
      "serviceType": "Cyber threat intelligence",
      "description": "Consume, share and act on intelligence from CERTs, ISACs and NCSCs. We run the platform, feeds and integrations so your analysts can focus on real threats.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/consume-share-threat-intelligence"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/consume-share-threat-intelligence#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Consume & Share Threat Intelligence",
          "item": "https://www.cosive.com/consume-share-threat-intelligence"
        }
      ]
    }
  ]
}
</script>
```

## Start a CTI Sharing Community
`https://www.cosive.com/start-cti-sharing-community`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/start-cti-sharing-community#service",
      "name": "Start a CTI Sharing Community",
      "serviceType": "Cyber threat intelligence",
      "description": "Turn collective knowledge into collective defence. We help you design, launch and run a CTI sharing community — governance, onboarding and engagement.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/start-cti-sharing-community"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/start-cti-sharing-community#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Start a CTI Sharing Community",
          "item": "https://www.cosive.com/start-cti-sharing-community"
        }
      ]
    }
  ]
}
</script>
```

## Improve Your Threat Intelligence Team
`https://www.cosive.com/improve-cti-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/improve-cti-team#service",
      "name": "Improve Your Threat Intelligence Team",
      "serviceType": "Cyber threat intelligence",
      "description": "Build a new CTI team or mature an existing one — gap analysis, roadmaps, ATT&CK consulting and CTI-CMM benchmarking to help your analysts do their best work.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/improve-cti-team"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/improve-cti-team#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Improve Your Threat Intelligence Team",
          "item": "https://www.cosive.com/improve-cti-team"
        }
      ]
    }
  ]
}
</script>
```

## Find Useful Threat Intelligence Feeds
`https://www.cosive.com/find-useful-threat-intel-feeds`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/find-useful-threat-intel-feeds#service",
      "name": "Find Useful Threat Intelligence Feeds",
      "serviceType": "Cyber threat intelligence",
      "description": "We help you find, source and get value from threat intelligence feeds — the right providers under one contract, with workflows that make your CTI actionable.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/find-useful-threat-intel-feeds"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/find-useful-threat-intel-feeds#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Find Useful Threat Intelligence Feeds",
          "item": "https://www.cosive.com/find-useful-threat-intel-feeds"
        }
      ]
    }
  ]
}
</script>
```

## Build & Integrate CTI Tools
`https://www.cosive.com/build-and-integrate-cti-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/build-and-integrate-cti-tools#service",
      "name": "Build & Integrate CTI Tools",
      "serviceType": "Security engineering",
      "description": "We build custom CTI tools and integrate your threat intelligence platforms — plugins, enrichment and TIP extensions, backed by 8 years as MISP contributors.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Cyber threat intelligence teams"
      },
      "url": "https://www.cosive.com/build-and-integrate-cti-tools"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/build-and-integrate-cti-tools#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cyber Threat Intelligence",
          "item": "https://www.cosive.com/cyber-threat-intelligence"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Build & Integrate CTI Tools",
          "item": "https://www.cosive.com/build-and-integrate-cti-tools"
        }
      ]
    }
  ]
}
</script>
```

## Consume & Share Fraud Data
`https://www.cosive.com/consume-share-fraud-data`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/consume-share-fraud-data#service",
      "name": "Consume & Share Fraud Data",
      "serviceType": "Fraud data sharing",
      "description": "Connect securely to your regulator's fraud data exchange. We handle integration, data mapping and management so you can act on shared fraud intelligence.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Banks and financial institutions"
      },
      "url": "https://www.cosive.com/consume-share-fraud-data"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/consume-share-fraud-data#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fraud Data Sharing",
          "item": "https://www.cosive.com/fraud-data-sharing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Consume & Share Fraud Data",
          "item": "https://www.cosive.com/consume-share-fraud-data"
        }
      ]
    }
  ]
}
</script>
```

## Start a Fraud Data Sharing Community
`https://www.cosive.com/start-sharing-community`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/start-sharing-community#service",
      "name": "Start a Fraud Data Sharing Community",
      "serviceType": "Fraud data sharing",
      "description": "Plan, launch and operate a fraud data sharing community with confidence — governance design, CloudMISP deployment, member onboarding and ongoing operations.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Banks and financial institutions"
      },
      "url": "https://www.cosive.com/start-sharing-community"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/start-sharing-community#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fraud Data Sharing",
          "item": "https://www.cosive.com/fraud-data-sharing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Start a Fraud Data Sharing Community",
          "item": "https://www.cosive.com/start-sharing-community"
        }
      ]
    }
  ]
}
</script>
```

## Build & Integrate Fraud Tools
`https://www.cosive.com/build-and-integrate-fraud-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/build-and-integrate-fraud-tools#service",
      "name": "Build & Integrate Fraud Tools",
      "serviceType": "Security engineering",
      "description": "We build custom fraud tools and integrate your transaction monitoring and case management platforms — automating fraud operations for banks and central banks.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Banks and financial institutions"
      },
      "url": "https://www.cosive.com/build-and-integrate-fraud-tools"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/build-and-integrate-fraud-tools#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Fraud Data Sharing",
          "item": "https://www.cosive.com/fraud-data-sharing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Build & Integrate Fraud Tools",
          "item": "https://www.cosive.com/build-and-integrate-fraud-tools"
        }
      ]
    }
  ]
}
</script>
```

## Improve Your Cybersecurity Ops Team
`https://www.cosive.com/improve-secops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/improve-secops-team#service",
      "name": "Improve Your Cybersecurity Ops Team",
      "serviceType": "Security operations",
      "description": "Assess your SecOps capability, sharpen incident response and adopt the right frameworks. We help you build a more effective security team, step by step.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/improve-secops-team"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/improve-secops-team#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Improve Your Cybersecurity Ops Team",
          "item": "https://www.cosive.com/improve-secops-team"
        }
      ]
    }
  ]
}
</script>
```

## Start a New Cybersecurity Ops Team
`https://www.cosive.com/start-new-cybersecurity-ops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/start-new-cybersecurity-ops-team#service",
      "name": "Start a New Cybersecurity Ops Team",
      "serviceType": "Security operations",
      "description": "Starting a new security operations team? We help you scope the functions you need, staff the roles and launch — even sitting in on candidate interviews.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/start-new-cybersecurity-ops-team"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/start-new-cybersecurity-ops-team#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Start a New Cybersecurity Ops Team",
          "item": "https://www.cosive.com/start-new-cybersecurity-ops-team"
        }
      ]
    }
  ]
}
</script>
```

## Automate Your Cybersecurity Ops Team
`https://www.cosive.com/automate-cybersecurity-ops-team`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/automate-cybersecurity-ops-team#service",
      "name": "Automate Your Cybersecurity Ops Team",
      "serviceType": "Security operations",
      "description": "Handle more threats with less manual effort. We help lean security teams adopt SOAR and automation to cut alert noise and speed up incident response.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/automate-cybersecurity-ops-team"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/automate-cybersecurity-ops-team#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Automate Your Cybersecurity Ops Team",
          "item": "https://www.cosive.com/automate-cybersecurity-ops-team"
        }
      ]
    }
  ]
}
</script>
```

## Use the ATT&CK Framework
`https://www.cosive.com/use-attack-framework`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/use-attack-framework#service",
      "name": "Use the MITRE ATT&CK Framework",
      "serviceType": "Security operations",
      "description": "Put MITRE ATT&CK into practice with mapping, gap analysis and detection engineering, so you can focus your defences where they matter most.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/use-attack-framework"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/use-attack-framework#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Use the ATT&CK Framework",
          "item": "https://www.cosive.com/use-attack-framework"
        }
      ]
    }
  ]
}
</script>
```

## Build & Integrate SecOps Tools
`https://www.cosive.com/build-and-integrate-secops-tools`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/build-and-integrate-secops-tools#service",
      "name": "Build & Integrate SecOps Tools",
      "serviceType": "Security engineering",
      "description": "We build custom security operations tools and integrate your SIEM, SOAR and EDR — automating SOC workflows, backed by 8 years of security engineering.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/build-and-integrate-secops-tools"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/build-and-integrate-secops-tools#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Build & Integrate SecOps Tools",
          "item": "https://www.cosive.com/build-and-integrate-secops-tools"
        }
      ]
    }
  ]
}
</script>
```

## Help Us Join FIRST
`https://www.cosive.com/help-us-join-first`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/help-us-join-first#service",
      "name": "Join FIRST.org — Membership Help",
      "serviceType": "Security maturity",
      "description": "We guide your CSIRT, MSSP or product CSIRT through FIRST.org membership — from SIM3 gap analysis to a confident application and acceptance.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Security operations teams"
      },
      "url": "https://www.cosive.com/help-us-join-first"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/help-us-join-first#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Security Operations",
          "item": "https://www.cosive.com/security-operations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Help Us Join FIRST",
          "item": "https://www.cosive.com/help-us-join-first"
        }
      ]
    }
  ]
}
</script>
```

## CloudMISP
`https://www.cosive.com/cloudmisp`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/cloudmisp#service",
      "name": "CloudMISP — Managed MISP Hosting",
      "serviceType": "Managed MISP hosting",
      "description": "CloudMISP is our managed, enterprise-grade MISP platform. Core, Accelerator and Sharing bundles give you the intel platform you need — no infrastructure to run.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Threat intelligence teams"
      },
      "url": "https://www.cosive.com/cloudmisp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/cloudmisp#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "CloudMISP",
          "item": "https://www.cosive.com/cloudmisp"
        }
      ]
    }
  ]
}
</script>
```

## Managed MISP (Manage my MISP)
`https://www.cosive.com/manage-my-misp`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.cosive.com/manage-my-misp#service",
      "name": "Managed MISP Hosting",
      "serviceType": "Managed MISP hosting",
      "description": "Stop running MISP yourself. Our fully managed MISP hosting handles updates, patches and infrastructure, so your team can focus on the threat intelligence work.",
      "provider": {
        "@id": "https://www.cosive.com/#organization"
      },
      "areaServed": [
        "Australia",
        "New Zealand",
        "Asia-Pacific",
        "Europe",
        "Middle East",
        "North America"
      ],
      "audience": {
        "@type": "Audience",
        "audienceType": "Threat intelligence teams"
      },
      "url": "https://www.cosive.com/manage-my-misp"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.cosive.com/manage-my-misp#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.cosive.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "CloudMISP",
          "item": "https://www.cosive.com/cloudmisp"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Managed MISP (Manage my MISP)",
          "item": "https://www.cosive.com/manage-my-misp"
        }
      ]
    }
  ]
}
</script>
```
