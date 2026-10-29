"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { formSubmitted, formViewed } from "@/lib/analytics"
import { useFormStart } from "@/components/analytics/use-form-start"

// Founding partner application: two contact fields and five questions. Errors are shown
// inline and focus moves to the first one; the button only disables while sending.

type Errors = Partial<Record<"name" | "email" | "agency" | "builds" | "firstProject" | "lastStall" | "cadence", string>>

const inputCls =
  "w-full rounded-[10px] border bg-canvas px-4 text-body text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"

const QUESTIONS = [
  {
    name: "agency",
    label: "1. Agency name, website and team size",
    placeholder: "Northwind AI · northwind.ai · 8 people…",
    multiline: false,
  },
  {
    name: "builds",
    label: "2. What do you build for clients today, and for whom?",
    placeholder: "Support and intake agents for insurance agencies, lead qualification for B2B SaaS…",
    multiline: true,
  },
  {
    name: "firstProject",
    label: "3. Which client project would you run through Alyvon first?",
    placeholder: "A quote-intake pilot for a commercial insurance client: interviews next week, data in their AMS…",
    multiline: true,
  },
  {
    name: "lastStall",
    label: "4. Where did your last pilot stall? Be specific.",
    placeholder: "Discovery dragged for three weeks, then the data was PDFs and the scope had to be redone…",
    multiline: true,
  },
] as const

const CADENCE = [
  { value: "yes", label: "Yes" },
  { value: "monthly", label: "Monthly works better" },
  { value: "no", label: "No" },
]

export function ApplicationForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "done">("idle")
  const [errors, setErrors] = React.useState<Errors>({})
  const [formError, setFormError] = React.useState<string | null>(null)
  const startedAt = React.useRef(Date.now())
  const formRef = React.useRef<HTMLFormElement>(null)
  const onEmailInput = useFormStart("founding_application")

  React.useEffect(() => {
    startedAt.current = Date.now()
    formViewed({ form_name: "founding_application" })
  }, [])

  const focusFirstError = (errs: Errors) => {
    const first = Object.keys(errs)[0]
    if (!first) return
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)
    el?.focus()
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const errs: Errors = {}
    if (!data.name?.trim()) errs.name = "Enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email?.trim() ?? "")) errs.email = "Enter a valid work email, like name@agency.com."
    if (!data.agency?.trim()) errs.agency = "Tell us your agency name, website and team size."
    if (!data.builds?.trim()) errs.builds = "Tell us what you build for clients."
    if (!data.firstProject?.trim()) errs.firstProject = "Tell us which client project you would run first."
    if (!data.lastStall?.trim()) errs.lastStall = "Tell us where your last pilot stalled."
    if (!data.cadence) errs.cadence = "Choose one option."
    setErrors(errs)
    setFormError(null)
    if (Object.keys(errs).length) {
      focusFirstError(errs)
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/api/founding-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt.current }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (json.errors) {
          setErrors(json.errors)
          focusFirstError(json.errors)
        }
        throw new Error(json.error ?? "Something went wrong. Try again.")
      }
      setStatus("done")
      formSubmitted({ form_name: "founding_application", cadence: data.cadence })
    } catch (err) {
      setStatus("idle")
      setFormError(err instanceof Error ? err.message : "Something went wrong. Try again.")
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-[16px] border border-border-subtle bg-canvas p-7 shadow-sm sm:p-9">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-success-ink">Application received</p>
        <p className="text-[24px] font-semibold leading-snug text-text-primary">Thanks. We’ll reply within two business days.</p>
        <p className="text-body text-text-secondary">
          If it’s a fit, you’ll get a calendar link for a 20-minute fit call. If it isn’t, you’ll get a reason.
        </p>
      </div>
    )
  }

  const errId = (n: string) => `apply-${n}-error`
  const errorText = (n: keyof Errors) =>
    errors[n] ? (
      <p id={errId(n)} className="text-body-s text-error-ink">
        {errors[n]}
      </p>
    ) : null

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="relative flex flex-col gap-5 rounded-[16px] border border-border-subtle bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {(
          [
            { name: "name", label: "Your name", type: "text", auto: "name", placeholder: "Jordan Lee…" },
            { name: "email", label: "Work email", type: "email", auto: "email", placeholder: "jordan@youragency.com…" },
          ] as const
        ).map((f) => (
          <div key={f.name} className="flex flex-col gap-1.5">
            <label htmlFor={`apply-${f.name}`} className="text-body-s font-semibold text-text-primary">
              {f.label}
            </label>
            <input
              id={`apply-${f.name}`}
              name={f.name}
              type={f.type}
              autoComplete={f.auto}
              spellCheck={f.type === "email" ? false : undefined}
              onInput={f.name === "email" ? onEmailInput : undefined}
              inputMode={f.type === "email" ? "email" : undefined}
              placeholder={f.placeholder}
              aria-invalid={errors[f.name] ? true : undefined}
              aria-describedby={errors[f.name] ? errId(f.name) : undefined}
              className={cn(inputCls, "h-12", errors[f.name] ? "border-error-ink" : "border-border-input")}
            />
            {errorText(f.name)}
          </div>
        ))}
      </div>

      {QUESTIONS.map((q) => (
        <div key={q.name} className="flex flex-col gap-1.5">
          <label htmlFor={`apply-${q.name}`} className="text-body-s font-semibold text-text-primary">
            {q.label}
          </label>
          {q.multiline ? (
            <textarea
              id={`apply-${q.name}`}
              name={q.name}
              rows={3}
              autoComplete="off"
              placeholder={q.placeholder}
              aria-invalid={errors[q.name] ? true : undefined}
              aria-describedby={errors[q.name] ? errId(q.name) : undefined}
              className={cn(inputCls, "resize-y py-3", errors[q.name] ? "border-error-ink" : "border-border-input")}
            />
          ) : (
            <input
              id={`apply-${q.name}`}
              name={q.name}
              type="text"
              autoComplete="organization"
              placeholder={q.placeholder}
              aria-invalid={errors[q.name] ? true : undefined}
              aria-describedby={errors[q.name] ? errId(q.name) : undefined}
              className={cn(inputCls, "h-12", errors[q.name] ? "border-error-ink" : "border-border-input")}
            />
          )}
          {errorText(q.name)}
        </div>
      ))}

      <fieldset className="flex flex-col gap-2" aria-describedby={errors.cadence ? errId("cadence") : undefined}>
        <legend className="mb-1.5 text-body-s font-semibold text-text-primary">
          5. Can you commit to a 30-minute call every other week?
        </legend>
        <div className="flex flex-wrap gap-2">
          {CADENCE.map((c) => (
            <label
              key={c.value}
              className="flex h-11 cursor-pointer items-center gap-2.5 rounded-[10px] border border-border-input bg-canvas px-4 text-body text-text-primary has-[:checked]:border-accent has-[:checked]:bg-accent-wash has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent has-[:focus-visible]:ring-offset-2"
            >
              <input type="radio" name="cadence" value={c.value} className="accent-[var(--accent)]" />
              {c.label}
            </label>
          ))}
        </div>
        {errorText("cadence")}
      </fieldset>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="apply-website">Website</label>
        <input id="apply-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError ? (
        <p role="alert" className="rounded-[10px] bg-error-bg px-4 py-3 text-body-s text-error-ink">
          {formError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(buttonVariants({ size: "lg" }), "h-[52px] rounded-full px-8")}
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send my application"
          )}
        </button>
        <p className="text-body-s text-text-secondary">Takes about 5 minutes.</p>
      </div>
    </form>
  )
}
