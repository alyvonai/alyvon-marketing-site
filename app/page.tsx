import Link from "next/link"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { MediaFrame } from "@/components/ui/media-frame"
import { IllustrativeCaption } from "@/components/ui/illustrative-caption"
import { StatBar } from "@/components/marketing/stat-bar"
import { JsonLd } from "@/components/marketing/json-ld"
import { TrackedCta } from "@/components/marketing/tracked-cta"
import { BookingCta } from "@/components/marketing/booking-cta"
import { CTA, WORKFORCE_STATS } from "@/lib/site"
import { organizationSchema, websiteSchema } from "@/lib/jsonld"

const { departments: DEPTS, specialists: SPECIALISTS, groups: GROUPS } = WORKFORCE_STATS

export const metadata = buildMetadata({
  title: "Direct a team. Not a tool.",
  description: `Alyvon routes plain-language work to AI departments, marketing systems, and custom analytics builds that produce usable business outputs. ${DEPTS} departments, ${SPECIALISTS} specialists, one workforce.`,
  path: "/",
})

// Product line cards — Workforce self-serves a trial, Marketing Hub and Analytics are
// sales-assisted (walkthrough / scoping call). Never imply Analytics is a free trial.
const PRODUCT_LINES = [
  {
    name: "Workforce",
    href: "/workforce",
    produces: `${DEPTS} departments and ${SPECIALISTS} specialists across ${GROUPS} groups, each led by a Director who turns a plain-language brief into a finished, ready-to-use file.`,
    cta: "trial" as const,
  },
  {
    name: "Marketing Hub",
    href: "/marketing-hub",
    produces:
      "A CRM, follow-up automations, and an AI Employee that runs day-to-day marketing operations and every conversation with a lead or client.",
    cta: "walkthrough" as const,
  },
  {
    name: "Analytics",
    href: "/analytics",
    produces:
      "Data engineering and analysis, plus applied AI development and deployment built on top of the pipeline once it's solid — deployed in your own environment.",
    cta: "scoping" as const,
  },
]

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="AI workforce platform"
        heading="Direct a team. Not a tool."
        subhead="Alyvon gives you AI departments, marketing systems, and custom analytics builds — each turning a plain-language brief into a finished, ready-to-use file. No prompting. No assembly. You direct the work; the work ships."
        actions={
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <TrackedCta
                href={CTA.workforce.href}
                className={cn(buttonVariants({ size: "lg" }))}
                event="trial_cta_clicked"
                eventProps={{ product: "workforce", placement: "home_hero" }}
              >
                {CTA.workforce.label}
              </TrackedCta>
              <Link href="#how-it-works" className="text-body font-medium text-accent-strong underline underline-offset-4">
                See how it works
              </Link>
            </div>
            <p className="text-body-s text-text-secondary">No credit card required. Cancel anytime. No contracts.</p>
          </div>
        }
        visual={
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/homepage/hero-brief-director-file.jpg"
              alt="A plain-language brief routed through a Director, returning a document, deck, and spreadsheet"
              aspect="16:9"
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <IllustrativeCaption>Brief in. Director routes. Finished files out.</IllustrativeCaption>
          </div>
        }
      />

      <Section tone="surface" spacing="sm">
        <StatBar items={[`${DEPTS} departments`, `${SPECIALISTS} specialists`, `${GROUPS} groups`, "finished files, not transcripts"]} />
      </Section>

      {/* Hiring / capacity pain */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Hiring is slow, and it’s getting more expensive.</h2>
            <p className="text-body-l text-text-secondary">
              Average cost-per-hire in the U.S. is now roughly $4,700–$4,800, up from $4,129 in 2019 —
              and the average open role takes about 44 days to fill (SHRM, 2025 Benchmarking Report).
              That’s six weeks without the work getting done, then a new salary line whether the work is
              steady or seasonal.
            </p>
            <p className="text-body-l text-text-primary">
              Alyvon skips the hire: you get the department’s output starting today, not in six weeks.
            </p>
            <div>
              <TrackedCta
                href={CTA.workforce.href}
                className={cn(buttonVariants({ size: "lg" }))}
                event="trial_cta_clicked"
                eventProps={{ product: "workforce", placement: "home_pain" }}
              >
                Skip the hire — start free
              </TrackedCta>
            </div>
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

      {/* How Alyvon works */}
      <Section tone="surface" id="how-it-works">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/workforce/board-run.webp"
              alt="The Alyvon board: Alyvon, the Chief of Staff, routes one brief to the right Directors working in parallel"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">Brief in. Alyvon routes. File out.</h2>
            <ol className="flex flex-col gap-4 text-body-l text-text-primary">
              <li>
                <strong>Brief in</strong> — Tell Alyvon what you need, in plain language. No prompt
                engineering, no back-and-forth with a chatbot.
              </li>
              <li>
                <strong>Alyvon routes</strong> — Alyvon, your Chief of Staff, sends the brief to the
                right Director — across departments when the work spans more than one.
              </li>
              <li>
                <strong>The Director assigns and reviews</strong> — a Director assigns the right
                specialist and checks the work before it reaches you, so nothing lands unreviewed.
              </li>
              <li>
                <strong>File out</strong> — you get a finished, ready-to-use deliverable. Anything that
                sends, publishes, or spends still waits for your go-ahead.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Three product lines */}
      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">Three product lines. One way of working.</h2>
            <p className="text-body-l text-text-secondary">
              Workforce produces finished files, Marketing Hub runs your conversations, and Analytics
              builds custom data systems. Start where you need capacity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRODUCT_LINES.map((line) => (
              <Card key={line.name} className="flex flex-col justify-between gap-6 bg-canvas p-6">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-body-l">{line.name}</CardTitle>
                  <CardDescription>{line.produces}</CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  {line.cta === "trial" ? (
                    <TrackedCta
                      href={CTA.workforce.href}
                      className={cn(buttonVariants({ variant: "primary", size: "md" }))}
                      event="trial_cta_clicked"
                      eventProps={{ product: "workforce", placement: "home_product_card" }}
                    >
                      Start free trial
                    </TrackedCta>
                  ) : line.cta === "walkthrough" ? (
                    <BookingCta
                      href={CTA.marketingHub.href}
                      label="Book a walkthrough"
                      product="marketing_hub"
                      placement="home_product_card"
                      className={cn(buttonVariants({ variant: "secondary", size: "md" }))}
                    />
                  ) : (
                    <BookingCta
                      href={CTA.analytics.href}
                      label="Book a scoping call"
                      product="analytics"
                      placement="home_product_card"
                      className={cn(buttonVariants({ variant: "secondary", size: "md" }))}
                    />
                  )}
                  <Link href={line.href} className="text-body-s font-medium text-accent-strong underline underline-offset-4">
                    Explore {line.name}
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Proof from internal artifacts */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-display-m text-text-primary">We run Alyvon on Alyvon.</h2>
            <p className="text-body-l text-text-secondary">
              Alyvon uses its own Workforce to produce marketing assets, landing-page code, social
              creative, outbound drafts, and product visuals. Internal telemetry shows recurring
              creative and social work can run at model/runtime costs measured in dollars per week.
            </p>
            <p className="text-body text-text-tertiary">Public examples use illustrative data.</p>
          </div>
          <div className="flex flex-col gap-3">
            <MediaFrame
              src="/images/workforce/library-files.webp"
              alt="The Alyvon Library: finished files produced by Alyvon’s own Workforce"
              aspect="4:3"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </Section>

      {/* Security / control */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/workforce/approvals-mobile.webp"
              alt="The Alyvon approvals inbox: send, publish, and spend actions each waiting for approval"
              aspect="4:5"
              containerClassName="mx-auto max-w-[300px]"
              sizes="(min-width: 1024px) 300px, 60vw"
            />
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">
              The credibility is in how it’s built, not who else uses it.
            </h2>
            <p className="text-body-l text-text-secondary">
              Every specialist works under a Director — briefed, reviewed, and accountable for the
              file that goes out. Alyvon connects to 1,000+ integrations, so specialists work inside
              the tools you already run, and every deliverable passes a quality and security gate.
              Anything that sends, publishes, or spends waits for your approval — from your desk or
              your phone.
            </p>
            <div>
              <Link href="/security" className={cn(buttonVariants({ variant: "secondary", size: "md" }))}>
                See how it’s secured
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Direct a team. Not a tool."
        subhead={`${DEPTS} departments, ${SPECIALISTS} specialists. Every brief comes back a finished file. Start free for 14 days — no card, no contract.`}
        actions={
          <TrackedCta
            href={CTA.workforce.href}
            className={cn(buttonVariants({ size: "lg" }))}
            event="trial_cta_clicked"
            eventProps={{ product: "workforce", placement: "home_final_cta" }}
          >
            {CTA.workforce.label}
          </TrackedCta>
        }
      />

      <JsonLd data={[organizationSchema(), websiteSchema()]} />
    </>
  )
}
