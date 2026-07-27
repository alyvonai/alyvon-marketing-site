import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Motion: color/border transitions only (150ms, ease-out), no scale transforms
// on hover per Ticket 0c Section 8. Focus state uses border-focus + 2px offset
// ring, never color alone, per Section 4's cross-component focus rule.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-card text-body font-medium transition-colors duration-micro ease-out-standard disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-text-disabled focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-accent text-text-on-accent hover:bg-accent-strong",
        secondary:
          "border border-border-input bg-canvas text-text-primary hover:bg-surface",
        ghost: "text-accent-strong hover:bg-accent-wash",
        destructive: "bg-error-ink text-text-on-accent hover:opacity-90",
      },
      size: {
        sm: "h-9 px-3 text-body-s",
        md: "h-11 px-5",
        lg: "h-13 px-6 text-body-l",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
