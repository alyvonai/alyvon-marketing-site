import Link from "next/link"
import { ArrowRight, FileText, KeyRound, Lock, ScrollText } from "lucide-react"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Container } from "@/components/marketing/container"
import { JsonLd } from "@/components/marketing/json-ld"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { Logo } from "@/components/brand/logo"
import { HeroFilm } from "@/components/home/hero-film"
import { Eyebrow, StepLabel } from "@/components/home/ui"
import {
  BuildVisual,
  DataCheckVisual,
  DiscoveryFormVisual,
  PipelineVisual,
  RequirementsVisual,
  ScopeVisual,
} from "@/components/home/step-visuals"
import { RoutineVisual } from "@/components/home/routine-visual"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { HARNESS, REBUILT } from "@/components/home/harness"
import { smartQuotes } from "@/components/blog/post-body"
import { getAllPosts } from "@/lib/blog"
import { organizationSchema, websiteSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  // The root page does not get the layout's "%s | Alyvon" template, so the brand is written in.
  title: "Alyvon: the AI workforce for AI agencies",
  description:
    "Alyvon is the AI workforce for AI agencies: stakeholder interviews, AI readiness checks, signed scopes and custom agents. From discovery to building in days.",
  path: "/",
})

const INTEGRATIONS = [
  "Salesforce",
  "HubSpot",
  "Snowflake",
  "Zendesk",
  "NetSuite",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Jira",
  "BigQuery",
]

const PAINS = [
  {
    title: "Discovery drags.",
    body: "Six calls, three different answers, two reschedules. The follow-up email gets answered on day four, if at all. Three weeks in, you still cannot say what the client actually needs.",
  },
  {
    title: "The data surprises you after kickoff.",
    body: "The pilot assumed structured data. The loss runs are PDFs. IT granted access in week five. Now the estimate is wrong and the kickoff deck already promised the date.",
  },
  {
    title: "Scope creep eats the margin.",
    body: "Sales oversold it. The client keeps asking “can it also.” Every fix is unbilled rework, and the pilot that was supposed to earn the renewal never makes it to production.",
  },
]

const PERSONAS = [
  {
    title: "Founders and owners",
    body: "Protect the margin on every deal sales closes. See where each client project stands without sitting on every call, and stop paying for discovery you cannot bill.",
  },
  {
    title: "Project managers",
    body: "Run discovery for three clients at once. Walk into kickoff with a signed scope, a baseline, and a change-order path for everything that comes after.",
  },
  {
    title: "Consultants and engineers",
    body: "Know what data exists before you design the pilot. Build from an approved plan instead of a slide, with the queries and schema already in hand.",
  },
]

