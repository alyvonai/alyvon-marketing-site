import Link from "next/link"
import { buildMetadata } from "@/lib/metadata"
import { Hero } from "@/components/marketing/hero"
import { Section } from "@/components/marketing/section"
import { CtaBand } from "@/components/marketing/cta-band"
import { buttonVariants } from "@/components/ui/button"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { DataTable } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Copy pulled verbatim from Content & Editorial's "Alyvon Homepage Copy — Rewrite"
// (Library deliverable d7f55e06-dcb8-42b5-813c-82dfc7341bbb). Scope: "/" only.
// Imagery from Creative, six section-tagged illustrations wired in via MediaFrame.

export const metadata = buildMetadata({
  title: "Direct a team. Not a tool.",
  description:
    "Alyvon gives you 117 specialists across 16 departments, each led by a Director who turns a plain-language brief into a finished, ready-to-use file. No prompting. No assembly. You direct the work — the work ships.",
  path: "/",
})

const TRIAL_URL = "https://app.alyvon.com"

const TEXT_LINK_CLASSES =
  "text-body font-medium text-accent-strong underline underline-offset-4 hover:text-accent-strong/80"

const PRODUCT_LINES: { name: string; produces: string }[] = [
  {
    name: "Content & Editorial",
    produces: "Briefs, articles, page copy, email sequences, and edited final drafts.",
  },
  {
    name: "Research & Insights",
    produces: "Market scans, competitor audits, and customer and data research.",
  },
  {
    name: "Brand",
    produces: "Identity systems, voice and copy rules, campaign concepts, and design tokens.",
  },
  {
    name: "Sales Development",
    produces: "Prospect research, outbound sequences, and call and meeting prep.",
  },
  {
    name: "Marketing Operations",
    produces: "Campaign builds, funnel copy, CRM and automation work, and reporting.",
  },
  {
    name: "Marketing Hub",
    produces: "A CRM, automations, and an AI Employee running day-to-day marketing operations.",
  },
]

