// ErrorPanel: two variants sharing the error-ink / error-bg token pair.
// - InlineErrorPanel: compact, sits inside a form/card — small icon + message.
// - PageErrorPanel: route-level error state — larger type, optional retry action slot.
// Naming: the brief describes "two ErrorPanel variants," but a module can't export two
// components under the identical name, so they're exported as InlineErrorPanel and
// PageErrorPanel (see docs/unit-1-notes.md).
// Token note: opacity modifiers (e.g. error-ink/20) are intentionally avoided since we
// can't confirm the color tokens are wired with an alpha-channel-friendly CSS variable
// format — solid border-error-ink is used instead to stay within "Tailwind classes only,
// no new hex values."
import * as React from "react"
import { AlertCircle, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InlineErrorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string
}

const InlineErrorPanel = React.forwardRef<HTMLDivElement, InlineErrorPanelProps>(
  ({ className, message, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "flex items-start gap-2 rounded-card border border-error-ink bg-error-bg px-3 py-2 text-body-s text-error-ink",
        className
      )}
      {...props}
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
)
InlineErrorPanel.displayName = "InlineErrorPanel"

export interface PageErrorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  message?: string
  /** Optional retry/back action slot, e.g. a <Button onClick={retry}>. */
  action?: React.ReactNode
}

const PageErrorPanel = React.forwardRef<HTMLDivElement, PageErrorPanelProps>(
  ({ className, title, message, action, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "mx-auto flex w-full max-w-content flex-col items-center gap-3 rounded-card border border-error-ink bg-error-bg px-6 py-12 text-center sm:py-16",
        className
      )}
      {...props}
    >
      <AlertTriangle className="h-8 w-8 text-error-ink" strokeWidth={1.5} aria-hidden="true" />
      <h2 className="text-display-m text-error-ink">{title}</h2>
      {message ? <p className="max-w-md text-body-s text-error-ink">{message}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
)
PageErrorPanel.displayName = "PageErrorPanel"

export { InlineErrorPanel, PageErrorPanel }
