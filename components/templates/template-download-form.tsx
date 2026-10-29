"use client"

import * as React from "react"
import Link from "next/link"
import { Download, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { track } from "@/lib/analytics"

// Email gate for one template. On success the download is revealed in place (no redirect),
// and both the lead and the download are recorded as PostHog/dataLayer goals.
export function TemplateDownloadForm({ slug, file, title }: { slug: string; file: string; title: string }) {
  const [status, setStatus] = React.useState<"idle" | "sending" | "done">("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [fileUrl, setFileUrl] = React.useState(file)
  const startedAt = React.useRef(Date.now())
  const emailRef = React.useRef<HTMLInputElement>(null)
  const errorId = `${slug}-email-error`

  React.useEffect(() => {
    startedAt.current = Date.now()
    track("template_form_viewed", { template: slug })
  }, [slug])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError("Enter a valid email address, like name@agency.com.")
      emailRef.current?.focus()
      return
    }
    setError(null)
    setStatus("sending")
    try {
      const res = await fetch("/api/template-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: data.get("firstName"),
          website: data.get("website"),
          template: slug,
          elapsedMs: Date.now() - startedAt.current,
          sourcePage: window.location.pathname,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Try again.")
      setFileUrl(json.file ?? file)
      setStatus("done")
      track("template_lead_submitted", { template: slug })
    } catch (err) {
      setStatus("idle")
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.")
      emailRef.current?.focus()
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col gap-4 rounded-[16px] border border-border-subtle bg-canvas p-6 shadow-sm sm:p-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-success-ink">Ready</p>
        <p className="text-[22px] font-semibold leading-snug text-text-primary">Your {title} is ready.</p>
        <a
          href={fileUrl}
          download
          onClick={() => track("template_downloaded", { template: slug })}
          className={cn(buttonVariants({ size: "lg" }), "h-[52px] w-full rounded-full sm:w-fit")}
        >
          <Download className="h-5 w-5" aria-hidden="true" />
          Download the .docx
        </a>
        <p className="text-body-s text-text-secondary">
          Want to fill it from real evidence instead of a guess?{" "}
          <Link href="/#how-it-works" className="font-medium text-accent-strong underline underline-offset-4">
            See how Alyvon runs discovery
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative flex flex-col gap-4 rounded-[16px] border border-border-subtle bg-canvas p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${slug}-first-name`} className="text-body-s font-medium text-text-primary">
          First name <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <input
          id={`${slug}-first-name`}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="Jordan…"
          className="h-12 rounded-[10px] border border-border-input bg-canvas px-4 text-body text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${slug}-email`} className="text-body-s font-medium text-text-primary">
          Work email
        </label>
        <input
          ref={emailRef}
          id={`${slug}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          required
          placeholder="name@agency.com…"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "h-12 rounded-[10px] border bg-canvas px-4 text-body text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
            error ? "border-error-ink" : "border-border-input"
          )}
        />
        {error ? (
          <p id={errorId} role="alert" className="text-body-s text-error-ink">
            {error}
          </p>
        ) : null}
      </div>
      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${slug}-website`}>Website</label>
        <input id={`${slug}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(buttonVariants({ size: "lg" }), "h-[52px] w-full rounded-full")}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Download className="h-5 w-5" aria-hidden="true" />
            Get the template
          </>
        )}
      </button>
      <p className="text-body-s text-text-secondary">
        We’ll send occasional notes for AI agencies. Unsubscribe any time. See our{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
