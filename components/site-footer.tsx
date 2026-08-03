// Global site footer (Ticket 2-21 shared convention). Rendered once from
// app/layout.tsx below {children} -- individual page builds must not render
// their own footer. Server component: no interactivity needed.

import Link from "next/link"
import { Logo } from "@/components/brand/logo"
import { FOOTER_LINK_GROUPS } from "@/lib/nav-data"
import { SUPPORT_EMAIL } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-content-lg px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              {/* text-secondary, not text-tertiary: at 12px this label sits below the
                  documented tertiary usage floor (>=14px bold or >=18px normal). */}
              <h3 className="font-mono text-label uppercase text-text-secondary">{group.heading}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-s text-text-secondary transition-colors duration-micro ease-out-standard hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-subtle pt-6">
          <div className="flex flex-col gap-1 text-body-s text-text-secondary sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
            <span>Skyyr Digital LLC, dba Alyvon</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>13256 Strode Ln, Windermere, FL 34786</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="transition-colors duration-micro ease-out-standard hover:text-text-primary"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" aria-label="Alyvon home" className="text-text-primary">
              <Logo size={22} />
            </Link>
            <p className="text-body-s text-text-secondary">
              &copy; {year} Alyvon. Direct a team. Not a tool.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
