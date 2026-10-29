import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Container } from "@/components/marketing/container"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { Faq } from "@/components/marketing/faq"
import { JsonLd } from "@/components/marketing/json-ld"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { Eyebrow } from "@/components/home/ui"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { HARNESS } from "@/components/home/harness"
import { WORKFORCE_STATS } from "@/lib/site"
import { faqSchema, softwareApplicationSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "AI workforce platform for AI agencies: the agent harness",
  description:
    "The agent harness AI agencies rebuild on every client project, already built: custom agents, memory per client, approvals, integrations and an audit trail.",
  path: "/platform",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Platform", path: "/platform" },
]

// The specifics behind each harness capability, keyed by HARNESS title. Every line maps to
// a shipped feature described elsewhere on the site (pricing table, terms, security page).
const DETAILS: Record<string, string[]> = {
  "Custom agents": [
    "Role, tools and voice, set in plain language",
    "Runs beside the prebuilt specialists",
    "Works from the client’s memory and connections",
  ],
  "Memory per client": [
    "Brand voice, positioning, products and ICP",
    "Docs, past work and data as searchable knowledge",
    "Context and decisions carry across tasks",
  ],
  "Approvals built in": [
    "Send, publish and spend actions wait for an OK",
    "Approve from the desk or the phone",
    "Work is reviewed before it reaches you",
  ],
  "1,000+ integrations, auth handled": [
    "Gmail, Slack, HubSpot, GHL, Notion, Drive and more",
    "Credentials held by the integration provider",
    "Scopes granted per client, revocable any time",
  ],
  "Routines and triggers": [
    "Scheduled, event based, or webhook triggered",
    "Brief once, delivered on a cadence",
    "Nothing for you to host or monitor",
  ],
  "Improvement Engine": [
    "Ranked fixes, proven plays and A/B experiments",
    "Runs only what you approve",
    "Measures the result and reports back",
  ],
  "Audit trail": [
    "Every query and API call recorded",
    "The client can review any of it",
    "Read-only during discovery",
  ],
  "Bring your own model keys": [
    "Run on your own model accounts",
    "For clients or contracts that require it",
    "Available on Enterprise",
  ],
}

// Build-it-yourself vs. Alyvon, one row per piece of plumbing.
const COMPARE: [string, string, string][] = [
  ["Client system access", "Write and secure an OAuth flow for each system, for each client", "1,000+ integrations, auth brokered per client"],
  ["Memory and retrieval", "Stand up a vector store, ingestion and chunking per engagement", "Memory per client, embedded on upload"],
  ["Human in the loop", "Build an approval queue and the notifications around it", "Approvals on every send, publish and spend"],
  ["Logging for client IT", "Wire up logs the client’s security team will accept", "Every call logged and reviewable by the client"],
  ["Scheduling", "Host cron jobs, queues and webhook receivers", "Routines: scheduled, event based, or webhook"],
  ["After launch", "Track results by hand and re-scope every change", "Improvement Engine, measured against the baseline"],
]

const FLOW = [
  { n: "01", title: "Interview the stakeholders", body: "One link per person, 10 to 15 minutes each." },
  { n: "02", title: "Check data readiness", body: "Read-only queries against the client’s systems." },
  { n: "03", title: "Sign the scope", body: "Scope, delivery plan and measures of success." },
  { n: "04", title: "Build on the harness", body: "Agents, routines and approvals, already wired." },
]

