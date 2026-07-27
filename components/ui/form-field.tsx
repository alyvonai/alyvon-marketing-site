// FormField: composable wrapper around components/ui/input.tsx implementing the six
// states from Ticket 0c Section 4 -- default, focus, filled, error, disabled, success.
//
// State handling notes (see docs/unit-1-notes.md for the full write-up):
// - default / focus: focus is a native :focus-visible concern already wired on Input
//   (border-input -> 2px border-focus). This component does not re-implement focus
//   styling with JS state; it only needs to make sure focus ring classes survive
//   whatever error/success border override is active (see focusRingClass below).
// - filled: "filled" has no distinct visual treatment from "default" in Section 4 --
//   the only difference is that the field has a value. No separate prop or class exists
//   for it; this comment documents that omission is intentional, not an oversight.
// - error / success: mutually exclusive message states. error takes precedence if both
//   are somehow passed. Each swaps the border color token and renders an inline message
//   with role="alert" (error) or role="status" (success), plus a leading icon.
// - disabled: passed straight through to the underlying <input disabled>; Input already
//   carries the bg-disabled / text-disabled / border-subtle treatment for that state.
//
// Token usage: border-input, border-focus, error-ink, error-bg, success-ink, success-bg,
// bg-disabled, text-disabled exactly as wired in globals.css -- no literal hex values.
// text-tertiary is intentionally NOT used for the hint text below (hint renders at
// text-body-s, 14px normal weight, under the >=14px-bold/>=18px-normal contrast floor
// text-tertiary requires) -- text-secondary is used instead, per the usage restriction
// in docs/design-tokens-reference.md.
import * as React from "react"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "@/components/ui/input"

export interface FormFieldProps extends Omit<InputProps, "id"> {
  /** Field label, always rendered -- FormField exists to make labelling non-optional. */
  label: string
  /** Optional id override; auto-generated via useId() when omitted. */
  id?: string
  /** Supporting copy shown when there is no error/success message. */
  hint?: string
  /** Error message. When present, puts the field in the error state (highest precedence). */
  error?: string
  /** Success message. When present (and no error), puts the field in the success state. */
  success?: string
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, id, hint, error, success, disabled, required, ...props }, ref) => {
    const autoId = React.useId()
    const fieldId = id ?? autoId
    const hintId = `${fieldId}-hint`
    const errorId = `${fieldId}-error`
    const successId = `${fieldId}-success`

    const state: "error" | "success" | "default" = error ? "error" : success ? "success" : "default"

    const describedBy =
      state === "error" ? errorId : state === "success" ? successId : hint ? hintId : undefined

    return (
      <div className="flex w-full flex-col gap-1.5">
        <label
          htmlFor={fieldId}
          className="text-body-s font-medium text-text-primary"
        >
          {label}
          {required ? <span className="text-error-ink"> *</span> : null}
        </label>
        <Input
          ref={ref}
          id={fieldId}
          disabled={disabled}
          required={required}
          aria-invalid={state === "error"}
          aria-describedby={describedBy}
          className={cn(
            state === "error" && "border-error-ink focus-visible:border-error-ink",
            state === "success" && "border-success-ink focus-visible:border-success-ink",
            className
          )}
          {...props}
        />
        {state === "error" && error ? (
          <p id={errorId} role="alert" className="flex items-center gap-1.5 text-body-s text-error-ink">
            <AlertCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            {error}
          </p>
        ) : state === "success" && success ? (
          <p id={successId} role="status" className="flex items-center gap-1.5 text-body-s text-success-ink">
            <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            {success}
          </p>
        ) : hint ? (
          <p id={hintId} className="text-body-s text-text-secondary">
            {hint}
          </p>
        ) : null}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }
