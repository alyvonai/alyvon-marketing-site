import Link from "next/link"
import {
  Palette,
  Database,
  Plug,
  Blocks,
  Sparkles,
  CalendarClock,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { OrderedList, DataTable } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { DEPARTMENTS } from "@/lib/nav-data"

// /workforce is the combined pillar + department-index page. Copy was rewritten to
// lead with the differentiators competitors can't copy (org context, org knowledge,
// integrations, custom agents, the Improvement Engine, and Routines) and to carry the
// three device-framed product shots (board, Library, mobile Approvals). Trial CTA points
// straight to app signup; every primary button and its microcopy is standardized.

const TRIAL_URL = "https://app.alyvon.com/signup"

export const metadata = buildMetadata({
  title: "Workforce - Alyvon",
  description:
    "Alyvon Workforce: 16 departments and 117 specialists, each led by a Director who turns a brief into a finished file. It works from your brand, your org knowledge, and your tools — and gets better at your business over time.",
  path: "/workforce",
})

const DEPARTMENT_TABLE = [
  {
    name: "Content and Editorial",
    href: DEPARTMENTS.find((d) => d.label === "Content")?.href ?? "/workforce/content",
    director: "Cyrus",
    produces: "Briefs, page copy, articles, email sequences, edited final drafts",
  },
  {
    name: "Engineering",
    href: DEPARTMENTS.find((d) => d.label === "Engineering")?.href ?? "/workforce/engineering",
    director: "Hugo",
    produces: "Real GitHub pull requests — landing pages, fixes, features, and full projects",
  },
  {
    name: "Research and Insights",
    href: DEPARTMENTS.find((d) => d.label === "Research")?.href ?? "/workforce/research",
    director: "Pemberton",
    produces: "Market scans, competitor audits, source audits",
  },
  {
    name: "Brand",
    href: DEPARTMENTS.find((d) => d.label === "Brand")?.href ?? "/workforce/brand",
    director: "Avery",
    produces: "Identity systems, voice and copy rules, campaign concepts",
  },
  {
    name: "Sales Development",
    href:
      DEPARTMENTS.find((d) => d.label === "Sales Development")?.href ??
      "/workforce/sales-development",
    director: "Casey",
    produces: "Prospect research, outbound sequences, meeting prep",
  },
  {
    name: "Marketing Operations",
    href:
      DEPARTMENTS.find((d) => d.label === "Marketing Operations")?.href ??
      "/workforce/marketing-ops",
    director: "Tobias",
    produces: "Campaign builds, funnel copy, CRM and automation work",
  },
]

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
    body: "117 specialists not quite right? Create a custom agent — its role, its tools, its voice — and put it to work beside the rest. No engineering, no waiting on a roadmap.",
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

const HOW_IT_WORKS = [
  "Brief a Director in plain language.",
  "The Director routes the brief to the right specialist inside their department.",
  "You receive a finished file back — a document, spreadsheet, deck, code, or archive.",
  "Anything that sends, publishes, or spends waits for your approval first.",
]

const OBJECTIONS = [
  {
    q: "How is this different from a chatbot?",
    a: "A chatbot hands you text you still have to finish, format, and fact-check. A department hands you a finished file a Director already reviewed — and it runs inside your tools, on your knowledge.",
  },
  {
    q: "What if it does something I didn't want?",
    a: "Nothing that sends, publishes, or spends money happens without your approval. You direct the work and you approve what ships — from your desk or your phone.",
  },
  {
    q: "Only some departments have pages?",
    a: "Six departments have full pages here. All 16 are live in the product today — brief any of them from day one.",
  },
]

function TrialActions() {
  return (
    <div className="flex flex-col gap-3">
      <a href={TRIAL_URL} className={cn(buttonVariants({ size: "lg" }))}>
        Start your 14-day free trial
      </a>
      <p className="text-body-s text-text-secondary">No credit card. Cancel anytime.</p>
    </div>
  )
}

export default function WorkforcePillarPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: workforce"
        heading="The department you were about to hire — already staffed."
        subhead="16 departments, 117 specialists, one Director each. Brief a Director in plain language and finished work ships back to you — starting today, not in six weeks."
        actions={<TrialActions />}
      />

      {/* Proof strip */}
      <Section tone="surface" spacing="sm">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {[
            "16 departments",
            "117 specialists",
            "Every file Director-reviewed",
            "1,000+ integrations",
          ].map((stat) => (
            <span key={stat} className="font-mono text-label uppercase text-text-secondary">
              {stat}
            </span>
          ))}
        </div>
      </Section>

      {/* Pain */}
      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">
            The work is here now. A hire is six weeks away.
          </h2>
          <p className="text-body-l text-text-secondary">
            The average role takes about 44 days to fill and roughly $4,700 to hire for — then it's
            a salary line whether the work is steady or seasonal (SHRM, 2025 Benchmarking Report).
            Meanwhile the launch email goes unwritten and the pricing page still shows last
            quarter's numbers. Alyvon skips the hire: brief a department today, and the output comes
            back today.
          </p>
          <div>
            <a href={TRIAL_URL} className={cn(buttonVariants({ size: "lg" }))}>
              Skip the hire — start free
            </a>
          </div>
        </div>
      </Section>

      {/* What a department is + board shot */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              A department is a team of specialists — not one generic chatbot.
            </h2>
            <p className="text-body-l text-text-secondary">
              Each Director and specialist is a purpose-built agent: pre-trained for one role and
              scoped with exactly the tools and skills that role needs, and nothing it doesn't. The
              Director reads your brief, routes it to the right specialist, and reviews what comes
              back before it reaches you. You get one point of contact and one finished deliverable,
              no matter how many specialists it took.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/board-run.webp"
              alt="The Alyvon board: Alyvon routes one brief to three Directors, each specialist working in parallel"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              A live team run — Alyvon routes one brief to three Directors. Data shown is
              illustrative.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* Finished file + Library shot */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/workforce/library-files.webp"
              alt="The Alyvon Library: real delivered files — documents, spreadsheets, decks, code, and projects"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              Every brief lands in your Library as a real file. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">
              You get a finished file, not a transcript.
            </h2>
            <p className="text-body-l text-text-secondary">
              Every brief comes back as a real, ready-to-use artifact — a document, spreadsheet,
              deck, code, or a zipped project — reviewed by the Director and passed through a quality
              and security gate before it reaches you. Not a wall of chat you still have to copy,
              format, and fact-check.
            </p>
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section tone="surface">
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

      {/* Control + mobile Approvals shot */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              You direct the work. You approve what ships.
            </h2>
            <p className="text-body-l text-text-secondary">
              Anything that sends, publishes, or spends money waits for your approval — from your
              desk or your phone. You&apos;re always the last word, and nothing reaches a customer or
              a budget without you.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-full max-w-[300px]">
              <MediaFrame
                src="/images/workforce/approvals-mobile.webp"
                alt="The Alyvon Approvals inbox on a phone: send, publish, and spend actions each waiting for approval"
                aspect="4:5"
                sizes="(min-width: 1024px) 300px, 60vw"
              />
            </div>
            <IllustrativeCaption>
              Approve or reject from your pocket. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* Departments table */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Six departments, documented in depth</h2>
            <p className="text-body-l text-text-secondary">
              These six cover the work most agencies, SaaS teams, and professional service firms need
              first. Each has a full page. All 16 departments are live in the product today.
            </p>
          </div>
          <div className="overflow-x-auto">
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Department</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Director leads</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Produces</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {DEPARTMENT_TABLE.map((row) => (
                  <DataTable.Row key={row.name}>
                    <DataTable.Cell>
                      <Link
                        href={row.href}
                        className="font-medium text-text-primary underline-offset-4 hover:underline"
                      >
                        {row.name}
                      </Link>
                    </DataTable.Cell>
                    <DataTable.Cell className="text-text-secondary">{row.director}</DataTable.Cell>
                    <DataTable.Cell className="text-text-secondary">{row.produces}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">How directing a team works</h2>
          <OrderedList className="max-w-[720px]">
            {HOW_IT_WORKS.map((step) => (
              <li key={step} className="text-body-l text-text-primary">
                {step}
              </li>
            ))}
          </OrderedList>
        </div>
      </Section>

      {/* Objections */}
      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Is this just ChatGPT with a nicer UI?</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {OBJECTIONS.map((o) => (
              <Card key={o.q}>
                <CardHeader>
                  <CardTitle className="text-body-l">{o.q}</CardTitle>
                  <CardDescription>{o.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* The other departments */}
      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">The other ten departments</h2>
          <p className="text-body-l text-text-secondary">
            Alyvon runs 16 departments in total. The other 10 are live in the product now. We build a
            dedicated page for a department once there is enough demand to justify one — the same bar
            this site holds every page to. Until then, you can see and use them from inside the app.
          </p>
          <a
            href={TRIAL_URL}
            className="font-mono text-label uppercase text-accent-strong underline-offset-4 hover:underline"
          >
            See all 16 departments
          </a>
        </div>
      </Section>

      {/* Strategy & Leadership group shot */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              Every department starts with a Director who sets the direction.
            </h2>
            <p className="text-body-l text-text-secondary">
              Before a specialist writes a word or opens a tool, a Director reads the brief, decides
              who on the team should take it, and sets the strategy the work has to match. That
              review happens on every department, every time — it&apos;s the layer that keeps 117
              specialists pointed at one plan instead of 117 different ones.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/groups/strategy-leadership.webp"
              alt="Directors and strategists reviewing a brief together before routing it to specialists"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              Product interface. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* Customer & People group shot */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/workforce/groups/customer-people.webp"
              alt="Specialists working on customer-facing and people-facing briefs across departments"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              Product interface. Data shown is illustrative.
            </IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">
              And departments that work directly with your customers and your team.
            </h2>
            <p className="text-body-l text-text-secondary">
              Not every department&apos;s work stays behind the scenes. Some briefs are customer-facing
              from the start — outbound, support replies, onboarding copy — and some are about the
              people running the business day to day. Every one of them still passes through the same
              Director review before it reaches you.
            </p>
          </div>
        </div>
      </Section>

      {/* Finished-file still life */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              This is what a brief turns into.
            </h2>
            <p className="text-body-l text-text-secondary">
              Not a chat transcript — a real, finished deliverable. Documents, spreadsheets, decks,
              and code, ready to open and use the moment a Director signs off on them.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/finished-file-still-life.webp"
              alt="A still life of finished deliverables Alyvon produces: documents, spreadsheets, and decks"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>
              A still life of the finished files a brief becomes.
            </IllustrativeCaption>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Direct your first department this week."
        subhead="14 days or 10 deliverables, whichever comes first. No credit card."
        actions={
          <a href={TRIAL_URL} className={cn(buttonVariants({ size: "lg" }))}>
            Start your 14-day free trial
          </a>
        }
      />
    </>
  )
}
