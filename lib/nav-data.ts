// Single source of truth for site navigation, footer link groups, and the
// sitemap route list. Ticket 2-21 shared convention: every page-building unit
// and app/sitemap.ts import from here rather than hardcoding hrefs, so the
// 18-route structure only needs to change in one place.
//
// Department and Marketing Hub feature slugs match the routing plan in
// docs/0b-repo-audit.md exactly. Do not rename a slug here without also
// renaming the corresponding app/ route folder.

export interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

// The 5 departments confirmed in scope for this build (Ticket 0i). The other
// 11 departments referenced on /workforce are described in prose only, per
// Content's own stated rationale ("built only when there is demand") -- they
// do not get nav entries, routes, or invented names.
export const DEPARTMENTS: NavChild[] = [
  { label: "Content", href: "/workforce/content" },
  { label: "Research", href: "/workforce/research" },
  { label: "Brand", href: "/workforce/brand" },
  { label: "Sales Development", href: "/workforce/sales-development" },
  { label: "Marketing Operations", href: "/workforce/marketing-ops" },
]

export const MARKETING_HUB_FEATURES: NavChild[] = [
  { label: "CRM", href: "/marketing-hub/crm" },
  { label: "Automations", href: "/marketing-hub/automations" },
  { label: "AI Employee", href: "/marketing-hub/ai-employee" },
]

export const PRIMARY_NAV: NavItem[] = [
  { label: "Workforce", href: "/workforce", children: DEPARTMENTS },
  { label: "Marketing Hub", href: "/marketing-hub", children: MARKETING_HUB_FEATURES },
  { label: "Analytics", href: "/analytics", children: [{ label: "Custom AI", href: "/analytics/custom-ai" }] },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
]

export const FOOTER_LINK_GROUPS: { heading: string; links: NavChild[] }[] = [
  { heading: "Workforce", links: [{ label: "All departments", href: "/workforce" }, ...DEPARTMENTS] },
  { heading: "Marketing Hub", links: [{ label: "Overview", href: "/marketing-hub" }, ...MARKETING_HUB_FEATURES] },
  {
    heading: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Analytics", href: "/analytics" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export interface SiteRoute {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly"
}

// The full 18-page build list (Tickets 2-21) plus "/" already shipped in this
// PR. app/sitemap.ts maps over this directly -- add a page here the same
// commit it lands, never ahead of the real route existing.
export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/security", priority: 0.6, changeFrequency: "monthly" },
  { path: "/login", priority: 0.3, changeFrequency: "monthly" },
  { path: "/workforce", priority: 0.9, changeFrequency: "weekly" },
  { path: "/workforce/content", priority: 0.8, changeFrequency: "monthly" },
  { path: "/workforce/research", priority: 0.8, changeFrequency: "monthly" },
  { path: "/workforce/brand", priority: 0.8, changeFrequency: "monthly" },
  { path: "/workforce/sales-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/workforce/marketing-ops", priority: 0.8, changeFrequency: "monthly" },
  { path: "/marketing-hub", priority: 0.8, changeFrequency: "monthly" },
  { path: "/marketing-hub/crm", priority: 0.7, changeFrequency: "monthly" },
  { path: "/marketing-hub/automations", priority: 0.7, changeFrequency: "monthly" },
  { path: "/marketing-hub/ai-employee", priority: 0.7, changeFrequency: "monthly" },
  { path: "/analytics", priority: 0.7, changeFrequency: "monthly" },
  { path: "/analytics/custom-ai", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "monthly" },
]
