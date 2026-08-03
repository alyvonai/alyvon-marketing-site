import { Suspense } from "react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { ThankYouClient } from "@/components/marketing/thank-you-client"

// Shared confirmation page for every source (calendar, form, other). Noindexed — it's a
// post-conversion destination, not an entry point, so it's kept out of the sitemap too.
export const metadata = {
  ...buildMetadata({
    title: "Thank you",
    description: "Thanks — we’ve received your request.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <Section tone="canvas" className="min-h-[60vh]">
      <Suspense fallback={null}>
        <ThankYouClient />
      </Suspense>
    </Section>
  )
}
