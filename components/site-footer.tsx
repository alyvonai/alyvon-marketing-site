// Global site footer (Ticket 2-21 shared convention). Rendered once from
// app/layout.tsx below {children} -- individual page builds must not render
// their own footer. Server component: no interactivity needed.

import Link from "next/link"
import { FOOTER_LINK_GROUPS } from "@/lib/nav-data"

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

        <div className="mt-12 flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-mono text-body-s uppercase tracking-wide text-text-secondary">
            Alyvon
          </Link>
          <p className="text-body-s text-text-secondary">
            &copy; {year} Alyvon. Direct a team. Not a tool.
          </p>
        </div>
      </div>
    </footer>
  )
}