const IT_POINTS = [
  { icon: Lock, title: "Read-only by default", body: "Alyvon reads the client’s systems. It never writes to them during discovery." },
  { icon: ScrollText, title: "Every call logged", body: "Each query and API call is recorded, with the client able to review any of it." },
  { icon: KeyRound, title: "Revoke any time", body: "Access is granted per client and per system, and the client can pull it in one click." },
  { icon: FileText, title: "A vault per client", body: "OAuth connections, API keys and example outputs are stored per client, never shared across engagements." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid-dark bg-inverse text-text-on-inverse [color-scheme:dark]">
        <Container className="flex flex-col gap-14 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="hero-entrance flex flex-col gap-6">
            <Eyebrow tone="dark">For AI agencies · Discovery, AI readiness, delivery</Eyebrow>
            <h1 className="max-w-[1080px] text-balance text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[64px] lg:text-[84px]">
              From discovery to building. In <span className="text-accent">days,</span> not weeks.
            </h1>
            <p className="max-w-[640px] text-body-l text-white/80">
              Alyvon interviews your client’s stakeholders, checks their data read-only, and drafts the scope
              both sides sign. Then the AI workforce builds what was signed, with your team in control.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryCta placement="home_hero" />
              <DemoCta placement="home_hero" />
            </div>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">
              Founding cohort · First 30 days free · No lock-in contract
            </p>
          </div>
          <HeroFilm />
        </Container>
      </section>

      {/* Integrations strip */}
      <section className="border-b border-border-subtle bg-canvas py-8">
        <Container width="content-lg" className="flex flex-col items-center gap-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-text-secondary">
            Reads from the systems your clients already run
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-body text-text-secondary" translate="no">
            {INTEGRATIONS.map((i) => (
              <li key={i}>{i}</li>
            ))}
            <li className="font-medium text-accent-strong">+ 1,000 more</li>
          </ul>
        </Container>
      </section>

      {/* The routine today */}
      <Section tone="surface">
        <div className="flex flex-col gap-12">
          <div className="flex max-w-[920px] flex-col gap-5">
            <Eyebrow>The routine today</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[52px] sm:leading-[1.05]">Scoping is where AI project margins go to die.</h2>
            <p className="text-body-l text-text-secondary">
              You sold the pilot. Now three weeks of unbilled discovery decide whether it makes money, and most
              of it happens in inboxes, calendars and documents nobody will open again.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PAINS.map((p, i) => (
              <div key={p.title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle bg-canvas p-6">
                <p className="font-mono text-[12px] text-text-secondary">0{i + 1}</p>
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.02em]">{p.title}</h3>
                <p className="text-body text-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
          <RoutineVisual />
          <div className="flex flex-col gap-4 rounded-[18px] bg-inverse px-6 py-8 text-text-on-inverse sm:flex-row sm:items-center sm:gap-10 sm:px-10">
            <p className="text-[64px] font-bold leading-none tracking-[-0.04em] text-accent tabular-nums sm:text-[88px]">83%</p>
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-semibold leading-snug sm:text-[26px]">
                of enterprises convert fewer than half of their AI pilots to production.
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Madrona · Harnessing Enterprise Value: The ROI of AI · 2026
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How Alyvon works */}
      <Section tone="canvas" id="how-it-works" className="scroll-mt-20">
        <div className="flex flex-col gap-20">
          <div className="flex max-w-[920px] flex-col gap-5">
            <Eyebrow>How Alyvon works</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[52px] sm:leading-[1.05]">One client project. Four steps. No guessing.</h2>
            <p className="text-body-l text-text-secondary">The same Lakeside Insurance pilot from the film, as it runs inside Alyvon.</p>
          </div>

          {/* Step 01 */}
          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-start">
            <div className="flex flex-col gap-4 lg:sticky lg:top-24">
              <StepLabel n="01" label="Send one link" />
              <h3 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[40px]">
                Discovery without the calendar Tetris.
              </h3>
              <p className="text-body-l text-text-secondary">
                Add the client, the project goal and the people to interview. Each stakeholder gets a private
                link and talks to an AI consultant for 10 to 15 minutes, on their own time. It keeps asking
                until it has the goal, the workflow, the tools, the approvers and the success measures.
              </p>
              <div>
                <PrimaryCta placement="home_step01" className="h-11 px-6 text-body" label="Send your first interviews" />
              </div>
            </div>
            <DiscoveryFormVisual />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <PipelineVisual />
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-text-secondary">You watch it happen</p>
              <h3 className="text-balance text-[28px] font-bold leading-[1.1] tracking-[-0.03em]">
                Who answered, who stalled, who needs a nudge.
              </h3>
              <p className="text-body-l text-text-secondary">
                Every interview reports its own progress: completed and confirmed, partial, or not opened. No
                chasing, and no second round of calls because the first answers disagreed.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex max-w-[820px] flex-col gap-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-text-secondary">What you get back</p>
              <h3 className="text-balance text-[28px] font-bold leading-[1.1] tracking-[-0.03em]">
                Structured requirements, scored and confirmed by the stakeholder.
              </h3>
              <p className="text-body-l text-text-secondary">
                Goal and scope, how the work happens today, how success is measured, use cases ranked by gain, a
                measurement table with baselines, the tools and approvers, the sensitive data, and the open
                questions. Twelve areas, each with a confidence score your team sees and the stakeholder never
                does. The full transcript sits one tab over.
              </p>
            </div>
            <RequirementsVisual />
          </div>

          {/* Step 02 */}
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
            <DataCheckVisual />
            <div className="flex flex-col gap-4">
              <StepLabel n="02" label="Check data readiness" />
              <h3 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[40px]">
                Know the data before you name a price.
              </h3>
              <p className="text-body-l text-text-secondary">
                With the client’s permission, Alyvon connects to their systems read-only, reads the API docs,
                runs the queries, and shows what the data can support and where the gaps are. The surprise
                moves to before the quote, where it is free.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <StepLabel n="03" label="Approve the scope" />
              <h3 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[40px]">
                Every line in the scope has a receipt.
              </h3>
              <p className="text-body-l text-text-secondary">
                Interview evidence and data evidence become a scope of work, a delivery plan, and measures of
                success with a real baseline. Your team reviews it. The client signs it. Nobody is quoting from
                a guess.
              </p>
            </div>
            <ScopeVisual />
          </div>

          {/* Step 04 */}
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
            <BuildVisual />
            <div className="flex flex-col gap-4">
              <StepLabel n="04" label="Build and measure" />
              <h3 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[40px]">
                Signed means started.
              </h3>
              <p className="text-body-l text-text-secondary">
                The AI workforce builds the approved plan and waits for your OK on every deliverable. New
                requests become change orders, not free work. Results are tracked against the baseline the
                client signed, so you can prove the win and earn the renewal.
              </p>
            </div>
          </div>

          <p className="text-body-s italic text-text-secondary">
            Shown with the Lakeside sample engagement. Names and figures are illustrative.
          </p>
        </div>
      </Section>

      {/* Payoff band */}
      <Section tone="inverse">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["Know what to build.", "Requirements and real data before you quote. Conflicts resolved before kickoff.", false],
            ["Build what you sold.", "The workforce builds the signed scope and waits for your OK on every deliverable.", false],
            ["Bill for the rest.", "Every new request becomes a change order. Scope creep turns into paid work.", true],
          ].map(([h, b, accent]) => (
            <div key={h as string} className="flex flex-col gap-3">
              <h2 className={cn("text-[36px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[44px]", accent && "text-accent")}>
                {h}
              </h2>
              <p className="text-body-l text-white/80">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <PrimaryCta placement="home_payoff" />
          <p className="text-body-s text-white/60">Run discovery on your next client. First 30 days free for founding partners.</p>
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="canvas">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[920px] flex-col gap-5">
            <Eyebrow>Who it’s for</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[52px] sm:leading-[1.05]">Built for the people who scope the work.</h2>
            <p className="text-body-l text-text-secondary">
              AI agencies that deploy custom agents into production. The people inside them who carry the pilot
              from a signed deal to a measured result.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PERSONAS.map((p) => (
              <div key={p.title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle bg-surface p-6">
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.02em]">{p.title}</h3>
                <p className="text-body text-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The agent harness */}
      <Section tone="inverse">
        <div className="flex flex-col gap-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div className="flex flex-col gap-5">
              <Eyebrow tone="dark">The agent harness, already built</Eyebrow>
              <h2 className="text-balance text-display-l sm:text-[52px] sm:leading-[1.05]">
                Stop rebuilding the plumbing on every client project.
              </h2>
              <p className="text-body-l text-white/80">
                Every pilot needs the same foundation before the first useful agent runs. Alyvon ships it with
                every client workspace, so your engineers spend the engagement on the part the client is paying
                for.
              </p>
            </div>
            <div className="rounded-[14px] border border-white/10 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                What agencies rebuild per client today
              </p>
              <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {REBUILT.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-body-s text-white/80">
                    <span className="text-white/65 line-through decoration-accent decoration-2">{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Included on Alyvon</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HARNESS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[14px] border border-white/10 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/[0.06] text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold leading-snug">{title}</h3>
                <p className="text-body-s text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryCta placement="home_harness" />
            <p className="text-body-s text-white/60">First 30 days free. No infrastructure to host.</p>
          </div>
        </div>
      </Section>

      {/* Client IT */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <Eyebrow>Client IT</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">Everything your client’s IT needs to say yes.</h2>
            <p className="text-body-l text-text-secondary">
              Data access is the step that stalls most pilots. Alyvon asks for the least it can, logs all of it,
              and makes the client the one holding the keys.
            </p>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-body font-medium text-accent-strong underline underline-offset-4 hover:text-accent"
            >
              Read the security overview <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {IT_POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle bg-canvas p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[18px] font-semibold">{title}</h3>
                <p className="text-body-s text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Numbers */}
      <section className="border-b border-border-subtle bg-canvas py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ["10 to 15", "minutes per stakeholder interview, run in parallel"],
              ["12", "requirement areas scored in every interview"],
              ["1,000+", "integrations, read-only during discovery"],
              ["0", "writes to client systems during discovery"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col gap-2">
                {/* dt stays first for screen readers; order-* puts the number on top, top-aligned. */}
                <dt className="order-2 text-body-s text-text-secondary">{l}</dt>
                <dd className="order-1 text-[40px] font-bold leading-none tracking-[-0.04em] tabular-nums sm:text-[52px]">{n}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Insights */}
      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <Eyebrow>Insights</Eyebrow>
              <h2 className="text-balance text-display-l">Guides and free templates for AI agencies.</h2>
            </div>
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-body font-medium text-accent-strong underline underline-offset-4 hover:text-accent">
              All insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {getAllPosts()
              .slice(0, 3)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="flex h-full flex-col gap-2 rounded-[14px] border border-border-subtle p-6 transition-colors duration-micro ease-out-standard hover:border-border-input hover:bg-surface"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-strong">{p.category}</span>
                    <span className="text-[18px] font-semibold leading-snug text-text-primary">{smartQuotes(p.title)}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-ember bg-inverse py-24 text-center text-text-on-inverse sm:py-32">
        <Container className="flex flex-col items-center gap-6">
          <span className="text-white">
            <Logo size={40} />
          </span>
          <h2 className="text-balance text-[40px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[64px]">
            Bring your next deal. Leave with a scope.
          </h2>
          <p className="text-body-l text-white/85">
            From discovery to building. <span className="text-accent">In days, not weeks.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta placement="home_final_cta" />
            <DemoCta placement="home_final_cta" />
          </div>
          <p className="text-body-s text-white/60">12 founding spots. First 30 days free. No lock-in contract.</p>
        </Container>
      </section>

      <MobileCtaBar placement="home_mobile_bar" />
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  )
}
