// 404 page. Same dark grid treatment as the rest of the site, with routes back into it.
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/marketing/container"
import { Eyebrow } from "@/components/home/ui"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <section className="bg-grid-dark flex min-h-[70vh] items-center bg-inverse text-text-on-inverse [color-scheme:dark]">
      <Container className="flex flex-col items-start gap-6 py-20">
        <Eyebrow tone="dark">404</Eyebrow>
        <h1 className="text-balance text-[40px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[60px]">
          This page doesn’t exist.
        </h1>
        <p className="max-w-[560px] text-body-l text-white/80">
          It may have moved, or it was never built. Start again from the homepage, or read what agencies are working
          on in Insights.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-[52px] rounded-full px-8")}>
            Back to home <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/insights"
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-8 text-body-l font-medium text-white transition-colors duration-micro ease-out-standard hover:border-white/60 hover:bg-white/5"
          >
            Read Insights
          </Link>
        </div>
      </Container>
    </section>
  )
}
