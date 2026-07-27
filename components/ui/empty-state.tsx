// EmptyState: zero-data placeholder for lists/tables/dashboards.
// Token rule: caption uses text-secondary (NOT text-tertiary) because captions here
// render at text-body-s, below the 18px-normal / 14px-bold threshold that text-tertiary
// requires for contrast. Icon color also uses text-secondary for the same conservative
// reason (the contrast rule is written for text, but decorative icon color follows the
// same token so we don't create a second de-facto exception).
// Layout: max-w-content + fluid px/py so this renders cleanly from 360px to 2560px
// without a fixed pixel width.
import * as React from "react"
import { cn } from "@/lib/utils"

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon element — typically a lucide-react icon, optionally via IconWrapper. */
  icon?: React.ReactNode
  /** Primary headline, rendered at text-display-m. */
  title: string
  /** Optional supporting copy, rendered at text-body-s / text-secondary. */
  caption?: string
  /** Optional action slot, e.g. a <Button>. */
  action?: React.ReactNode
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, caption, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          "mx-auto flex w-full max-w-content flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:py-24",
          className
        )}
        {...props}
      >
        {icon ? (
          <div className="flex h-12 w-12 items-center justify-center text-text-secondary">
            {icon}
          </div>
        ) : null}
        <h3 className="text-display-m text-text-primary">{title}</h3>
        {caption ? (
          <p className="max-w-md text-body-s text-text-secondary">{caption}</p>
        ) : null}
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
