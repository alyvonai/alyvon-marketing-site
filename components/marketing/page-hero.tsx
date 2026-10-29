import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/marketing/container"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { Eyebrow } from "@/components/home/ui"

// Dark grid hero shared by content pages (blog, posts, authors, security) so they open the
// same way as the homepage, Platform and Founding Partners: breadcrumb, orange eyebrow,
// large headline, optional subhead, meta line, actions and a right-hand aside.
export function PageHero({
  crumbs,
  eyebrow,
  title,
  subhead,
  meta,
  actions,
  aside,
  size = "lg",
}: {
  crumbs?: { name: string; path: string }[]
  eyebrow?: React.ReactNode
  title: React.ReactNode
  subhead?: React.ReactNode
  /** Small line under the subhead (byline, dates, terms). */
  meta?: React.ReactNode
  actions?: React.ReactNode
  aside?: React.ReactNode
  /** "md" for long titles such as blog posts. */
  size?: "md" | "lg"
}) {
  return (
    <section className="bg-grid-dark bg-inverse text-text-on-inverse [color-scheme:dark]">
      <Container
        className={cn(
          "grid gap-10 pb-16 pt-10 sm:pb-20 sm:pt-12",
          aside ? "lg:grid-cols-[1.4fr_1fr] lg:items-end" : undefined
        )}
      >
        <div className="flex min-w-0 flex-col gap-5">
          {crumbs ? <Breadcrumbs crumbs={crumbs} tone="dark" /> : null}
          {eyebrow ? (
            <Eyebrow tone="dark" className={crumbs ? "mt-6" : undefined}>
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h1
            className={cn(
              "max-w-[960px] text-balance font-bold tracking-[-0.045em]",
              size === "lg"
                ? "text-[40px] leading-[1.03] sm:text-[58px] lg:text-[68px]"
                : "text-[34px] leading-[1.08] sm:text-[46px] lg:text-[54px]"
            )}
          >
            {title}
          </h1>
          {subhead ? <p className="max-w-[680px] text-body-l text-white/80">{subhead}</p> : null}
          {meta ? <div className="text-body-s text-white/60">{meta}</div> : null}
          {actions ? <div className="mt-1 flex flex-wrap items-center gap-3">{actions}</div> : null}
        </div>
        {aside ? <div className="min-w-0">{aside}</div> : null}
      </Container>
    </section>
  )
}
