import * as React from "react"
import { cn } from "@/lib/utils"
import { Container, type ContainerProps } from "@/components/marketing/container"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background surface for the full-bleed section. Defaults to "canvas" (transparent/page background). */
  tone?: "canvas" | "surface" | "inverse"
  /** Vertical padding. "lg" for standalone page sections, "sm" for tightly stacked content. */
  spacing?: "sm" | "lg"
  containerWidth?: ContainerProps["width"]
  /** Set false to render children directly without the inner Container (e.g. a section that already contains its own grid). */
  container?: boolean
}

const TONE_CLASSES: Record<NonNullable<SectionProps["tone"]>, string> = {
  canvas: "bg-canvas text-text-primary",
  surface: "bg-surface text-text-primary",
  inverse: "bg-inverse text-text-on-inverse",
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, tone = "canvas", spacing = "lg", containerWidth = "content", container = true, children, ...props },
    ref
  ) => (
    <section
      ref={ref}
      className={cn(TONE_CLASSES[tone], spacing === "lg" ? "py-16 sm:py-24" : "py-8 sm:py-12", className)}
      {...props}
    >
      {container ? <Container width={containerWidth}>{children}</Container> : children}
    </section>
  )
)
Section.displayName = "Section"

export { Section }
