import Link from "next/link"
import { buildMetadata } from "@/lib/metadata"
import { Hero } from "@/components/marketing/hero"
import { Section } from "@/components/marketing/section"
import { CtaBand } from "@/components/marketing/cta-band"
import { buttonVariants } from "@/components/ui/button"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Icon, type IconName } from "@/components/icons"

// Copy pulled verbatim from Content & Editorial's "Alyvon Homepage Copy — Rewrite"
// (Library deliverable d7f55e06-dcb8-42b5-813c-82dfc7341bbb). Scope: "/" only.
// Imagery from Creative, section-tagged illustrations wired in via MediaFrame, except
// the Product Lines section, which renders the three product-line nav icons directly
// (no static image) so it can never drift from the real /workforce, /marketing-hub,
// /analytics product lines.

export const metadata = buildMetadata({
  title: "Direct a team. Not a tool.",
  description:
    "Alyvon gives you 117 specialists across 16 departments, each led by a Director who turns a plain-language brief into a finished, ready-to-use file. No prompting. No assembly. You direct the work — the work ships.",
  path: "/",
})

const TRIAL_URL = "https://app.alyvon.com"

const TEXT_LINK_CLASSES =
  "text-body font-medium text-accent-strong underline underline-offset-4 hover:text-accent-strong/80"

const PRODUCT_LINES: { name: string; produces: string; href: string; icon: IconName; cta: string }[] = [
  {
    name: "Workforce",
    produces:
      "117 specialists across 16 departments, each led by a Director who turns a plain-language brief into a finished, ready-to-use file.",
    href: "/workforce",
    icon: "nav-workforce",
    cta: "Explore Workforce",
  },
  {
    name: "Marketing Hub",
    produces:
      "A CRM, follow-up automations, and an AI Employee that runs day-to-day marketing operations and every conversation with a lead or client.",
    href: "/marketing-hub",
    icon: "nav-marketing-hub",
    cta: "Explore Marketing Hub",
  },
  {
    name: "Analytics",
    produces:
      "Data engineering and analysis, plus agentic AI development and deployment built on top of the data pipeline once it's solid.",
    href: "/analytics",
    icon: "nav-analytics",
    cta: "Explore Analytics",
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
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/homepage/how-it-works-flow.jpg"
              alt="Flow diagram: Alyvon routes one brief to Creative and Content in parallel, both feed into Engineering, which returns a finished website and app"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>One brief, routed across departments, comes back a finished file.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-6 lg:order-2">
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
              <h2 className="text-display-m text-text-primary">Three product lines. One way of working.</h2>
              <p className="text-body-l text-text-secondary">
                Workforce, Marketing Hub, and Analytics each run on the same Director-led model: brief
                in, Director routes, finished file out.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-card border border-border-subtle bg-canvas p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4">
                  {PRODUCT_LINES.map((line) => (
                    <div
                      key={line.name}
                      className="flex flex-col items-center justify-center gap-3 rounded-card border border-border-subtle bg-surface p-6 text-center"
                    >
                      <Icon name={line.icon} className="h-10 w-10 text-accent-strong" aria-hidden="true" />
                      <span className="text-body-s font-medium uppercase tracking-wide text-text-primary">
                        {line.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <IllustrativeCaption>Workforce, Marketing Hub, and Analytics &mdash; one system of work.</IllustrativeCaption>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {PRODUCT_LINES.map((line) => (
              <Card key={line.name} className="flex flex-col justify-between bg-surface">
                <CardHeader>
                  <CardTitle className="text-body-l">{line.name}</CardTitle>
                  <CardDescription>{line.produces}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={line.href} className={buttonVariants({ variant: "secondary", size: "md" })}>
                    {line.cta}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Credibility (operating model) */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/homepage/credibility-org-chart.jpg"
              alt="An org chart showing a Director over a team of specialists"
              aspect="1:1"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
            <IllustrativeCaption>A Director over every specialist. No unreviewed deliverable.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-5 lg:order-2">
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
        </div>
      </Section>

      {/* 6. Final CTA */}
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
