import { buildMetadata } from "@/lib/metadata"
import { Hero } from "@/components/marketing/hero"
import { Section } from "@/components/marketing/section"
import { CtaBand } from "@/components/marketing/cta-band"
import { buttonVariants } from "@/components/ui/button"
import { DataTable } from "@/components/ui/typography"

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Four plans built around deliverables, not seats. Starter at $299 a month, Growth at $899, Scale at $2,400, or a negotiated Enterprise plan. Start with a 14-day free trial.",
  path: "/pricing",
})

const TRIAL_URL = "https://app.alyvon.com"

const PLANS: {
  plan: string
  price: string
  deliverables: string
  departments: string
  seats: string
  overage: string
}[] = [
  {
    plan: "Starter",
    price: "$299",
    deliverables: "40",
    departments: "3 departments",
    seats: "2 seats",
    overage: "$9 per additional deliverable",
  },
  {
    plan: "Growth",
    price: "$899",
    deliverables: "150",
    departments: "8 departments",
    seats: "8 seats",
    overage: "$7 per additional deliverable",
  },
  {
    plan: "Scale",
    price: "$2,400",
    deliverables: "400",
    departments: "All 16 departments",
    seats: "25 seats",
    overage: "$5 per additional deliverable",
  },
  {
    plan: "Enterprise",
    price: "$5,000+, talk to us",
    deliverables: "Committed volume, set with you",
    departments: "All 16 departments",
    seats: "Unlimited seats",
    overage: "Negotiated",
  },
]

const OVERAGE_RATES: { plan: string; rate: string }[] = [
  { plan: "Starter", rate: "$9 per deliverable" },
  { plan: "Growth", rate: "$7 per deliverable" },
  { plan: "Scale", rate: "$5 per deliverable" },
  { plan: "Enterprise", rate: "Negotiated as part of your committed volume" },
]

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What counts as a deliverable?",
    answer:
      "One completed brief. If you ask a Director for a piece of work and their department delivers a finished file against that brief, that is one deliverable, regardless of how many specialists or files it took to produce it, and regardless of how many departments were involved.",
  },
  {
    question: "Can I mix departments on a plan?",
    answer:
      "Yes. Every department included on your plan is available to every seat on your plan, with no per-department add-on charge. Starter includes 3 departments, Growth includes 8, and Scale and Enterprise include all 16.",
  },
  {
    question: "What happens if I go over my deliverable allowance?",
    answer:
      "Additional deliverables are billed at your plan's overage rate, shown above. Your team is never blocked from working while you decide whether to upgrade.",
  },
  {
    question: "Do you require a contract?",
    answer: "No. Every plan, including the free trial, can be cancelled at any time.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes. Paying annually gives you two months free compared to paying monthly, on every plan.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        heading="Pricing built around finished work, not headcount."
        subhead="Every plan includes multiple departments, a monthly deliverable allowance, and the same finished-file standard. Pick the volume that matches your team."
        actions={
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
                Start your free trial
              </a>
            </div>
            <p className="text-body-s text-text-secondary">
              14 days or 10 deliverables, whichever comes first. No credit card required.
            </p>
            <p className="font-mono text-label uppercase text-text-secondary">
              Monthly or annual. Annual billing gives you two months free on any plan.
            </p>
          </div>
        }
      />

      <Section tone="surface" containerWidth="content-lg">
        <div className="flex flex-col gap-6">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                <DataTable.HeaderCell>Price / month</DataTable.HeaderCell>
                <DataTable.HeaderCell>Deliverables / month</DataTable.HeaderCell>
                <DataTable.HeaderCell>Departments included</DataTable.HeaderCell>
                <DataTable.HeaderCell>Seats</DataTable.HeaderCell>
                <DataTable.HeaderCell>Overage</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {PLANS.map((row) => (
                <DataTable.Row key={row.plan}>
                  <DataTable.Cell className="font-medium text-text-primary">{row.plan}</DataTable.Cell>
                  <DataTable.Cell>{row.price}</DataTable.Cell>
                  <DataTable.Cell>{row.deliverables}</DataTable.Cell>
                  <DataTable.Cell>{row.departments}</DataTable.Cell>
                  <DataTable.Cell>{row.seats}</DataTable.Cell>
                  <DataTable.Cell>{row.overage}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>

          <p className="max-w-[720px] text-body-s text-text-secondary">
            Annual billing: pay for 10 months, get 12. The two free months apply to every plan,
            including Enterprise.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <div className="flex max-w-[720px] flex-col gap-3">
            <h2 className="text-display-m text-text-primary">Overage detail</h2>
            <p className="text-body-l text-text-secondary">
              If you use every deliverable in your monthly allowance, additional work is billed per
              deliverable at your plan&apos;s overage rate. There is no cap and no approval delay:
              work keeps shipping, and the extra deliverables show up as a line item on your next
              invoice.
            </p>
          </div>

          <DataTable className="max-w-[560px]">
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                <DataTable.HeaderCell>Overage rate</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {OVERAGE_RATES.map((row) => (
                <DataTable.Row key={row.plan}>
                  <DataTable.Cell className="font-medium text-text-primary">{row.plan}</DataTable.Cell>
                  <DataTable.Cell>{row.rate}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>
        </div>
      </Section>

      <CtaBand
        heading="Try it before you commit."
        subhead="Every plan starts with a 14-day free trial or 10 completed deliverables, whichever comes first. No credit card required to start. Cancel anytime, with no contract."
        actions={
          <a href={TRIAL_URL} className={buttonVariants({ variant: "primary", size: "lg" })}>
            Start your free trial
          </a>
        }
      />

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <h2 className="text-display-m text-text-primary">FAQ</h2>
          <div className="flex max-w-[760px] flex-col gap-8">
            {FAQS.map((item) => (
              <div key={item.question} className="flex flex-col gap-2">
                <h3 className="text-display-m text-text-primary">{item.question}</h3>
                <p className="text-body-l text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
