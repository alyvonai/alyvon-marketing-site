// Single source of truth for product motions, CTAs, and the Workforce group/department
// model. Counts here are canonical: 16 departments, 102 specialists, 6 groups (master
// launch spec §4/§15). Pages, nav, and the sitemap all read from here so a count or a
// route only changes in one place.

export const SITE_URL = "https://www.alyvon.com"
export const SUPPORT_EMAIL = "hello@alyvon.com"

export type ProductId = "workforce" | "marketing_hub" | "analytics"

// Booking URLs resolve from env (verified GHL booking/form links) with a mailto fallback,
// per spec §5. NEXT_PUBLIC_* vars are inlined at build time so these work in client
// components too.
const MARKETING_HUB_BOOKING =
  process.env.NEXT_PUBLIC_MARKETING_HUB_BOOKING_URL ||
  `mailto:${SUPPORT_EMAIL}?subject=Marketing%20Hub%20walkthrough`
const ANALYTICS_BOOKING =
  process.env.NEXT_PUBLIC_ANALYTICS_BOOKING_URL ||
  `mailto:${SUPPORT_EMAIL}?subject=Analytics%20scoping%20call`

export const CTA = {
  workforce: {
    label: "Start your 14-day free trial",
    href: "https://app.alyvon.com/signup",
    micro: "14 days or 10 deliverables, whichever comes first. No credit card.",
    product: "workforce" as ProductId,
  },
  marketingHub: {
    label: "Book a Marketing Hub walkthrough",
    href: MARKETING_HUB_BOOKING,
    product: "marketing_hub" as ProductId,
  },
  analytics: {
    label: "Book an Analytics scoping call",
    href: ANALYTICS_BOOKING,
    product: "analytics" as ProductId,
  },
} as const

export const WORKFORCE_STATS = {
  departments: 16,
  specialists: 102,
  groups: 6,
} as const

export interface Department {
  name: string
  /** Anchor id used on the group page (scroll-margin-top: 96px). */
  anchor: string
  /** Verified Director first name, when known. Omit rather than invent. */
  director?: string
  produces: string
}

export interface WorkforceGroup {
  slug: string
  /** Full route, e.g. /workforce/strategy-leadership */
  href: string
  label: string
  /** One-line card description used on the index + nav. */
  tagline: string
  specialists: number
  departments: Department[]
  h1: string
  subhead: string
  finalCta: string
  /** true only for Creative (paid add-on line, spec §18). */
  addOn?: boolean
}

