import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { BookingEmbed } from "@/components/marketing/booking-embed"
import { BOOKING_CALENDAR_URL } from "@/lib/site"

// On-site booking page. One generic calendar serves every motion; the ?product/?source/
// ?plan params tag the placement and carry through to the /thank-you conversion event.
// Noindexed and kept out of the sitemap (utility page, not an entry point).
export const metadata = {
  ...buildMetadata({
    title: "Book a call - Alyvon",
    description: "Book time with the Alyvon team.",
    path: "/book",
  }),
  robots: { index: false, follow: false },
}

const HEADINGS: Record<string, { title: string; sub: string }> = {
  marketing_hub: {
    title: "Book a Marketing Hub walkthrough",
    sub: "See the CRM, automations, and AI Employee working together, and we’ll scope setup with you.",
  },
  analytics: {
    title: "Book an Analytics scoping call",
    sub: "Bring the data problem or workflow you want solved — we’ll map an engagement that fits.",
  },
  workforce: {
    title: "Talk to Alyvon",
    sub: "Tell us what you’re trying to get done and we’ll show you the fastest path — and whether Alyvon fits.",
  },
  default: {
    title: "Talk to Alyvon",
    sub: "Tell us what you’re trying to get done and we’ll show you the fastest path — and whether Alyvon fits.",
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
    <Section tone="canvas">
      <div className="flex flex-col gap-8">
        <div className="flex max-w-[680px] flex-col gap-3">
          <span className="font-mono text-label uppercase text-accent-strong">Book a call</span>
          <h1 className="text-display-l text-text-primary">{heading.title}</h1>
          <p className="text-body-l text-text-secondary">{heading.sub}</p>
        </div>
        <div className="overflow-hidden rounded-card border border-border-subtle bg-canvas p-2 sm:p-4">
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
  )
}
