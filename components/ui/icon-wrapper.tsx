// IconWrapper: enforces the 24px icon box (h-6 w-6) and a fixed 1.5 stroke width across
// every lucide-react icon, per the "line-only icons, 1.5px stroke" rule. Accepts an Icon
// component reference (not a rendered element) so props like strokeWidth can be forced
// consistently and type-checked, rather than relying on React.cloneElement against an
// unknown element shape.
import * as React from "react"
import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface IconWrapperProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "aria-label"> {
  icon: LucideIcon
  /**
   * Required, not optional: IconWrapper exists for icon-only controls where the icon
   * IS the accessible content — there's no adjacent visible text to fall back on. If
   * this were optional, it would be trivially easy to ship an icon button with no
   * accessible name. If the icon is purely decorative (sitting beside text that
   * already labels the control), render the lucide icon directly instead of via
   * IconWrapper.
   */
  "aria-label": string
}

const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  ({ className, icon: Icon, "aria-label": ariaLabel, ...props }, ref) => (
    <span
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className={cn("inline-flex h-6 w-6 shrink-0 items-center justify-center text-text-primary", className)}
      {...props}
    >
      <Icon className="h-full w-full" strokeWidth={1.5} aria-hidden="true" />
    </span>
  )
)
IconWrapper.displayName = "IconWrapper"

export { IconWrapper }
