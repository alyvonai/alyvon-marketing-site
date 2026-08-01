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
import { CTA } from "@/lib/site"
import { organizationSchema, websiteSchema } from "@/lib/jsonld"

export const metadata = buildMetadata({
  title: "Direct a team. Not a tool.",
  description:
    "Alyvon routes plain-language work to AI departments, marketing systems, and custom analytics builds that produce usable business outputs. 16 departments, 102 specialists, one workforce.",
  path: "/",
})

// Product line cards — Workforce self-serves a trial, Marketing Hub and Analytics are
// sales-assisted (walkthrough / scoping call). Never imply Analytics is a free trial.
const PRODUCT_LINES = [
  {
    name: "Workforce",
    href: "/workforce",
    produces:
      "16 AI departments and 102 specialists across 6 groups. Brief a Director; a finished file comes back to your Library.",
    cta: "trial" as const,
  },
  {
    name: "Marketing Hub",
    href: "/marketing-hub",
    produces:
      "A CRM, automations, and an AI Employee that keep leads moving after the first form fill, missed call, or booked meeting.",
    cta: "walkthrough" as const,
  },
  {
    name: "Analytics",
    href: "/analytics",
    produces:
      "Custom data pipelines, reporting, and applied AI — scoped and deployed inside your own environment.",
    cta: "scoping" as const,
  },
]

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="AI workforce platform"
        heading="Direct a team. Not a tool."
        subhead="Alyvon routes plain-language work to AI departments, marketing systems, and custom analytics builds that produce usable business outputs."
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
            <p className="text-body-s text-text-secondary">{CTA.workforce.micro}</p>
          </div>
        }
      />

      <Section tone="surface" spacing="sm">
        <StatBar items={["16 departments", "102 specialists", "6 groups", "finished files, not transcripts"]} />
      </Section>

      {/* Hiring / capacity pain */}
      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Hiring is slow, and it’s getting more expensive.</h2>
          <p className="text-body-l text-text-secondary">
            The average role takes about 44 days to fill and roughly $4,700 to hire for — then it’s a
            salary line whether the work is steady or seasonal (SHRM, 2025 Benchmarking Report).
            Alyvon skips the hire: brief the work today and the output comes back today.
          </p>
        </div>
      </Section>

      {/* How Alyvon works */}
      <Section tone="surface" id="how-it-works">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-3 lg:order-1">
            <MediaFrame
              src="/images/workforce/board-run.webp"
              alt="The Alyvon board: a Chief of Staff routes one brief to multiple Directors working in parallel"
              aspect="4:3"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">Brief in. Alyvon routes. File out.</h2>
            <ol className="flex flex-col gap-3 text-body-l text-text-primary">
              <li><strong>Brief in.</strong> Describe the work in plain language.</li>
              <li><strong>Alyvon routes.</strong> A Chief of Staff picks the right Director and specialists.</li>
              <li><strong>File out.</strong> A finished, reviewed deliverable lands in your Library.</li>
              <li><strong>You approve.</strong> Anything that sends, publishes, or spends waits for you.</li>
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
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
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
            <IllustrativeCaption>Product UI. Illustrative data.</IllustrativeCaption>
          </div>
          <div className="flex flex-col gap-4 lg:order-2">
            <h2 className="text-display-m text-text-primary">You direct the work. You approve what ships.</h2>
            <p className="text-body-l text-text-secondary">
              Specialists work inside the tools you already run, every deliverable passes a quality
              and security gate, and anything that sends, publishes, or spends money waits for your
              approval — from your desk or your phone.
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
        subhead="16 departments, 102 specialists, one workforce. Start free for 14 days — no card, no contract."
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
