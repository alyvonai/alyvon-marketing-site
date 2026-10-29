import { Suspense } from "react"
import { buildMetadata } from "@/lib/metadata"
import { Container } from "@/components/marketing/container"
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
    <section className="bg-grid-dark flex min-h-[70vh] items-center bg-inverse text-text-on-inverse [color-scheme:dark]">
      <Container className="py-20">
        <Suspense
          fallback={
            <h1 className="text-[40px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[60px]">Thanks, we’ve got it.</h1>
          }
        >
          <ThankYouClient />
        </Suspense>
      </Container>
    </section>
  )
}
