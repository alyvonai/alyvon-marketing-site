import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable e0adc23e-9115-4d27-ab08-b1cd1896e9b2
// (Ticket 0h, final version -- use this one, not the earlier cc857c3b... draft).
// Vertical-neutral per docs/tickets-2-21-manifest.md.

export const metadata = buildMetadata({
  title: "Analytics - Alyvon",
  description:
    "Alyvon Analytics: data engineering, data analysis, data science, and applied AI, built into one consulting practice.",
  path: "/analytics",
})

const PARTS = [
  {
    title: "Data engineering",
    body: "Building and maintaining the pipelines that move and clean your data.",
  },
  {
    title: "Data analysis",
    body: "Turning raw numbers into reporting you can read and act on.",
  },
  {
    title: "Data science",
    body: "Modeling and forecasting built on top of clean data.",
  },
  {
    title: "Artificial intelligence",
    body: "Applying custom AI to a specific business problem, once the data underneath it is solid.",
  },
]

export default function AnalyticsPillarPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: analytics"
        heading="Turn your data into a system you can act on."
        subhead="Analytics covers the full path from raw data to a working model: engineering the pipeline, analyzing the numbers, building the science, and applying AI where it earns its place."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">The four parts</h2>
          <p className="max-w-[720px] text-body-l text-text-secondary">
            These four parts are sequential in practice: a model is only as good as the
            pipeline feeding it, and a pipeline is only worth building if the analysis behind
            it is sound.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PARTS.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <CardTitle className="text-body-l">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-text-secondary">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Detail page</h2>
          <p className="text-body-l text-text-secondary">
            Custom AI is documented in depth on its own page, covering what &ldquo;custom&rdquo;
            means in practice and where it fits once the first three parts are in place.
          </p>
          <Link
            href="/analytics/custom-ai"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-fit")}
          >
            See custom AI
          </Link>
        </div>
      </Section>

      <CtaBand
        heading="Start with the data you already have."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
