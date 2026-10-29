import * as React from "react"
import { cn } from "@/lib/utils"

// Small presentational primitives for the agency homepage. Product visuals below are
// coded recreations of app screens (crisp at every width, no screenshot drift); the
// wrapping <figure> carries the accessible description and the mock UI is aria-hidden.

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.12em]",
        tone === "dark" ? "text-accent" : "text-accent-strong",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  )
}

export function StepLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="flex flex-wrap items-center gap-3 font-mono text-[13px] uppercase tracking-[0.12em] text-accent-strong">
      <span>
        {n} · {label}
      </span>
    </p>
  )
}

type ChipTone = "ok" | "warn" | "gap" | "neutral" | "accent"

const CHIP: Record<ChipTone, string> = {
  ok: "bg-success-bg text-success-ink",
  warn: "bg-warning-bg text-warning-ink",
  gap: "bg-error-bg text-error-ink",
  neutral: "bg-surface-sunken text-text-secondary",
  accent: "bg-accent text-text-on-accent",
}

export function Chip({ tone = "neutral", children }: { tone?: ChipTone; children: React.ReactNode }) {
  return (
    <span className={cn("shrink-0 rounded-[6px] px-2 py-1 font-mono text-[11px] leading-none", CHIP[tone])}>
      {children}
    </span>
  )
}

/** A light "app screen" card used inside the mock visuals. */
export function MockCard({
  label,
  title,
  className,
  children,
  accentEdge,
}: {
  label?: string
  title?: string
  className?: string
  children?: React.ReactNode
  accentEdge?: boolean
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-[10px] bg-canvas p-4 text-text-primary shadow-sm",
        accentEdge && "border-l-[3px] border-l-accent",
        className
      )}
    >
      {label ? (
        <p
          className={cn(
            "font-mono text-[10px] uppercase tracking-[0.14em]",
            accentEdge ? "text-accent-strong" : "text-text-secondary"
          )}
        >
          {label}
        </p>
      ) : null}
      {title ? <p className="mt-1.5 text-[15px] font-semibold">{title}</p> : null}
      {children}
    </div>
  )
}

export function MockRow({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <div
      className={cn(
        "flex min-w-0 items-center justify-between gap-3 py-2.5 text-[13px]",
        !last && "border-b border-border-subtle"
      )}
    >
      {children}
    </div>
  )
}

/** Dark rounded stage that holds a cluster of MockCards. */
export function MockStage({
  description,
  className,
  children,
}: {
  description: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <figure aria-label={description} className={cn("rounded-[18px] bg-inverse p-3 shadow-xl sm:p-4", className)}>
      <div aria-hidden="true">{children}</div>
    </figure>
  )
}

/** Light app window chrome, used for the live-product (step 01) screens. */
export function AppWindow({
  description,
  crumbs,
  title,
  subtitle,
  className,
  children,
}: {
  description: string
  crumbs: string[]
  title: string
  subtitle: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <figure
      aria-label={description}
      className={cn("overflow-hidden rounded-[14px] border border-border-subtle bg-surface shadow-xl", className)}
    >
      <div aria-hidden="true">
        <div className="border-b border-border-subtle px-4 pb-3 pt-3 sm:px-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-strong">
            {crumbs.join(" · ")}
          </p>
          <p className="mt-1 text-[17px] text-text-primary sm:text-[19px]">
            {title} <em className="text-text-secondary">{subtitle}</em>
          </p>
        </div>
        <div className="p-3 sm:p-4">{children}</div>
      </div>
    </figure>
  )
}

export function Dots({ n }: { n: 1 | 2 | 3 }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <span key={i} className={cn("h-2 w-2 rounded-[2px]", i <= n ? "bg-accent" : "bg-surface-sunken")} />
      ))}
    </span>
  )
}