const PRICING_TABLE: { plan: string; price: string; included: string }[] = [
  {
    plan: "Starter",
    price: "$299/mo",
    included: "40 deliverables/month, 3 departments, 2 seats",
  },
  {
    plan: "Growth",
    price: "$899/mo",
    included: "150 deliverables/month, 8 departments, 8 seats",
  },
  {
    plan: "Scale",
    price: "$2,400/mo",
    included: "400 deliverables/month, all 16 departments, 25 seats",
  },
]

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        eyebrow="AI workforce platform"
        heading="Direct a team. Not a tool."
        subhead="Alyvon gives you 117 specialists across 16 departments, each led by a Director who turns a plain-language brief into a finished, ready-to-use file. No prompting. No assembly. You direct the work — the work ships."
        actions={
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                Start your 14-day free trial
              </a>
              <a href="#how-it-works" className={TEXT_LINK_CLASSES}>
                See how it works
              </a>
            </div>
            <p className="text-body-s text-text-secondary">
              No credit card required. Cancel anytime. No contracts.
            </p>
          </div>
        }
        visual={
          <div className="flex w-full flex-col gap-3">
            <MediaFrame
              src="/images/homepage/hero-brief-director-file.jpg"
              alt="A plain-language brief moving through a Director to a finished, ready-to-use file"
              aspect="16:9"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Brief in. Director routes. File out. No chat UI, no assembly.</IllustrativeCaption>
          </div>
        }
      />

      {/* 2. Problem / Pain */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-display-m text-text-primary">
              Hiring is slow and it&apos;s getting more expensive.
            </h2>
            <p className="text-body-l text-text-secondary">
              Average cost-per-hire in the U.S. is now roughly $4,700–$4,800, up from $4,129 in
              2019 — and the average open role takes about 44 days to fill (SHRM, 2025
              Benchmarking Report). That&apos;s six weeks without the work getting done, then a
              new salary line whether the work is steady or seasonal.
            </p>
            <p className="text-body-l text-text-primary">
              Alyvon skips the hire: you get the department&apos;s output starting today, not in
              six weeks.
            </p>
            <div>
              <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                Skip the hire — start free
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/homepage/pain-44-days-vs-today.jpg"
              alt="The 44-day average hiring cycle compared against Alyvon's same-day start"
              aspect="16:9"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>44 days to fill a role, on average. Alyvon starts today.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* 3. How It Works */}
      <Section tone="canvas" id="how-it-works">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-2">
            <MediaFrame
              src="/images/homepage/how-it-works-3-step.jpg"
              alt="Three-step diagram: brief in, Director routes, file out"
              aspect="16:9"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Brief in. Director routes. File out.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-6 lg:order-1">
            <h2 className="text-display-m text-text-primary">Brief in. Director routes. File out.</h2>
            <ol className="flex flex-col gap-5 text-body-l">
              <li>
                <strong className="text-text-primary">Brief in</strong> &mdash; Tell a Director
                what you need, in plain language. No prompt engineering, no back-and-forth with a
                chatbot.
              </li>
              <li>
                <strong className="text-text-primary">Director routes</strong> &mdash; The
                Director assigns it to the right specialist and owns it end to end, not a ticket
                in a queue.
              </li>
              <li>
                <strong className="text-text-primary">File out</strong> &mdash; You get a
                finished, ready-to-use deliverable, not a draft that still needs assembly.
              </li>
            </ol>
            <div>
              <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                Send your first brief
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Product Lines */}
      <Section tone="surface">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="flex max-w-[560px] flex-col gap-4">
              <h2 className="text-display-m text-text-primary">Six product lines. One way of working.</h2>
            </div>
            <div className="flex flex-col gap-3">
              <MediaFrame
                src="/images/homepage/product-lines-six-icon-grid.jpg"
                alt="Six product line icons: Content & Editorial, Research & Insights, Brand, Sales Development, Marketing Operations, Marketing Hub"
                aspect="4:3"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <IllustrativeCaption>Every product line, one system of work.</IllustrativeCaption>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_LINES.map((line) => (
              <Card key={line.name} className="bg-surface">
                <CardHeader>
                  <CardTitle className="text-body-l">{line.name}</CardTitle>
                  <CardDescription>{line.produces}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div>
            <Link href="/workforce" className={buttonVariants({ variant: "secondary", size: "md" })}>
              Explore departments
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. Credibility (operating model) */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-display-m text-text-primary">
              The credibility is in how it&apos;s built, not who else uses it.
            </h2>
            <p className="text-body-l text-text-secondary">
              Every specialist works under a Director, briefed, reviewed, and accountable for the
              file that goes out. Alyvon connects to 1K+ MCP integrations, so specialists work
              inside the tools you already run. Every deliverable passes a quality and security
              gate before it reaches you.
            </p>
            <div>
              <Link href="/workforce" className={buttonVariants({ variant: "primary", size: "lg" })}>
                See the operating model
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/homepage/credibility-org-chart.jpg"
              alt="An org chart showing a Director over a team of specialists"
              aspect="1:1"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <IllustrativeCaption>A Director over every specialist. No unreviewed deliverable.</IllustrativeCaption>
          </div>
        </div>
      </Section>

      {/* 6. Pricing Overview */}
      <Section tone="surface">
        <div className="flex flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="flex max-w-[560px] flex-col gap-4">
              <h2 className="text-display-m text-text-primary">Three plans. No contracts. Cancel anytime.</h2>
            </div>
            <div className="flex flex-col gap-3">
              <MediaFrame
                src="/images/homepage/pricing-tiers.jpg"
                alt="Three-column pricing table showing Starter, Growth, and Scale plans"
                aspect="4:3"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <IllustrativeCaption>Starter, Growth, and Scale — Scale unlocks every department.</IllustrativeCaption>
            </div>
          </div>

          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                <DataTable.HeaderCell>Price</DataTable.HeaderCell>
                <DataTable.HeaderCell>What&apos;s included</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {PRICING_TABLE.map((row) => (
                <DataTable.Row key={row.plan}>
                  <DataTable.Cell
                    className={cn(
                      "font-medium text-text-primary",
                      row.plan === "Scale" && "text-accent-strong"
                    )}
                  >
                    {row.plan}
                  </DataTable.Cell>
                  <DataTable.Cell>{row.price}</DataTable.Cell>
                  <DataTable.Cell>{row.included}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>

          <p className="max-w-[720px] text-body-l text-text-primary">
            Every plan starts with a 14-day free trial. No credit card, no contract, cancel
            anytime. Need more department access or bring-your-own API key? That&apos;s what
            Scale and Enterprise are for.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
              Start free — no card required
            </a>
            <Link href="/pricing" className={TEXT_LINK_CLASSES}>
              See full pricing details
            </Link>
          </div>
        </div>
      </Section>

      {/* 7. Final CTA */}
      <CtaBand
        heading="Direct a team. Not a tool."
        subhead="117 specialists. 16 departments. Every brief comes back a finished file. Start free for 14 days — no card, no contract."
        actions={
          <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
            Start your free trial
          </a>
        }
      />
    </>
  )
}
