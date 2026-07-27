import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/marketing/container"

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Small uppercase mono label above the heading, e.g. "PRICING" or a department name. */
  eyebrow?: string
  heading: React.ReactNode
  /** Supporting paragraph under the heading. */
  subhead?: React.ReactNode
  /** Button(s)/link(s) row -- pass already-styled Links using buttonVariants. */
  actions?: React.ReactNode
  /** Optional visual (image, illustration, product shot) rendered beside/below the copy on wider screens. */
  visual?: React.ReactNode
  align?: "left" | "center"
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ className, eyebrow, heading, subhead, actions, visual, align = "left", ...props }, ref) => (
    <section ref={ref} className={cn("bg-canvas py-16 sm:py-24", className)} {...props}>
      <Container>
        <div
          className={cn(
            "hero-entrance flex flex-col gap-6",
            align === "center" ? "items-center text-center" : "items-start text-left",
            visual ? "lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:text-left" : undefined
          )}
        >
          <div className={cn("flex max-w-[640px] flex-col gap-6", align === "center" && !visual ? "items-center" : "items-start")}>
            {eyebrow ? (
              <span className="font-mono text-label uppercase text-accent-strong">{eyebrow}</span>
            ) : null}
            <h1 className="text-display-l text-text-primary sm:text-display-xl">{heading}</h1>
            {subhead ? <p className="text-body-l text-text-secondary">{subhead}</p> : null}
            {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
          </div>
          {visual ? <div className="w-full max-w-[520px]">{visual}</div> : null}
        </div>
      </Container>
    </section>
  )
)
Hero.displayName = "Hero"

export { Hero }
