import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/marketing/container"

export interface CtaBandProps extends React.HTMLAttributes<HTMLElement> {
  heading: React.ReactNode
  subhead?: React.ReactNode
  /** Button(s)/link(s) -- pass already-styled Links using buttonVariants. */
  actions: React.ReactNode
  tone?: "inverse" | "surface"
}

// Full-bleed closing band used near the bottom of most content pages
// (Tickets 2-21) to repeat the page's primary call to action. Defaults to
// the inverse (dark) surface for visual separation from the page body above.
const CtaBand = React.forwardRef<HTMLElement, CtaBandProps>(
  ({ className, heading, subhead, actions, tone = "inverse", ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "py-16 sm:py-20",
        tone === "inverse" ? "bg-inverse text-text-on-inverse" : "bg-surface text-text-primary",
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-display-m text-inherit sm:text-display-l">{heading}</h2>
          {subhead ? (
            <p className={cn("max-w-[560px] text-body-l", tone === "inverse" ? "text-text-on-inverse/80" : "text-text-secondary")}>
              {subhead}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-center gap-3">{actions}</div>
        </div>
      </Container>
    </section>
  )
)
CtaBand.displayName = "CtaBand"

export { CtaBand }
