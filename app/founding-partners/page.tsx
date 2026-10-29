import { Check, Database, FileSignature, Gauge, MessagesSquare, Presentation, Users, X } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Container } from "@/components/marketing/container"
import { Faq } from "@/components/marketing/faq"
import { JsonLd } from "@/components/marketing/json-ld"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { Eyebrow } from "@/components/home/ui"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { ApplicationForm } from "@/components/founding/application-form"
import { FOUNDING, FOUNDING_CLOSES_LABEL, FOUNDING_RATE_SHORT, FOUNDING_USAGE } from "@/lib/pricing"
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld"

const { cohortName, cohortSize, price, lockedMonths, freeDays } = FOUNDING

export const metadata = buildMetadata({
  title: "Founding partners: the first 12 AI agencies on Alyvon",
  description: `Join the first ${cohortSize} AI agencies on Alyvon: interviews, data discovery, SOWs, decks and the AI workforce. ${FOUNDING_RATE_SHORT} locked ${lockedMonths} months, first ${freeDays} days free.`,
  path: "/founding-partners",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Founding partners", path: "/founding-partners" },
]

// The agency toolkit the founding rate covers, in the order an engagement uses it.
const TOOLKIT = [
  {
    icon: MessagesSquare,
    title: "AI consultant for stakeholder interviews",
    body: "Send each stakeholder one link. An AI consultant interviews them on their own time and returns confirmed, scored requirements, with the disagreements flagged.",
  },
  {
    icon: Database,
    title: "Data discovery tools",
    body: "Read-only checks against the client’s systems show what data exists, what is missing and what moves to phase two, before you name a price.",
  },
  {
    icon: FileSignature,
    title: "SOWs from evidence",
    body: "Interview and data findings become a scope of work with an out-of-scope list, a baseline and a change process, ready for your team to review.",
  },
  {
    icon: Presentation,
    title: "Implementation decks",
    body: "The client-facing kickoff and rollout deck, built from the signed scope, so the plan you present is the plan you sold.",
  },
  {
    icon: Gauge,
    title: "Measurement frameworks",
    body: "Baselines and targets for every success measure, taken from the client’s own systems and tracked after launch, so you can prove the win.",
  },
  {
    icon: Users,
    title: "The AI workforce",
    body: "Custom agents, memory per client, approvals, routines and an audit trail, already built. The workforce builds what was signed, with your team in control.",
  },
]

const WHY = [
  {
    title: "Your engagements, not our guesses",
    body: "Founding partners run real client projects through Alyvon. We see what an agency actually needs from discovery to delivery, and build the price list from that.",
  },
  {
    title: "A rate that stays put",
    body: `${FOUNDING_RATE_SHORT}, locked for ${lockedMonths} months from your start date, whatever the public price list says when it arrives.`,
  },
  {
    title: "A seat at the roadmap",
    body: `${cohortSize} agencies, one shared channel and direct access to the founders. What you ask for shapes what ships next.`,
  },
]

const YOU_GET = [
  "Every tool on this page: stakeholder interviews, data discovery, SOWs, implementation decks and measurement frameworks",
  "The full AI workforce and agent harness, with no feature gating",
  `${FOUNDING_USAGE}`,
  "White-glove onboarding: we set up your first client engagement with you in week one",
  `${FOUNDING_RATE_SHORT} locked for ${lockedMonths} months, first ${freeDays} days free, no lock-in contract`,
  "A private partner channel with direct founder access and roadmap votes",
  "Co-marketing: your agency featured in the case study and the launch",
]

const WE_ASK = [
  `One real client engagement run through Alyvon within ${freeDays} days of onboarding`,
  "A 30-minute call every other week with the founders",
  "Honest feedback, including the parts that are not working",
  "A case study and logo use once results are in",
  "One reference call if a prospect or investor asks",
]

const RATE_BULLETS = [
  "Interviews, data discovery, SOWs, decks, measurement",
  "The full AI workforce",
  FOUNDING_USAGE,
  `Rate locked ${lockedMonths} months`,
  "Founder onboarding, week one",
  "Private partner channel",
  "Roadmap votes",
  "No lock-in contract",
]

const FIT = [
  "You run an AI agency or automation practice with 2 to 25 people",
  "You have at least one client paying for an agent or AI workflow today",
  "Your projects stall in discovery, data access, scoping or handoff",
  "You want SOWs and decks built from evidence, not from a blank template",
  `You will run a real client engagement through Alyvon in the first ${freeDays} days`,
]

const NOT_YET = [
  "You are still deciding whether to offer AI services at all",
  "You need enterprise procurement, SSO or a security review before you start",
  "You want a hands-off tool and no calls with the team building it",
  "You are looking for a free tier to experiment with",
]

const STEPS = [
  { label: "Step 1 · 5 min", title: "Apply", body: "Five questions about your agency, your clients and the first project you would run through Alyvon." },
  { label: "Step 2 · 20 min", title: "Fit call", body: "We walk through that project and tell you plainly whether Alyvon fits it. Not every applicant gets a spot." },
  { label: "Step 3 · Week 1", title: "Onboard", body: "We set up your workspace and your first client, and send the first stakeholder interviews together." },
  { label: "Step 4 · Ongoing", title: "Run and refine", body: `Your first engagement is running inside ${freeDays} days. Biweekly calls, a shared channel and your requests on the roadmap.` },
]

const FAQ_ITEMS = [
  {
    q: "Why not free?",
    a: "Free partners rarely put real client work in. A modest rate means both sides show up, and it gives us an honest read on what the platform is worth before we price it for everyone else. Your first 30 days are free.",
  },
  {
    q: `Why only ${cohortSize}?`,
    a: "Each founding partner gets a biweekly call and a first client engagement set up by hand. Twelve is the number we can do well. The next cohort opens after public pricing launches.",
  },
  {
    q: "Is there a contract?",
    a: `No lock-in contract. Cancel any time. The ${FOUNDING_RATE_SHORT} rate is locked for ${lockedMonths} months from your start date; you are not.`,
  },
  {
    q: "What are credits, and what does bring your own keys mean?",
    a: `Credits meter the work Alyvon does for you each month. Founding partners get ${FOUNDING.credits} a month. Or bring your own model keys, and model usage runs on your own provider accounts instead.`,
  },
  {
    q: "When does billing start?",
    a: `After your first ${freeDays} days. Onboarding and your first client engagement happen inside the free window.`,
  },
  {
    q: "Can I resell or white-label it?",
    a: "Not yet. White-label and reseller terms are part of what this cohort helps shape, and founding partners get first access to them.",
  },
]

export default function FoundingPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid-dark bg-inverse text-text-on-inverse [color-scheme:dark]">
        <Container className="grid gap-12 pb-20 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit max-w-full items-start gap-2 rounded-[14px] bg-white/10 px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-accent">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span className="sm:whitespace-nowrap">
                {cohortName} · {cohortSize} agencies · Applications close {FOUNDING_CLOSES_LABEL}
              </span>
            </p>
            <h1 className="text-balance text-[40px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[58px] lg:text-[68px]">
              Be one of the first {cohortSize} agencies on Alyvon.
            </h1>
            <p className="max-w-[620px] text-body-l text-white/80">
              Stakeholder interviews, data discovery, SOWs, implementation decks, measurement frameworks, and the AI
              workforce that builds what was signed. {price} a month, locked for {lockedMonths} months. First{" "}
              {freeDays} days free. No lock-in contract.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryCta placement="founding_hero" />
              <DemoCta placement="founding_hero" />
            </div>
          </div>

          <aside aria-label="Founding cohort terms" className="rounded-[18px] bg-canvas p-6 text-text-primary shadow-xl sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">Founding cohort</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-[56px] font-bold leading-none tracking-[-0.04em] tabular-nums">{price}</span>
              <span className="text-body text-text-secondary">{FOUNDING.priceSuffix}</span>
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border-subtle pt-5 text-body-s">
              {[
                ["Rate locked", `${lockedMonths} months`],
                ["Free to start", `First ${freeDays} days`],
                ["Contract", "No lock-in"],
                ["Usage", `${FOUNDING.credits} credits/mo or BYOK`],
                ["Cohort", `${cohortSize} agencies`],
                ["Applications close", FOUNDING_CLOSES_LABEL],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-text-secondary">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      {/* What's included */}
      <Section tone="canvas" id="included" className="scroll-mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>What the founding rate covers</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              Everything an agency needs from first interview to measured result.
            </h2>
            <p className="text-body-l text-text-secondary">
              One platform for the whole engagement: discover, scope, present, build and prove it worked.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLKIT.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[18px] font-semibold leading-snug">{title}</h3>
                <p className="text-body-s text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why a cohort */}
      <Section tone="surface">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>Why a cohort instead of a price list</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[44px] sm:leading-[1.08]">
              Most AI projects die between the demo and the handoff. We want pricing built on what actually ships.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle bg-canvas p-6">
                <p className="font-mono text-[12px] text-accent-strong">0{i + 1}</p>
                <h3 className="text-[19px] font-semibold">{w.title}</h3>
                <p className="text-body-s text-text-secondary">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The deal */}
      <Section tone="canvas">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Eyebrow>The deal</Eyebrow>
            <h2 className="text-display-l sm:text-[44px]">Two columns. No fine print.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[16px] border border-border-subtle bg-accent-wash p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold">What you get</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {YOU_GET.map((t) => (
                  <li key={t} className="flex gap-3 text-body text-text-primary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[16px] border border-border-subtle bg-surface p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold">What we ask</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {WE_ASK.map((t) => (
                  <li key={t} className="flex gap-3 text-body text-text-primary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-secondary" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Rate */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <Eyebrow>The founding rate</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[44px] sm:leading-[1.08]">Early agencies pay less.</h2>
            <p className="text-body-l text-text-secondary">
              Public pricing comes after this cohort, built from what founding partners actually use. Your rate is locked
              for {lockedMonths} months from your start date, wherever public pricing lands.
            </p>
            <p className="text-body-s text-text-secondary">
              Not a fit for your budget right now? Say so in the application. We would rather hear it than lose the
              conversation.
            </p>
          </div>
          <div className="overflow-hidden rounded-[18px] border-2 border-accent bg-canvas shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-accent px-6 py-3 text-text-on-accent">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em]">{cohortName}</p>
              <p className="text-body-s font-medium">{cohortSize} agencies</p>
            </div>
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <p className="flex items-baseline gap-2">
                  <span className="text-[60px] font-bold leading-none tracking-[-0.04em] tabular-nums">{price}</span>
                  <span className="text-body text-text-secondary">{FOUNDING.priceSuffix}</span>
                </p>
                <span className="rounded-full bg-accent-wash px-3 py-1 text-body-s font-medium text-accent-strong">
                  First {freeDays} days free
                </span>
              </div>
              <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {RATE_BULLETS.map((b) => (
                  <li key={b} className="flex gap-2.5 text-body-s text-text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div>
                <PrimaryCta placement="founding_rate_card" />
              </div>
              <p className="text-body-s text-text-secondary">
                Billing starts after your first {freeDays} days. Cancel any time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Fit */}
      <Section tone="canvas">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[16px] border border-border-subtle bg-surface p-6 sm:p-8">
            <h2 className="text-[22px] font-semibold">Built for you if</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {FIT.map((t) => (
                <li key={t} className="flex gap-3 text-body text-text-primary">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-success-ink" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[16px] border border-border-subtle p-6 sm:p-8">
            <h2 className="text-[22px] font-semibold">Probably not yet if</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {NOT_YET.map((t) => (
                <li key={t} className="flex gap-3 text-body text-text-secondary">
                  <X className="mt-1 h-4 w-4 shrink-0 text-text-secondary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="surface">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[820px] flex-col gap-5">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[44px] sm:leading-[1.08]">
              From application to a live client engagement in four weeks.
            </h2>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`flex flex-col gap-2 border-t-[3px] pt-5 ${i === 0 ? "border-accent" : "border-border-subtle"}`}>
                <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-secondary">{s.label}</p>
                <h3 className="text-[19px] font-semibold">{s.title}</h3>
                <p className="text-body-s text-text-secondary">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Apply */}
      <Section tone="canvas" id="apply" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">
            <Eyebrow>Apply</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[44px] sm:leading-[1.08]">
              Five questions. We reply within two business days.
            </h2>
            <p className="text-body-l text-text-secondary">
              Applications are read by the founding team, not a form bot. If it’s a fit, you get a calendar link. If it
              isn’t, you get a reason.
            </p>
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-secondary">
              Applications close {FOUNDING_CLOSES_LABEL}
            </p>
          </div>
          <ApplicationForm />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <div className="max-w-[860px]">
          <Faq items={FAQ_ITEMS} heading="Questions agencies ask" />
        </div>
      </Section>

      {/* Closing band */}
      <section className="bg-ember bg-inverse py-20 text-text-on-inverse sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[44px]">
              Get in before the price list does.
            </h2>
            <p className="text-body-l text-white/75">
              {cohortSize} founding spots. Applications close {FOUNDING_CLOSES_LABEL}.
            </p>
          </div>
          <PrimaryCta placement="founding_final_cta" />
        </Container>
      </section>

      <MobileCtaBar placement="founding_mobile_bar" />
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(FAQ_ITEMS)]} />
    </>
  )
}
