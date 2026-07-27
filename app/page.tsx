import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Placeholder root route. The real Home page is Ticket 4 in spec-2-marketing-site.md
// and is NOT part of this PR's scope (this PR covers Tickets 0b, 1, and 22 only --
// see docs/section-manifest.md). This page exists only so `next build` succeeds
// and so the component library above can be sanity-checked against the design
// tokens without inventing marketing copy that Content hasn't written yet.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col items-start justify-center gap-6 px-6 py-24">
      <span className="font-mono text-label uppercase text-accent-strong">
        Foundation build
      </span>
      <h1 className="text-display-l text-text-primary">
        Component library online.
      </h1>
      <p className="max-w-[60ch] text-body-l text-text-secondary">
        This route is a placeholder confirming the design tokens and base
        components build correctly. Home page copy and layout ship under
        Ticket 4, a separate build unit.
      </p>
      <div className="flex gap-3">
        <Button variant="primary">Primary action</Button>
        <Button variant="secondary">Secondary action</Button>
        <Button variant="ghost">Ghost action</Button>
      </div>
      <Card className="mt-4 w-full max-w-md">
        <CardHeader>
          <CardTitle>Example card</CardTitle>
          <CardDescription>
            Uses bg-canvas, border-subtle, and the shared card radius token.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body text-text-primary">
            Body copy renders in Archivo at 16/26px per the type scale.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
