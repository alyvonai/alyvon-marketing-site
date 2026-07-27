// Spinner: uses Tailwind's animate-spin (a continuous loading indicator, not one of
// the enter/exit motion tokens — duration-micro/panel/page apply to transitions, not
// indefinite spinners). prefers-reduced-motion is handled globally in app/globals.css.
import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: "sm" | "md" | "lg"
  /** Screen-reader-only accessible label (the spinner itself is aria-hidden). */
  label?: string
}

const sizeMap: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = "md", label = "Loading", ...props }, ref) => (
    <span role="status" className="inline-flex items-center justify-center">
      <svg
        ref={ref}
        className={cn("animate-spin text-accent", sizeMap[size], className)}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        {...props}
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} />
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  )
)
Spinner.displayName = "Spinner"

export { Spinner }
