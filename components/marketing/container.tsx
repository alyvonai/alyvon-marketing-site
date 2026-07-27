// Shared marketing-page primitives (Ticket 2-21 shared convention). Every
// content page (Tickets 2-21) should compose its layout from Container /
// Section / Hero / CtaBand rather than hand-rolling max-width and padding
// per page, so the 18 pages stay structurally consistent even though they're
// built across separate, parallel dispatch units.
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "content" (1120px) is the default reading width; "content-lg" (1200px) is for wider layouts like nav/footer/data tables. */
  width?: "content" | "content-lg"
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, width = "content", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mx-auto w-full px-6", width === "content" ? "max-w-content" : "max-w-content-lg", className)}
      {...props}
    />
  )
)
Container.displayName = "Container"

export { Container }
