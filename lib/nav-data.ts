// Navigation, footer groups, and the sitemap route list. Restructured for the master
// launch spec (§7 route map, §9 nav): pricing is product-owned (no standalone top-level
// Pricing nav item), Workforce is six group pages, and /login is not indexed.
//
// The Workforce dropdown/footer are derived from lib/site WORKFORCE_GROUPS so counts and
// routes only change in one place.

import { WORKFORCE_GROUPS } from "@/lib/site"

export interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const WORKFORCE_GROUP_LINKS: NavChild[] = WORKFORCE_GROUPS.map((g) => ({
  label: g.label,
  href: g.href,
}))

export const MARKETING_HUB_FEATURES: NavChild[] = [
  { label: "CRM", href: "/marketing-hub/crm" },
  { label: "Automations", href: "/marketing-hub/automations" },
  { label: "AI Employee", href: "/marketing-hub/ai-employee" },
]

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Workforce",
    href: "/workforce",
    children: [
      { label: "Overview", href: "/workforce" },
      ...WORKFORCE_GROUP_LINKS,
      { label: "Pricing", href: "/workforce/pricing" },
    ],
  },
  {
    label: "Marketing Hub",
    href: "/marketing-hub",
    children: [
      { label: "Overview", href: "/marketing-hub" },
      ...MARKETING_HUB_FEATURES,
      { label: "Pricing", href: "/marketing-hub/pricing" },
    ],
  },
  {
    label: "Analytics",
    href: "/analytics",
    children: [
      { label: "Overview", href: "/analytics" },
      { label: "Custom AI", href: "/analytics/custom-ai" },
      { label: "Pricing & engagements", href: "/analytics/pricing" },
    ],
  },
  { label: "Security", href: "/security" },
]

export const FOOTER_LINK_GROUPS: { heading: string; links: NavChild[] }[] = [
  {
    heading: "Workforce",
    links: [
      { label: "Overview", href: "/workforce" },
      ...WORKFORCE_GROUP_LINKS,
      { label: "Pricing", href: "/workforce/pricing" },
    ],
  },
  {
    heading: "Marketing Hub",
    links: [
      { label: "Overview", href: "/marketing-hub" },
      ...MARKETING_HUB_FEATURES,
      { label: "Pricing", href: "/marketing-hub/pricing" },
    ],
  },
  {
    heading: "Analytics",
    links: [
      { label: "Overview", href: "/analytics" },
      { label: "Custom AI", href: "/analytics/custom-ai" },
      { label: "Pricing & engagements", href: "/analytics/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Subprocessors", href: "/subprocessors" },
    ],
  },
]

export interface SiteRoute {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly"
}

// Final launch routes (spec §7). No /login, no old Workforce department pages.
export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/workforce", priority: 0.9, changeFrequency: "weekly" },
  ...WORKFORCE_GROUPS.map((g) => ({
    path: g.href,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/workforce/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/marketing-hub", priority: 0.8, changeFrequency: "monthly" },
  { path: "/marketing-hub/crm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/marketing-hub/automations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/marketing-hub/ai-employee", priority: 0.7, changeFrequency: "monthly" },
  { path: "/marketing-hub/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/analytics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/analytics/custom-ai", priority: 0.7, changeFrequency: "monthly" },
  { path: "/analytics/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/security", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "monthly" },
  { path: "/subprocessors", priority: 0.2, changeFrequency: "monthly" },
]
