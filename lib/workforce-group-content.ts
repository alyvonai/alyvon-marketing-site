// Per-group editorial content for the Workforce group pages (spec §17/§18). The structural
// template lives in components/marketing/workforce-group-page.tsx; this is the copy that
// varies by group. H1/subhead/final-CTA come from lib/site WORKFORCE_GROUPS.

import type { FaqItem } from "@/components/marketing/faq"

export interface GroupUseCase {
  title: string
  brief: string
  artifact: string
}

export interface GroupContent {
  /** "You're in the right place if…" bullets. */
  rightPlace: string[]
  useCases: GroupUseCase[]
  /** How these departments work together — one paragraph. */
  together: string
  faq: FaqItem[]
  /** Optional note rendered under a specific department anchor (spec §26). */
  anchorNotes?: Record<string, { title: string; body: string; ctaLabel?: string; ctaHref?: string }>
}

// A 2–3 sentence description per department, keyed by anchor. Rendered in each group
// page's department anchor sections so they read as real sections, not a one-liner.
export const DEPARTMENT_DETAILS: Record<string, string> = {
  "executive-strategy":
    "Executive & Strategy turns a messy quarter into a clear story — the board deck, the competitive read, the scenario planning that says what to do next. Brief the narrative you need to tell and it comes back sourced, sectioned, and ready to present.",
  "finance-accounting":
    "Finance & Accounting keeps the numbers current when month-end always loses to client work — models, budgets, variance notes, and investor updates. Connect where your numbers live and it works from the real data, not a guess.",
  brand:
    "Brand owns the positioning and the canonical sell — what you are, what you're not, and the voice everything is written in. It sets the rules once so five writers sound like one company.",
  "content-editorial":
    "Content & Editorial writes the funnel's words — sales pages, emails, articles, ad variants, and scripts — and edits for one consistent voice. Brief the outcome and a finished, ready-to-publish draft comes back.",
  "communications-pr":
    "Communications & PR carries that message into the outside world — announcements, press notes, and internal comms that never drift from the brand. The launch post and the press note read like the same company wrote them.",
  creative:
    "Creative produces the visuals paid spend burns through first — ad variants, launch graphics, short-form cuts, and product visuals that match your brand, with a QA pass before anything ships. It's a paid add-on because media generation carries real incremental cost.",
  "marketing-operations":
    "Marketing Operations plans and buys media, wires up tracking, runs CRO, and proves which dollar produced a signup. Brief the campaign, the audit, or the report and it works inside your ad platforms and analytics.",
  "sales-development":
    "Sales Development builds the account lists, outbound sequences, and enablement that turn demand into meetings — then arms whoever takes the call. Brief the ICP and a ready-to-load list and sequence come back.",
  "revenue-operations":
    "Revenue Operations keeps the pipeline and forecast honest — CRM hygiene, stage cleanup, deal-desk support, and reports leadership actually trusts. Hand it a messy export and get a clean, re-staged pipeline with a change log.",
  "customer-success":
    "Customer Success keeps accounts moving — onboarding flows, QBR prep, health playbooks, and renewal briefs — so a missing process doesn't become a churned logo. Brief the account and the prep comes back ready.",
  "customer-support":
    "Customer Support turns repeat questions into scalable answers — help-center articles, macros, and response templates in your voice. Point it at your top tickets and get the docs that deflect them.",
  "people-hr":
    "People & HR handles the hiring and policy work that always slips — job descriptions, interview scorecards, onboarding plans, and policy drafts. It produces the starting points; legal and compliance review stay yours.",
  engineering:
    "Engineering ships real product changes as GitHub pull requests your team reviews and merges — landing pages, fixes, and features. Hugo reads the repo's true state, branches, commits, and opens a PR; he never pushes to main or merges his own work.",
  "product-design":
    "Product Design specs the interface before it's built — flows, wireframes, and interaction detail — and reviews what ships against it. Brief the feature and get a spec engineering can build from.",
  "research-insights":
    "Research & Insights owns the numbers you report on yourself — a SQL answer, a cohort read, a churn pattern, a source audit — so no page ships an unchecked stat. Ask in plain language and get the real number back.",
  "security-compliance":
    "Security & Compliance answers the questionnaires that block deals and drafts the policies auditors ask for — control mapping, vendor reviews, and data-handling facts pulled from how you actually operate.",
}

