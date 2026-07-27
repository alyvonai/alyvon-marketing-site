import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { OrderedList, DataTable } from "@/components/ui/typography"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { cn } from "@/lib/utils"
import { buildMetadata } from "@/lib/metadata"
import { DEPARTMENTS } from "@/lib/nav-data"

// Copy pulled verbatim from Library deliverable e0adc23e-9115-4d27-ab08-b1cd1896e9b2
// (Ticket 0h, final). Per docs/tickets-2-21-manifest.md, /workforce is the combined
// pillar + department-index page: there is no separate /workforce/departments route.
// Vertical-neutral: the shared pain across every visitor is capacity, not any one
// industry's problem.

export const metadata = buildMetadata({
  title: "Workforce - Alyvon",
  description:
    "Alyvon Workforce: 117 specialists across 16 departments, each led by a Director who turns a brief into a finished file. See the departments and how directing a team works.",
  path: "/workforce",
})

// Director/output copy matches the source table exactly. Research, Sales
// Development, and Marketing Operations are sourced as "See department page"
// in the confirmed copy rather than a named Director on this pillar page.
const DEPARTMENT_TABLE = [
  {
    name: "Content and Editorial",
    href: DEPARTMENTS.find((d) => d.label === "Content")?.href ?? "/workforce/content",
    director: "Cyrus",
    produces: "Briefs, page copy, articles, email sequences, edited final drafts",
  },
  {
    name: "Research and Insights",
    href: DEPARTMENTS.find((d) => d.label === "Research")?.href ?? "/workforce/research",
    director: "See department page",
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
    director: "See department page",
    produces: "Prospect research, outbound sequences, meeting prep",
  },
  {
    name: "Marketing Operations",
    href:
      DEPARTMENTS.find((d) => d.label === "Marketing Operations")?.href ??
      "/workforce/marketing-ops",
    director: "See department page",
    produces: "Campaign builds, funnel copy, CRM and automation work",
  },
]

const HOW_IT_WORKS = [
  "Brief a Director in plain language.",
  "The Director routes the brief to the right specialist inside their department.",
  "You receive a finished file back, a document, spreadsheet, deck, code, or archive.",
  "Anything that sends, publishes, or spends waits for your approval first.",
]

export default function WorkforcePillarPage() {
  return (
    <>
      <Hero
        eyebrow="Product line: workforce"
        heading="One workforce. Sixteen departments. One hundred and seventeen specialists."
        subhead="Every department is led by a Director. Brief the Director the way you'd brief a hire, and their specialists deliver a finished file back to you."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">What a department is</h2>
          <p className="text-body-l text-text-secondary">
            A department is not a single AI answering questions. It is a Director plus a bench of
            specialists, each scoped to one kind of output. The Director reads your brief, decides
            which specialist or specialists should handle it, and reviews what comes back before
            it reaches you. You get one point of contact and one finished deliverable, no matter
            how many specialists it took.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 className="text-display-m text-text-primary">
              Departments live today, documented in depth
            </h2>
            <p className="text-body-l text-text-secondary">
              Five departments have full pages on this site because they cover the work most
              agencies, SaaS teams, and professional service firms need first.
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

      <Section tone="surface">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-display-m text-text-primary">The other eleven departments</h2>
          <p className="text-body-l text-text-secondary">
            Alyvon runs 16 departments in total. The other 11 are live in the product now. We
            build a dedicated page for a department once there is enough demand to justify one,
            the same bar this site holds every page to. Until then, you can see and use them from
            the departments index.
          </p>
          <Link
            href="/login"
            className="font-mono text-label uppercase text-accent-strong underline-offset-4 hover:underline"
          >
            See all 16 departments
          </Link>
        </div>
      </Section>

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

      <CtaBand
        heading="Direct your first department this week."
        subhead="14 days or 10 deliverables, whichever comes first. No credit card."
        actions={
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
