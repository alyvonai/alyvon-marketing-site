import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { List } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable 21aa1393-4494-42ec-b221-c01ada1bfcea
// (Ticket 0j, only version -- mined from the real service.alyvon.com audit).

export const metadata = buildMetadata({
  title: "Custom AI - Alyvon Analytics",
  description:
    "Custom AI applies a model to one specific business problem, built once the data pipeline and analysis underneath it are solid.",
  path: "/analytics/custom-ai",
})

const BRIEF_FOR = [
  "A specific prediction or classification problem tied to a metric you already track.",
  "A model that runs on your existing pipeline rather than a separate, disconnected tool.",
  "A defined, testable use case, not an open-ended 'add AI to this' request.",
]

export default function CustomAiPage() {
  return (
    <>
      <Hero
        eyebrow="Analytics / Custom AI"
        heading="A model built for one problem, not a generic one bought off the shelf."
        subhead="Custom AI is the fourth part of the analytics practice: applying a model to a specific, defined business problem, once the data engineering and analysis underneath it are already solid."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Where it sits in the practice</h2>
          <p className="text-body-l text-text-secondary">
            Custom AI is the last of the four, deliberately. A model applied to bad data or an
            unclear question produces a confident wrong answer. This department builds the
            pipeline and the analysis first, so the model that follows is worth trusting.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <h2 className="text-display-m text-text-primary">What you can brief this for</h2>
          <List className="max-w-[720px]">
            {BRIEF_FOR.map((item) => (
              <li key={item} className="text-body-l text-text-secondary">
                {item}
              </li>
            ))}
          </List>
        </div>
      </Section>

      <CtaBand
        heading="Start with the problem, not the model."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
