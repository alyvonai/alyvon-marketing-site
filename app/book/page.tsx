import Link from "next/link"
import { Check } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { PageHero } from "@/components/marketing/page-hero"
import { BookingEmbed } from "@/components/marketing/booking-embed"
import { BOOKING_CALENDAR_URL } from "@/lib/site"
import { FOUNDING } from "@/lib/pricing"

// On-site booking page. One generic calendar serves every motion; the ?product/?source/
// ?plan params tag the placement and carry through to the /thank-you conversion event.
// Noindexed and kept out of the sitemap (utility page, not an entry point).
export const metadata = {
  ...buildMetadata({
    title: "Book a demo",
    description: "Book a demo of Alyvon with the founding team.",
    path: "/book",
  }),
  robots: { index: false, follow: false },
}

// Heading per ?product. marketing_hub and analytics stay so links from the other brand's
// site can still book through this calendar.
const HEADINGS: Record<string, { eyebrow: string; title: string; sub: string; expect: string[] }> = {
  marketing_hub: {
    eyebrow: "Marketing Hub",
    title: "Book a Marketing Hub walkthrough.",
    sub: "See the CRM, automations and AI Employee working together, and we’ll scope setup with you.",
    expect: ["A walkthrough of the CRM, automations and AI Employee", "Your follow-up process mapped to the system", "A setup plan and what it would take"],
  },
  analytics: {
    eyebrow: "Analytics",
    title: "Book an Analytics scoping call.",
    sub: "Bring the data problem or workflow you want solved, and we’ll map an engagement that fits.",
    expect: ["The data problem or workflow, in your words", "What your data can support today", "An engagement shape and next steps"],
  },
  default: {
    eyebrow: "Book a demo",
    title: "See Alyvon on a real client project.",
    sub: "Bring a project you’re scoping or about to scope. We’ll show you the stakeholder interviews, the data readiness check and the scope that comes out, and tell you plainly whether Alyvon fits.",
    expect: [
      "Bring one client project you’re scoping, or about to",
      "See stakeholder interviews, the data readiness check and the scope they produce",
      "Leave knowing whether Alyvon fits, and whether a founding spot makes sense",
    ],
  },
}

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const str = (v: string | string[] | undefined) => (typeof v === "string" ? v : undefined)
  const product = str(sp.product) ?? "default"
  const source = str(sp.source) ?? "book_page"
  const plan = str(sp.plan)
  const heading = HEADINGS[product] ?? HEADINGS.default
  const calendarId = BOOKING_CALENDAR_URL.split("/").pop() ?? "alyvon-booking"

  return (
    <>
      <PageHero eyebrow={heading.eyebrow} title={heading.title} subhead={heading.sub} />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-bold tracking-[-0.02em]">What to expect</h2>
              <ul className="flex flex-col gap-3">
                {heading.expect.map((e) => (
                  <li key={e} className="flex gap-3 text-body-l text-text-primary">
                    <Check className="mt-1.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            {heading === HEADINGS.default ? (
              <p className="rounded-[14px] border border-border-subtle bg-canvas p-5 text-body-s text-text-secondary">
                Already sure? Skip the call and{" "}
                <Link href="/founding-partners#apply" className="font-medium text-accent-strong underline underline-offset-4">
                  apply for a founding spot
                </Link>
                . {FOUNDING.cohortSize} agencies, first {FOUNDING.freeDays} days free, no lock-in contract.
              </p>
            ) : null}
          </div>
          <div className="overflow-hidden rounded-[16px] border border-border-subtle bg-canvas p-2 shadow-sm sm:p-4">
            <BookingEmbed
              calendarUrl={BOOKING_CALENDAR_URL}
              calendarId={calendarId}
              product={product}
              source={source}
              plan={plan}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
