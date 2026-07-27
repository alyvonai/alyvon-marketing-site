// 404 page (Ticket 22). No smarter "did you mean" suggestion is built here since
// no real routes exist yet in this PR (Tickets 2-21 are out of scope) -- once those
// pages land, a follow-on ticket can add route-aware suggestions. This links home
// only, per docs/section-manifest.md.
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-content flex-col items-center justify-center gap-4 px-4 py-16 text-center sm:py-24">
      <p className="font-mono text-label uppercase text-text-secondary">404</p>
      <h1 className="text-display-m text-text-primary">This page doesn&apos;t exist.</h1>
      <p className="max-w-md text-body text-text-secondary">
        The page you&apos;re looking for may have moved or was never built. Head back
        to the homepage and start again from there.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex h-11 items-center justify-center rounded-card bg-accent px-5 text-body font-medium text-text-on-accent transition-colors duration-micro ease-out-standard hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  )
}
