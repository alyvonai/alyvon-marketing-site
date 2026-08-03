import Link from "next/link"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { WORKFORCE_PLANS } from "@/lib/pricing"
import { breadcrumbSchema } from "@/lib/jsonld"

const [STARTER, GROWTH, SCALE] = WORKFORCE_PLANS

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Alyvon pricing lives inside each product line. Workforce is a self-serve plan, Marketing Hub is scoped on a walkthrough, and Analytics engagements are scoped after a discovery call.",
  path: "/pricing",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
]

const CARDS = [
  {
    name: "Workforce pricing",
    href: "/workforce/pricing",
    copy: `Self-serve plans priced around deliverables and departments. Starter ${STARTER.priceMonthly}, Growth ${GROWTH.priceMonthly}, Scale ${SCALE.priceMonthly}, or Enterprise. Start with a 14-day free trial.`,
    cta: "See Workforce pricing",
  },
  {
    name: "Marketing Hub pricing",
    href: "/marketing-hub/pricing",
    copy: "Scoped to your CRM setup, automation volume, AI Employee scope, and integrations. Book a walkthrough and we’ll scope it with you.",
    cta: "See Marketing Hub pricing",
  },
  {
    name: "Analytics engagements",
    href: "/analytics/pricing",
    copy: "Custom build engagements scoped after a discovery call, because data access, deployment, and workflow risk change the build.",
    cta: "See engagement details",
  },
]

export default function PricingRouterPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        heading="Pricing lives inside each product line."
        subhead="Each product is priced for how it’s bought — Workforce self-serves a trial, Marketing Hub and Analytics are scoped with you. Pick a product to see its pricing."
      />

      <Section tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <Card key={c.name} className="flex flex-col justify-between gap-6 p-6">
              <div className="flex flex-col gap-2">
                <CardTitle className="text-body-l">{c.name}</CardTitle>
                <CardDescription>{c.copy}</CardDescription>
              </div>
              <Link href={c.href} className={cn(buttonVariants({ variant: "secondary", size: "md" }), "w-fit")}>
                {c.cta}
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="canvas" spacing="sm">
        <Breadcrumbs crumbs={crumbs} />
      </Section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  )
}
