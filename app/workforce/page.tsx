import Link from "next/link"
import { Palette, Database, Plug, Blocks, Sparkles, CalendarClock } from "lucide-react"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DataTable } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { StatBar } from "@/components/marketing/stat-bar"
import { RoleSelector } from "@/components/marketing/role-selector"
import { Faq } from "@/components/marketing/faq"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { MobileCtaBar } from "@/components/marketing/mobile-cta-bar"
import { CTA, WORKFORCE_GROUPS, ALL_DEPARTMENTS, WORKFORCE_STATS } from "@/lib/site"
import {
  softwareApplicationSchema,
  faqSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/jsonld"

const { departments: DEPTS, specialists: SPECIALISTS, groups: GROUPS } = WORKFORCE_STATS

export const metadata = buildMetadata({
  title: "Workforce",
  description:
    `Alyvon Workforce: ${DEPTS} departments and ${SPECIALISTS} specialists across ${GROUPS} groups, each routed by a Chief of Staff who turns a plain-language brief into a finished file. No 44-day search, no salary line before the work proves itself.`,
  path: "/workforce",
})

const STATS = [`${DEPTS} departments`, `${SPECIALISTS} specialists`, `${GROUPS} groups`, "finished files, not transcripts"]

const ROLE_CHIPS = WORKFORCE_GROUPS.map((g) => ({ label: g.label, href: g.href }))

const DIFFERENTIATORS = [
  {
    icon: Palette,
    title: "Writes in your voice, not a generic one",
    body: "Every specialist works from your brand — voice, positioning, colors, products, pricing, and ICP. The output sounds like your company wrote it, because it's briefed the way your company would. No re-explaining who you are on every task.",
  },
  {
    icon: Database,
    title: "Remembers everything you've told it",
    body: "Feed it your docs, past work, and data. Alyvon embeds it all as searchable org knowledge, so every specialist pulls the right context into every brief — the way a good hire remembers how you do things.",
  },
  {
    icon: Plug,
    title: "Works where your work already lives",
    body: "1,000+ integrations — Gmail, Slack, HubSpot, GitHub, your CRM — so specialists act inside the tools you already run, not a walled garden you have to export from.",
  },
  {
    icon: Blocks,
    title: "If the catalog doesn't fit, build your own",
    body: `${SPECIALISTS} specialists not quite right? Create a custom agent — its role, its tools, its voice — and put it to work beside the rest. No engineering, no waiting on a roadmap.`,
  },
  {
    icon: Sparkles,
    title: "The Improvement Engine comes back with ideas",
    body: "Alyvon watches your growth and surfaces ranked recommendations: fixes, proven plays, and experiments to A/B test. You approve what runs; it measures the result and reports back.",
  },
  {
    icon: CalendarClock,
    title: "Routines put the work on a schedule",
    body: "Brief once, receive forever. Put any department on a cadence — the Monday performance deck, the monthly content calendar, the quarterly churn read — delivered on time without re-briefing.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Alyvon Workforce?",
    a: `Alyvon Workforce is a team of AI departments — ${DEPTS} in total, ${SPECIALISTS} specialists across ${GROUPS} groups — that turn a plain-language brief into a finished file. A Chief of Staff routes each brief to the right Director and specialists, and the deliverable comes back to your Library.`,
  },
  {
    q: "What is an agentic workforce?",
    a: "An agentic workforce is a set of purpose-built agents, each scoped to one role with its own tools and skills, coordinated by a router. Unlike a single chatbot, each specialist is pre-trained for its job and a Director reviews the output before it reaches you.",
  },
  {
    q: "How is Alyvon different from ChatGPT?",
    a: "A chatbot hands you text you still have to finish, format, and check. Alyvon hands you a finished file a Director already reviewed, produced by specialists working inside your tools and your context — and anything that sends, publishes, or spends waits for your approval.",
  },
  {
    q: "How does Alyvon compare with hiring?",
    a: "The average role takes about 44 days to fill and roughly $4,700 to hire for, then a salary line whether the work is steady or not. Alyvon starts today: brief a department and the output comes back the same day, with no long-term commitment.",
  },
  {
    q: "Which departments are included?",
    a: `All ${DEPTS} departments are live in the product. Your plan sets how many you can select: Starter includes core routing plus 2 departments, Growth plus 7, and Scale and Enterprise include the full Workforce.`,
  },
  {
    q: "How does department selection work?",
    a: `On Starter and Growth you choose which departments to activate (2 and 7 respectively). Every seat on the plan can brief any activated department. Scale and Enterprise unlock all ${DEPTS}.`,
  },
  {
    q: "Why is Creative priced separately?",
    a: "Creative is a paid add-on on every plan because media generation and creative QA carry real incremental cost. It is priced as its own capacity line rather than folded into a base plan.",
  },
]

export default function WorkforcePillarPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: workforce"
        heading="The department you were about to hire, already routed."
        subhead="Describe the work once. Alyvon’s Chief of Staff routes it to the right Director and specialists, then finished files come back to your Library. No 44-day search. No salary line before the work proves itself."
        actions={
          <div className="flex flex-col gap-3">
            <TrackedCta
              href={CTA.workforce.href}
              className={cn(buttonVariants({ size: "lg" }))}
              event="trial_cta_clicked"
              eventProps={{ product: "workforce", placement: "workforce_hero" }}
            >
              {CTA.workforce.label}
            </TrackedCta>
            <p className="text-body-s text-text-secondary">{CTA.workforce.micro}</p>
          </div>
        }
      />

      <Section tone="surface" spacing="sm">
        <StatBar items={STATS} />
      </Section>

      {/* Role selector */}
      <Section tone="canvas">
        <RoleSelector items={ROLE_CHIPS} label="Jump to where you need capacity" />
      </Section>

      {/* Hiring-cost pain */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              The work is here now. A hire is six weeks away.
            </h2>
            <p className="text-body-l text-text-secondary">
              The average role takes about 44 days to fill and roughly $4,700 to hire for — then
              it&apos;s a salary line whether the work is steady or seasonal (SHRM, 2025 Benchmarking
              Report). Alyvon skips the hire: brief a department today, and the output comes back today.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/homepage/pain-44-days-vs-today.jpg"
              alt="44 days average time to fill a role versus a same-day start with Alyvon"
              aspect="16:9"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>44 days to fill a role, on average. Alyvon starts today.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* Artifact proof strip */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              You get a finished file, not a transcript.
            </h2>
            <p className="text-body-l text-text-secondary">
              Every brief comes back as a real, ready-to-use artifact — a document, spreadsheet,
              deck, code, or a zipped project — reviewed by the Director and passed through a quality
              and security gate before it lands in your Library.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/finished-file-still-life.webp"
              alt="Finished deliverables as objects — a document, deck, spreadsheet, zip, and pull request, each tagged with its file type"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Illustrative.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* Six group cards */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Six groups. Sixteen departments.</h2>
            <p className="text-body-l text-text-secondary">
              Departments are organized into six groups so you can brief the outcome, not an org
              chart. Every group is live today.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORKFORCE_GROUPS.map((g) => (
              <Card key={g.slug} className="flex flex-col justify-between gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-body-l font-semibold text-text-primary">{g.label}</h3>
                    <span className="font-mono text-label uppercase text-text-tertiary">
                      {g.specialists} specialists
                    </span>
                  </div>
                  <p className="text-body text-text-secondary">{g.tagline}</p>
                  {g.addOn ? (
                    <span className="font-mono text-label uppercase text-accent-strong">
                      Paid add-on
                    </span>
                  ) : null}
                </div>
                <Link
                  href={g.href}
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-fit")}
                >
                  Explore {g.label}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Differentiators — what a tool can't copy */}
      <Section tone="canvas">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[720px] flex-col gap-4">
            <span className="font-mono text-label uppercase text-accent-strong">
              What a tool can&apos;t copy
            </span>
            <h2 className="text-display-m text-text-primary">
              It works like it already knows your business.
            </h2>
            <p className="text-body-l text-text-secondary">
              Most AI tools start from zero every session. Alyvon starts from you — your brand, your
              knowledge, your tools — and gets better at your business over time.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d) => {
              const Icon = d.icon
              return (
                <Card key={d.title} className="flex flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-card bg-accent-wash text-accent-strong">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-body-l font-medium text-text-primary">{d.title}</h3>
                    <p className="text-body text-text-secondary">{d.body}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* How Alyvon routes work */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/homepage/credibility-org-chart.jpg"
              alt="An org chart: a Director over a bench of specialists, each scoped to one kind of output"
              aspect="1:1"
              containerClassName="mx-auto max-w-[440px]"
              sizes="(min-width: 1024px) 440px, 100vw"
            />
            <IllustrativeCaption>A Director over every specialist. No unreviewed deliverable.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">How Alyvon routes work</h2>
            <ol className="flex flex-col gap-3 text-body-l text-text-primary">
              <li><strong>Brief in.</strong> Describe the work in plain language.</li>
              <li><strong>Chief of Staff routes.</strong> It picks the right Director and specialists across departments.</li>
              <li><strong>File out.</strong> A finished, Director-reviewed deliverable lands in your Library.</li>
              <li><strong>You approve.</strong> Anything that sends, publishes, or spends waits for you.</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Full department directory */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">The full department directory</h2>
          <div className="overflow-x-auto">
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Department</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Group</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Produces</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {ALL_DEPARTMENTS.map((d) => (
                  <DataTable.Row key={d.anchor}>
                    <DataTable.Cell>
                      <Link
                        href={`${d.groupHref}#${d.anchor}`}
                        className="font-medium text-text-primary underline-offset-4 hover:underline"
                      >
                        {d.name}
                      </Link>
                    </DataTable.Cell>
                    <DataTable.Cell className="text-text-secondary">{d.group}</DataTable.Cell>
                    <DataTable.Cell className="text-text-secondary">{d.produces}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>
          </div>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing built around departments</h2>
          <p className="text-body-l text-text-secondary">
            Starter includes core routing plus 2 selected departments; Growth plus 7; Scale and
            Enterprise include the full Workforce. Creative carries separate add-on pricing.
          </p>
          <div>
            <Link href="/workforce/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See Workforce pricing
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <Faq items={FAQ_ITEMS} />
      </Section>

      <CtaBand
        heading="Direct your first department this week."
        subhead={CTA.workforce.micro}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "workforce_final_cta" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={[{ name: "Home", path: "/" }, { name: "Workforce", path: "/workforce" }]} />
      </Section>

      <JsonLd
        data={[
          softwareApplicationSchema({
            name: "Alyvon Workforce",
            description:
              `${DEPTS} AI departments and ${SPECIALISTS} specialists across ${GROUPS} groups that turn a plain-language brief into a finished file.`,
            url: "/workforce",
          }),
          itemListSchema({
            name: "Alyvon Workforce departments",
            items: ALL_DEPARTMENTS.map((d) => ({ name: d.name, path: `${d.groupHref}#${d.anchor}` })),
          }),
          faqSchema(FAQ_ITEMS),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Workforce", path: "/workforce" }]),
        ]}
      />

      <MobileCtaBar placement="workforce_index_sticky" />
    </>
  )
}
