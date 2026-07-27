import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"

// Copy pulled verbatim from Library deliverable 8d4b0d0b-d24b-4e6b-a8f9-e55ea2b7fc34
// (Ticket 0i, final -- "every department is on every plan" framing). Vertical-neutral
// per docs/tickets-2-21-manifest.md: this department page does not invent an industry
// focus beyond what the source copy states.

export const metadata = buildMetadata({
  title: "Research and Insights - Alyvon",
  description:
    "Research and Insights: Owns every number the company reports on itself, so no other department publishes a stat it hasn't checked.",
  path: "/workforce/research",
})

const SPECIALISTS = [
  { name: "Rhea", line: "BI Engineer: dbt, the semantic layer, and dashboards that stay current" },
  { name: "Quinlan", line: "Data Analyst: ad-hoc analysis, writes the SQL, returns the answer" },
  { name: "Ulysses", line: "Product Analyst: feature adoption, retention curves, north-star tracking" },
  { name: "Wynn", line: "Data Engineer: pipelines and warehouse hygiene" },
  { name: "Saul", line: "Data Scientist: statistical modeling, experimentation, segmentation" },
  { name: "Vesper", line: "Customer Insights Analyst: voice of customer, survey design, churn-driver analysis" },
  { name: "Tova", line: "Marketing Analyst: channel attribution, funnel analysis, cohort measurement" },
]

const USE_CASES = [
  {
    title: "A number that's repeated but never pulled",
    brief: "Pull trial-to-paid conversion by tier for the last two quarters and tell me if it's actually down.",
    artifact: "A short analysis as a docx with the real numbers and a one-line verdict.",
  },
  {
    title: "A site rebuild that needs a factual floor",
    brief: "Crawl both web properties and tell me exactly what's live, what's true, and what has to be discarded.",
    artifact: "A content and source audit as a docx.",
  },
  {
    title: "A vertical budget decision with no data behind it",
    brief: "Break down trial signups and paid conversion by vertical for the last 90 days.",
    artifact: "A cohort breakdown as an xlsx with a comparison chart.",
  },
  {
    title: "A churn reason nobody has patterned",
    brief: "Pull every logged churn reason this quarter and tell me what's actually driving it.",
    artifact: "A churn-driver summary as a docx.",
  },
]

const PAIRS_WITH = [
  {
    department: "Content and Editorial",
    copy:
      "Research supplies the verified facts and discard register Content writes from, so no page ships an unchecked claim.",
  },
  {
    department: "Sales Development",
    copy:
      "Research supplies churn and usage patterns Sales Development uses to prioritize which accounts to re-engage.",
  },
  {
    department: "Marketing Operations",
    copy:
      "Research's cohort and attribution data feeds directly into Marketing Operations' channel and budget decisions.",
  },
]

export default function ResearchDepartmentPage() {
  return (
    <>
      <Hero
        eyebrow="Department"
        heading="Research and Insights"
        subhead="Owns every number the company reports on itself, so no other department publishes a stat it hasn't checked."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Who runs it</h2>
          <p className="text-body-l text-text-secondary">
            Pemberton, Analytics Director, is the single authority for company metrics end to
            end, from a single ad-hoc SQL answer to a full customer-voice study.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Specialists</h2>
          <List className="max-w-[720px]">
            {SPECIALISTS.map((s) => (
              <li key={s.name}>
                <strong className="text-text-primary">{s.name}</strong>, {s.line}
              </li>
            ))}
          </List>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">
            What you can brief this department to do
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {USE_CASES.map((uc) => (
              <Card key={uc.title}>
                <CardHeader>
                  <CardTitle className="text-body-l">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div>
                    <span className="font-mono text-label uppercase text-accent-strong">
                      Brief
                    </span>
                    <p className="mt-1 text-body text-text-primary">{uc.brief}</p>
                  </div>
                  <div>
                    <span className="font-mono text-label uppercase text-accent-strong">
                      Artifact
                    </span>
                    <p className="mt-1 text-body text-text-secondary">{uc.artifact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">Pricing</h2>
          <p className="text-body-l text-text-primary">
            Research and Insights is one of eight departments included in Growth at $899 a month.
          </p>
          <p className="text-body text-text-secondary">
            There is no per-department add-on fee. Once a department is included in your plan,
            every seat on that plan can brief it directly, the same as any other included
            department.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">Pairs with</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAIRS_WITH.map((p) => (
              <Card key={p.department}>
                <CardHeader>
                  <CardTitle className="text-body-l">{p.department}</CardTitle>
                  <CardDescription>{p.copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="max-w-[720px] text-body text-text-secondary">
            Pairing departments costs nothing extra beyond your plan. Starter already includes
            three departments working together at no added charge; upgrading unlocks more
            departments for every seat, not one department at a time.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Brief Research and Insights this week."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
