import { Users, Megaphone } from "lucide-react"

import { buildMetadata } from "@/lib/metadata"
import { Hero } from "@/components/marketing/hero"
import { Section } from "@/components/marketing/section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Copy source: Library deliverable 4ccea028-0024-42f6-92f2-92db2276cd9d
// (Ticket 0g, final post-consistency-pass version), /login page section.
// Pulled verbatim; light formatting only. This page is exactly a two-choice
// router (Workforce vs. Marketing Hub) with no form fields -- it only routes
// the visitor to the right subdomain. No real auth form lives here.
export const metadata = buildMetadata({
  title: "Log in - Alyvon",
  description: "Choose which Alyvon product to log in to: Workforce or Marketing Hub.",
  path: "/login",
})

export default function LoginPage() {
  return (
    <>
      <Hero
        heading="Log in"
        subhead="Choose which Alyvon product to log in to: Workforce or Marketing Hub."
        align="center"
      />

      <Section tone="surface" spacing="sm">
        <div className="mx-auto grid w-full max-w-[880px] gap-6 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader className="flex flex-col gap-3">
              <Users className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle>Log in to Workforce</CardTitle>
              <CardDescription>
                For departments, specialists, and deliverables: your AI workforce.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <a
                href="https://app.alyvon.com"
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                Log in to Workforce
              </a>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="flex flex-col gap-3">
              <Megaphone className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle>Log in to Marketing Hub</CardTitle>
              <CardDescription>
                For CRM, automations, and the AI Employee: your marketing and messaging system.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <a
                href="https://mh.alyvon.com"
                className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "w-full")}
              >
                Log in to Marketing Hub
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