export const GROUP_CONTENT: Record<string, GroupContent> = {
  "strategy-leadership": {
    rightPlace: [
      "You’re the strategy function and the finance function, and neither gets your full week.",
      "The board deck gets built on the weekend, if it gets built at all.",
      "The monthly finance work slips because client delivery always wins.",
    ],
    together: "Executive & Strategy sets the narrative and the scenarios; Finance & Accounting grounds them in the model and the monthly numbers. Together they produce a board deck whose story and math were built by the same team.",
    useCases: [
      { title: "A board deck due Monday", brief: "Build the Q3 board deck from these metrics and last quarter’s narrative.", artifact: "A slide deck (pptx), sourced and sectioned." },
      { title: "A scenario nobody has modeled", brief: "Model three growth scenarios against our current burn and runway.", artifact: "A financial model (xlsx) with assumptions called out." },
      { title: "A competitor you haven’t read", brief: "Give me a competitive read on these three players — positioning, pricing, and gaps.", artifact: "A competitive brief (docx)." },
      { title: "A month-end that keeps slipping", brief: "Draft the monthly finance summary and variance notes from this export.", artifact: "A finance summary (docx) plus a variance sheet (xlsx)." },
    ],
    faq: [
      { q: "What’s in Strategy & Leadership?", a: "Two departments — Executive & Strategy and Finance & Accounting — with fourteen specialists that produce board decks, models, competitive reads, and monthly finance work." },
      { q: "Can it use our real financials?", a: "Yes. Connect the tools where your numbers live and specialists work from them. Nothing that sends or spends happens without your approval." },
      { q: "Who reviews the output?", a: "A Director reviews every deliverable before it reaches you, and you approve anything that goes external." },
      { q: "Is this financial advice?", a: "No. Alyvon produces the analysis and the artifacts; decisions and any regulated advice remain yours and your advisors’." },
    ],
  },

  "brand-content": {
    rightPlace: [
      "Every writer sounds different, so nothing reads like one company.",
      "The pitch changes on every call because the positioning lives in your head.",
      "Launch copy, the press note, and the sequence never get aligned before they ship.",
    ],
    together: "Brand sets the voice and the canonical sell; Content & Editorial writes to it; Communications & PR carries the same message into announcements. The page, the sequence, and the press note all read like one company made them.",
    useCases: [
      { title: "A launch email nobody has drafted", brief: "Write a three-email launch sequence for this feature, aimed at trial users.", artifact: "A sequence (docx) with subject-line variants." },
      { title: "A pricing page on last quarter’s numbers", brief: "Rewrite the pricing page against this positioning and these plans.", artifact: "Page copy (docx), section by section." },
      { title: "An announcement with no house style", brief: "Draft the launch announcement and a short press note.", artifact: "An announcement + press note (docx)." },
      { title: "Five writers with no rulebook", brief: "Write the voice and copy rules every writer loads before starting.", artifact: "A brand voice reference (docx), with wrong/right examples." },
    ],
    faq: [
      { q: "What’s in Brand & Content?", a: "Three departments — Brand, Content & Editorial, and Communications & PR — with twenty specialists covering positioning, the words, and announcements." },
      { q: "Will the output sound like us?", a: "Yes. Brand encodes your voice and positioning, and every specialist writes from it, so the page and the press note read like one company." },
      { q: "Does this include design?", a: "No — text and strategy live here. Image and video production are the separate Creative department (a paid add-on)." },
      { q: "Can it publish for me?", a: "It drafts and finishes the work; anything that publishes waits for your approval first." },
    ],
  },

  creative: {
    rightPlace: [
      "Your ads are fatigued but the offer still works.",
      "Every launch needs images, variants, and a designer you do not have.",
      "You need product visuals that look real without exposing customer data.",
    ],
    together: "Creative is Jordan’s department: strategists, designers, and media specialists who turn a brief into ad variants, launch graphics, and product visuals that match your brand — with creative QA before anything ships.",
    useCases: [
      { title: "An ad set that has fatigued", brief: "Give me eight new ad variants for the pricing campaign, same offer.", artifact: "An ad variant set with copy and visuals." },
      { title: "A launch with no graphics", brief: "Produce the launch graphics and social cuts for this announcement.", artifact: "A graphics pack sized for each channel." },
      { title: "Product visuals with no photographer", brief: "Create product visuals that look real without using customer data.", artifact: "Illustrative product visuals, brand-matched." },
    ],
    faq: [
      { q: "Why is Creative priced separately?", a: "Media generation and creative QA carry real incremental cost, so Creative is a paid add-on on every plan rather than folded into a base plan." },
      { q: "Will the creative match our brand?", a: "Yes — Creative works from your brand rules and positioning, with a QA pass before anything is delivered." },
      { q: "Do you use customer data in visuals?", a: "No. Product visuals are illustrative recreations; we never expose customer data or private material." },
    ],
  },

  "marketing-sales": {
    rightPlace: [
      "Pipeline is a headcount problem you can’t afford to solve yet.",
      "The campaign is ready but there’s no matching account list.",
      "The CRM is a mess and the forecast is a guess.",
    ],
    together: "Marketing Operations builds and measures demand, Sales Development turns it into meetings, and Revenue Operations keeps the pipeline and the numbers clean. Brief any of them and the finished work comes back before a hire would have reached screening.",
    useCases: [
      { title: "A campaign with no account list", brief: "Build a list of 200 accounts matching our ICP: US agencies and SaaS, 5–150 employees, founder or VP.", artifact: "An account list (xlsx) with firmographic and signal columns." },
      { title: "An outbound sequence that flatlined", brief: "Write a new five-touch outbound sequence for VP-title prospects at agencies.", artifact: "A sequence (docx), ready to load into the outbound tool." },
      { title: "A quarter with no channel answer", brief: "Build a multi-touch attribution report for this quarter’s paid spend.", artifact: "An attribution report (docx) with a channel-ranked table." },
      { title: "A CRM nobody trusts", brief: "Dedupe and re-stage this pipeline export against our real stages.", artifact: "A cleaned pipeline (xlsx) with a change log." },
    ],
    faq: [
      { q: "What’s in Marketing & Sales?", a: "Three departments — Marketing Operations, Sales Development, and Revenue Operations — with twenty specialists across demand gen, outbound, and revops." },
      { q: "Does it work in our tools?", a: "Yes. With 1,000+ integrations, specialists act inside your CRM, ad platforms, and outbound tools rather than a walled garden." },
      { q: "Will it send outreach for me?", a: "It builds the lists and sequences; anything that sends waits for your approval first." },
    ],
  },

  "customer-people": {
    rightPlace: [
      "Retention and hiring are full-time jobs you’re doing between meetings.",
      "Onboarding is ad hoc and QBR prep eats your week.",
      "The job description and the scorecard never get written.",
    ],
    together: "Customer Success and Customer Support keep customers moving and answered; People & HR keeps hiring and policy from becoming an emergency. Brief the missing process and it comes back before it costs you a renewal or a candidate.",
    useCases: [
      { title: "A churn signal nobody patterned", brief: "Pull every logged churn reason this quarter and tell me what’s driving it.", artifact: "A churn-driver summary (docx)." },
      { title: "A QBR with no prep", brief: "Prepare the QBR deck for this account from their usage and history.", artifact: "A QBR deck (pptx)." },
      { title: "A support queue with no docs", brief: "Write help-center articles and macros for the five most common tickets.", artifact: "Support docs + macros (docx)." },
      { title: "A role with no job description", brief: "Write the job description and interview scorecard for this role.", artifact: "A JD + scorecard (docx)." },
    ],
    faq: [
      { q: "What’s in Customer & People?", a: "Three departments — Customer Success, Customer Support, and People & HR — with ten specialists covering onboarding, support, and the HR work that keeps slipping." },
      { q: "Is HR output legal advice?", a: "No. It drafts descriptions, scorecards, and policy starting points; legal and compliance review remain yours." },
      { q: "Can it answer customers directly?", a: "It drafts the docs and responses; anything customer-facing waits for your approval, or routes through Marketing Hub’s AI Employee where you’ve enabled it." },
    ],
  },

  "product-engineering": {
    rightPlace: [
      "The backlog is a capacity problem, not a prioritization one.",
      "The landing page has been “next sprint” for a month.",
      "A security questionnaire is blocking a deal.",
    ],
    together: "Engineering ships the change as a pull request, Product Design specs the interface, Research & Insights supplies the read, and Security & Compliance answers the questionnaire. Your team reviews and approves before anything merges or ships.",
    useCases: [
      { title: "A landing page stuck in the backlog", brief: "Build a pricing-page variant with this copy and open it as a pull request.", artifact: "A GitHub pull request, ready to review and merge." },
      { title: "A feature with no spec", brief: "Write the interface spec and flows for this feature.", artifact: "An interface spec (docx) with flows." },
      { title: "A decision with no data", brief: "Pull trial-to-paid conversion by tier for the last two quarters and tell me if it’s down.", artifact: "A short analysis (docx) with the real numbers." },
      { title: "A questionnaire nobody can answer live", brief: "Draft answers to this security questionnaire from our real data-handling facts.", artifact: "A completed questionnaire (docx)." },
    ],
    faq: [
      { q: "What’s in Product & Engineering?", a: "Four departments — Engineering, Product Design, Research & Insights, and Security & Compliance — with thirty-two specialists handling the small but blocking work." },
      { q: "How does Engineering deliver?", a: "As a real GitHub pull request. Hugo reads the repo’s current state, branches, commits, and opens a PR. He never pushes to main and never merges his own PR — your team always reviews." },
      { q: "Is this the same as Alyvon Analytics?", a: "No. Research & Insights runs inside Alyvon on your connected tools. Custom agents or data systems deployed in your own infrastructure are Alyvon Analytics." },
    ],
    anchorNotes: {
      "research-insights": {
        title: "Need this in your own environment?",
        body: "Research & Insights runs inside Alyvon on your connected tools. If you need custom agents, data systems, or analytics workflows deployed in your infrastructure, that is Alyvon Analytics.",
        ctaLabel: "See Alyvon Analytics",
        ctaHref: "/analytics",
      },
    },
  },
}