const FAQ_ITEMS = [
  {
    q: "Do I need to host anything?",
    a: "No. Agents, memory, routines, approvals and the audit trail run on Alyvon. You connect the client’s systems with the access they grant, and revoke it when the engagement ends.",
  },
  {
    q: "How is one client kept separate from another?",
    a: "Each client gets its own workspace. Memory, connections, credentials and example outputs are stored per client and never shared across engagements.",
  },
  {
    q: "What does the client’s IT team see?",
    a: "Read-only access during discovery, the narrowest scopes the work needs, a log of every query and API call they can review, and the ability to revoke access in one click. The security overview covers the details.",
  },
  {
    q: "Can I try it on a real client project?",
    a: "Yes. Founding partners run a real client engagement through Alyvon in their first 30 days, which are free. Apply for a founding spot to start.",
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid-dark bg-inverse text-text-on-inverse [color-scheme:dark]">
        <Container className="flex flex-col gap-6 pb-20 pt-10 sm:pb-28 sm:pt-14">
          <Breadcrumbs crumbs={crumbs} tone="dark" />
          <Eyebrow tone="dark" className="mt-6">Platform · For AI agencies</Eyebrow>
          <h1 className="max-w-[1000px] text-balance text-[42px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[60px] lg:text-[76px]">
            The agent harness, <span className="text-accent">already built.</span>
          </h1>
          <p className="max-w-[680px] text-body-l text-white/80">
            Every client project needs the same foundation before the first useful agent runs: access to their
            systems, memory, approvals, logging, scheduling, and a way to improve it after launch. Alyvon ships
            all of it with every client workspace, so your team builds the part the client is paying for.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryCta placement="platform_hero" />
            <DemoCta placement="platform_hero" />
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">
            Founding cohort · First 30 days free · Nothing to host
          </p>
        </Container>
      </section>

      {/* Per client by default */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <Eyebrow>One workspace per client</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              Separate by default, so you never rebuild for the next one.
            </h2>
            <p className="text-body-l text-text-secondary">
              Each client gets its own memory, connections, credentials and audit trail. Start the next engagement
              and the harness is already there, empty and ready, with nothing carried over from the last client.
            </p>
          </div>
          <figure
            aria-label="An agency account with three client workspaces, each holding its own memory, connections, approvals and audit trail."
            className="rounded-[18px] bg-inverse p-4 sm:p-5"
          >
            <div aria-hidden="true" className="flex flex-col gap-3">
              <div className="rounded-[10px] border border-white/15 px-4 py-3 text-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/60">Your agency</p>
                <p className="text-[15px] font-semibold">Team, approvals and billing</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Lakeside Insurance", "Northwind Logistics", "Harbor Dental Group"].map((c, i) => (
                  <div key={c} className="rounded-[10px] bg-canvas p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-strong">Client 0{i + 1}</p>
                    <p className="text-[14px] font-semibold text-text-primary">{c}</p>
                    <ul className="mt-2 flex flex-col gap-1 text-[12px] text-text-secondary">
                      {["Memory", "Connections", "Approvals", "Audit trail"].map((x) => (
                        <li key={x} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-success-ink" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <figcaption className="mt-3 text-[12px] text-white/60">Client names are illustrative.</figcaption>
          </figure>
        </div>
      </Section>

      {/* Harness detail */}
      <Section tone="surface" id="harness" className="scroll-mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>What ships with every workspace</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              Eight pieces of plumbing you stop writing.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HARNESS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle bg-canvas p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold leading-snug">{title}</h3>
                <p className="text-body-s text-text-secondary">{body}</p>
                <ul className="mt-auto flex flex-col gap-1.5 border-t border-border-subtle pt-3">
                  {(DETAILS[title] ?? []).map((d) => (
                    <li key={d} className="flex gap-2 text-[13px] leading-[19px] text-text-primary">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success-ink" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Build vs Alyvon */}
      <Section tone="canvas">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>Build it yourself, or don’t</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              The same work, every engagement. Or none of it.
            </h2>
            <p className="text-body-l text-text-secondary">
              None of this is what the client is paying for, and all of it has to exist before they will let an
              agent near production.
            </p>
          </div>
          <div className="overflow-hidden rounded-[14px] border border-border-subtle">
            <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] bg-surface px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary md:grid">
              <span>Plumbing</span>
              <span>Build it yourself, per client</span>
              <span className="text-accent-strong">On Alyvon</span>
            </div>
            <dl className="divide-y divide-border-subtle">
              {COMPARE.map(([what, diy, alyvon]) => (
                <div key={what} className="grid gap-2 px-6 py-4 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-6">
                  <dt className="text-body font-semibold text-text-primary">{what}</dt>
                  <dd className="text-body-s text-text-secondary">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary md:hidden">Yourself: </span>
                    {diy}
                  </dd>
                  <dd className="flex gap-2 text-body-s font-medium text-text-primary">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-success-ink" aria-hidden="true" />
                    {alyvon}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Where it fits */}
      <Section tone="inverse">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow tone="dark">Where the harness fits</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              Discovery decides what to build. The harness is what you build on.
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((f) => (
              <li key={f.n} className="flex flex-col gap-2 rounded-[14px] border border-white/10 p-6">
                <p className="font-mono text-[12px] text-accent">{f.n}</p>
                <h3 className="text-[18px] font-semibold">{f.title}</h3>
                <p className="text-body-s text-white/70">{f.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-body text-white/80">
            Plus {WORKFORCE_STATS.specialists} prebuilt specialists for the work around the build: the scope document,
            the rollout deck, the client report.{" "}
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-1 font-medium text-accent underline underline-offset-4 hover:text-white"
            >
              See the full flow <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="canvas">
        <div className="max-w-[860px]">
          <Faq items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-ember bg-inverse py-24 text-center text-text-on-inverse sm:py-28">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="text-balance text-[38px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[56px]">
            Spend the next project on the agent, not the plumbing.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta placement="platform_final_cta" />
            <DemoCta placement="platform_final_cta" />
          </div>
          <p className="text-body-s text-white/60">First 30 days free. No lock-in contract.</p>
        </Container>
      </section>

      <MobileCtaBar placement="platform_mobile_bar" />
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: "Alyvon",
            description:
              "AI discovery, scoping and an agent harness for AI agencies: custom agents, memory per client, approvals, integrations, routines, and an audit trail.",
            url: "/platform",
          }),
          faqSchema(FAQ_ITEMS),
        ]}
      />
    </>
  )
}