export const WORKFORCE_GROUPS: WorkforceGroup[] = [
  {
    slug: "strategy-leadership",
    href: "/workforce/strategy-leadership",
    label: "Strategy & Leadership",
    tagline: "The board deck, the model, and the monthly finance work that keeps getting deferred.",
    specialists: 14,
    h1: "You’re the strategy function and the finance function. Neither gets your full week.",
    subhead:
      "Fourteen specialists produce the board deck, scenario model, competitive read, and monthly finance work that gets deferred because client delivery always wins.",
    finalCta: "Get the board deck off your weekend.",
    departments: [
      {
        name: "Executive & Strategy",
        anchor: "executive-strategy",
        produces: "Board decks, competitive reads, scenario planning, strategy memos",
      },
      {
        name: "Finance & Accounting",
        anchor: "finance-accounting",
        produces: "Financial models, monthly close support, budgets, investor updates",
      },
    ],
  },
  {
    slug: "brand-content",
    href: "/workforce/brand-content",
    label: "Brand & Content",
    tagline: "Positioning, the words, and the announcements — all in one company voice.",
    specialists: 20,
    h1: "Your company has a voice problem before it has a traffic problem.",
    subhead:
      "Brand, Content & Editorial, and Communications & PR keep the words, claims, launch copy, and announcements aligned. The page, the sequence, the press note, and the message all read like one company made them.",
    finalCta: "Publish something this week you haven’t written yet.",
    departments: [
      {
        name: "Brand",
        anchor: "brand",
        director: "Avery",
        produces: "Positioning, naming, voice and copy rules, campaign concepts",
      },
      {
        name: "Content & Editorial",
        anchor: "content-editorial",
        director: "Cyrus",
        produces: "Sales pages, articles, email sequences, scripts, edited final drafts",
      },
      {
        name: "Communications & PR",
        anchor: "communications-pr",
        produces: "Announcements, press notes, internal comms, messaging houses",
      },
    ],
  },
  {
    slug: "creative",
    href: "/workforce/creative",
    label: "Creative",
    tagline: "Ad variants, campaign visuals, and product shots that look like your company.",
    specialists: 6,
    addOn: true,
    h1: "Creative is the bottleneck paid spend exposes first.",
    subhead:
      "Jordan’s Creative department produces ad variants, campaign visuals, launch graphics, short-form creative, and product visuals that look like your company. Creative is a paid add-on because media generation and creative QA carry real incremental cost.",
    finalCta: "Add Creative capacity before the next campaign stalls.",
    departments: [
      {
        name: "Creative",
        anchor: "creative",
        director: "Jordan",
        produces: "Ad variants, campaign visuals, launch graphics, short-form and product visuals",
      },
    ],
  },
  {
    slug: "marketing-sales",
    href: "/workforce/marketing-sales",
    label: "Marketing & Sales",
    tagline: "Demand gen, outbound, and revenue operations — pipeline without the hire.",
    specialists: 20,
    h1: "Pipeline is a headcount problem you can’t afford to solve yet.",
    subhead:
      "Three departments across demand gen, outbound, and revenue operations. Brief the account list, campaign build, pipeline report, or CRM cleanup in plain language and get the finished work back before the hire would have reached screening.",
    finalCta: "Book your first meeting from a list you didn’t build.",
    departments: [
      {
        name: "Marketing Operations",
        anchor: "marketing-operations",
        director: "Tobias",
        produces: "Campaign builds, funnel copy, attribution, CRM and automation work",
      },
      {
        name: "Sales Development",
        anchor: "sales-development",
        director: "Casey",
        produces: "Account lists, outbound sequences, enablement, meeting prep",
      },
      {
        name: "Revenue Operations",
        anchor: "revenue-operations",
        produces: "Pipeline reports, CRM hygiene, forecasting, deal-desk support",
      },
    ],
  },
  {
    slug: "customer-people",
    href: "/workforce/customer-people",
    label: "Customer & People",
    tagline: "Onboarding, support docs, QBRs, and the HR work before it becomes an emergency.",
    specialists: 10,
    h1: "Retention and hiring are full-time jobs. You’re doing both between meetings.",
    subhead:
      "Customer Success, Customer Support, and People & HR handle onboarding flows, QBR prep, support docs, job descriptions, scorecards, and policy work before the missing process becomes an emergency.",
    finalCta: "Fix the churn signal before next quarter.",
    departments: [
      {
        name: "Customer Success",
        anchor: "customer-success",
        produces: "Onboarding flows, QBR prep, health playbooks, renewal briefs",
      },
      {
        name: "Customer Support",
        anchor: "customer-support",
        produces: "Support docs, macros, help-center articles, response templates",
      },
      {
        name: "People & HR",
        anchor: "people-hr",
        produces: "Job descriptions, scorecards, onboarding plans, policy drafts",
      },
    ],
  },
  {
    slug: "product-engineering",
    href: "/workforce/product-engineering",
    label: "Product & Engineering",
    tagline: "PRs, interface specs, research reads, and security questionnaires you review.",
    specialists: 32,
    h1: "The backlog isn’t a prioritization problem. It’s a capacity problem.",
    subhead:
      "Engineering, Product Design, Research & Insights, and Security & Compliance handle the small but blocking work: PRs, interface specs, research reads, and security questionnaires. Your team reviews and approves before anything ships.",
    finalCta: "Ship your first pull request this week.",
    departments: [
      {
        name: "Engineering",
        anchor: "engineering",
        director: "Hugo",
        produces: "Real GitHub pull requests — landing pages, fixes, features, full projects",
      },
      {
        name: "Product Design",
        anchor: "product-design",
        produces: "Interface specs, flows, wireframes, design QA",
      },
      {
        name: "Research & Insights",
        anchor: "research-insights",
        director: "Pemberton",
        produces: "Market scans, competitor audits, data reads, source audits",
      },
      {
        name: "Security & Compliance",
        anchor: "security-compliance",
        produces: "Security questionnaires, policy drafts, control mapping, vendor reviews",
      },
    ],
  },
]

export function groupBySlug(slug: string): WorkforceGroup | undefined {
  return WORKFORCE_GROUPS.find((g) => g.slug === slug)
}

// All 16 departments flattened, for the Workforce index directory + ItemList schema.
export const ALL_DEPARTMENTS: (Department & { group: string; groupHref: string })[] =
  WORKFORCE_GROUPS.flatMap((g) =>
    g.departments.map((d) => ({ ...d, group: g.label, groupHref: g.href }))
  )
