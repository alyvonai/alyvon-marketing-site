// Navigation, footer groups, and the sitemap route list. Agency repositioning: one product
// (discovery, data checks, scope, and the agent harness), so the nav is flat. Marketing Hub
// and Analytics are no longer on this site; their old URLs redirect (next.config.mjs).

export interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Platform", href: "/platform" },
  { label: "Founding Partners", href: "/founding-partners" },
  { label: "Insights", href: "/insights" },
]
// Security lives in the footer (Trust) rather than the top nav.

export const FOOTER_LINK_GROUPS: { heading: string; links: NavChild[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Platform", href: "/platform" },
      { label: "Founding Partners", href: "/founding-partners" },
      { label: "Insights", href: "/insights" },
      { label: "Book a demo", href: "/book?product=workforce&source=footer" },
    ],
  },
  {
    heading: "Trust",
    links: [
      { label: "Security", href: "/security" },
      { label: "Subprocessors", href: "/subprocessors" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
]

export interface SiteRoute {
  path: string
  priority: number
  changeFrequency: "weekly" | "monthly"
  /** Only set when the real last-changed date is known (blog posts); never the build time. */
  lastModified?: string
}

// Indexed static routes; blog posts and authors are appended in app/sitemap.ts. No /login, /book, /thank-you, or redirected legacy product pages.
export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/platform", priority: 0.9, changeFrequency: "weekly" },
  { path: "/founding-partners", priority: 0.9, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/security", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.2, changeFrequency: "monthly" },
  { path: "/subprocessors", priority: 0.2, changeFrequency: "monthly" },
]
