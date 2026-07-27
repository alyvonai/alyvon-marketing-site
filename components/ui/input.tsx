import * as React from "react"
import { cn } from "@/lib/utils"

// Minimal placeholder covering only the Default state. The full six-state
// set (default, focus, filled, error, disabled, success) from Ticket 0c
// Section 4 is built out in components/ui/form-field.tsx by the design-system
// build unit -- see docs/section-manifest.md, Unit 1.
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-card border border-border-input bg-canvas px-3 text-body text-text-primary placeholder:text-text-tertiary",
          "focus-visible:outline-none focus-visible:border-2 focus-visible:border-border-focus",
          "disabled:cursor-not-allowed disabled:border-border-subtle disabled:bg-disabled disabled:text-text-disabled",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
