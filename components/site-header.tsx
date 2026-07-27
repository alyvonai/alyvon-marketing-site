"use client"

// Global site header (Ticket 2-21 shared convention). Every page under
// app/**/page.tsx renders this once via app/layout.tsx -- individual page
// builds must not render their own header.
//
// Desktop dropdowns use group-hover/group-focus-within (no JS) so they degrade
// gracefully; the mobile menu needs real state because it swaps the whole nav
// for a full-screen panel below the sm breakpoint.

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { PRIMARY_NAV } from "@/lib/nav-data"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content-lg items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-body font-medium uppercase tracking-wide text-text-primary"
          onClick={() => setMobileOpen(false)}
        >
          Alyvon
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {PRIMARY_NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-[8px] px-3 py-2 text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:bg-surface hover:text-text-primary"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                </Link>
                <div
                  className="invisible absolute left-0 top-full min-w-[220px] rounded-card border border-border-subtle bg-canvas p-2 opacity-0 shadow-lg transition-[opacity,visibility] duration-micro ease-out-standard group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-[6px] px-3 py-2 text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:bg-surface hover:text-text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-2 text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:bg-surface hover:text-text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <Link
            href="/login"
            className="rounded-[8px] px-3 py-2 text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:bg-surface hover:text-text-primary"
          >
            Log in
          </Link>
          <Link href="/login" className={cn(buttonVariants({ size: "sm" }))}>
            Start free trial
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] text-text-primary lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Primary mobile"
          className="border-t border-border-subtle bg-canvas px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-[8px] px-3 py-2 text-body text-text-primary hover:bg-surface"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-border-subtle pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-[6px] px-3 py-1.5 text-body-s text-text-secondary hover:bg-surface hover:text-text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className={cn("mt-4 flex flex-col gap-2 border-t border-border-subtle pt-4")}>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-[8px] px-3 py-2 text-center text-body text-text-secondary hover:bg-surface"
            >
              Log in
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className={cn(buttonVariants({ size: "md" }), "w-full")}
            >
              Start free trial
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
