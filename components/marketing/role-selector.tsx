import Link from "next/link"

// "I run…" role chips that jump the visitor to the right Workforce group (spec §16/§17
// role selector). Plain links so they work without JS and are keyboard accessible.
export function RoleSelector({
  items,
  label = "Pick where you need capacity",
}: {
  items: { label: string; href: string }[]
  label?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-label uppercase text-text-secondary">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-card border border-border-input bg-canvas px-4 py-2 text-body-s font-medium text-text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
