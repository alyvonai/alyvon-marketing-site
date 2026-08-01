// JSON-LD builders (spec §27). Each returns a plain schema.org object; render it with the
// <JsonLd> component. Keep URLs absolute against SITE_URL.

import { SITE_URL } from "@/lib/site"

type Json = Record<string, unknown>

const abs = (path: string) => new URL(path, SITE_URL).toString()

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alyvon",
    url: SITE_URL,
    logo: abs("/icon.svg"),
    description: "Direct a team. Not a tool.",
    sameAs: [] as string[],
  }
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alyvon",
    url: SITE_URL,
  }
}

export function softwareApplicationSchema(p: {
  name: string
  description: string
  url: string
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.description,
    url: abs(p.url),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", category: "SaaS" },
  }
}

export function serviceSchema(p: { name: string; description: string; url: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.name,
    description: p.description,
    url: abs(p.url),
    provider: { "@type": "Organization", name: "Alyvon", url: SITE_URL },
    areaServed: "Global",
  }
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

export function itemListSchema(p: {
  name: string
  items: { name: string; path: string }[]
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: p.name,
    itemListElement: p.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  }
}
