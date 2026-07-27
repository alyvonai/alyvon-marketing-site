import { ShieldCheck, Lock, KeyRound, DatabaseZap, Mail } from "lucide-react"

import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { CtaBand } from "@/components/marketing/cta-band"
import { List } from "@/components/ui/typography"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Copy source: Library deliverable 4ccea028-0024-42f6-92f2-92db2276cd9d
// (Ticket 0g, final post-consistency-pass version), /security page section.
// Pulled verbatim; light formatting only.
//
// FLAG carried from the source document (spec section 10 open question):
// security certifications (e.g. SOC 2) are intentionally not referenced
// anywhere on this page because no auditor or certification status was
// confirmed in the source audit. This page describes architecture and
// operating practice only. If a certification exists, add it with the
// auditor named -- do not add a certification claim without that.
export const metadata = buildMetadata({
  title: "Security - Alyvon",
  description:
    "How Alyvon handles your data and credentials: isolated sandboxes, approval gates on every send or spend, and no use of customer data to train models.",
  path: "/security",
})

export default function SecurityPage() {
  return (
    <>
      <Hero
        eyebrow="Security"
        heading="Built to be directed, not to act on its own."
        subhead="Alyvon's specialists produce work inside a controlled system. Every irreversible action still needs you."
      />

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="text-display-m text-text-primary">How work is isolated</h2>
          </div>
          <List>
            <li>
              Each task runs inside its own sandbox, created fresh and destroyed once the task
              finishes. Nothing persists between tasks by default.
            </li>
            <li>
              Specialists work from the brief and the files you provide. They do not have
              open-ended access to your other systems beyond what a task requires.
            </li>
          </List>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Lock className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="text-display-m text-text-primary">Approval gates</h2>
          </div>
          <p className="max-w-[70ch] text-body-l text-text-secondary">
            Alyvon&apos;s specialists can draft an email, build a campaign, or prepare a payment
            action. They cannot send it, publish it, or spend money on their own. Any action that
            sends, publishes, or pays waits for a human approval step before it executes.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <KeyRound className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="text-display-m text-text-primary">Credentials and integrations</h2>
          </div>
          <p className="max-w-[70ch] text-body-l text-text-secondary">
            Alyvon connects to roughly 200 apps you already use, covering more than 1,000
            individual actions across them. Those connections are managed through our
            integrations provider, which holds the OAuth credentials on your behalf. Alyvon does
            not store your third-party passwords directly.
          </p>
        </div>
      </Section>

      <Section tone="canvas">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <DatabaseZap className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="text-display-m text-text-primary">Data use</h2>
          </div>
          <List>
            <li>Your data is not used to train the underlying models.</li>
            <li>
              Task data lives inside the isolated sandbox for that task and is not carried forward
              once the task is destroyed, beyond the finished deliverable you receive.
            </li>
          </List>
          {/*
            FLAG (source doc, spec section 10 open question, carried to legal):
            exact data retention periods for account and billing records, and the
            specific sub-processor list (including the AI model provider and
            integrations provider by name), belong in the Privacy Policy
            (Ticket 0k, /privacy) rather than on this marketing page. This page
            states architecture and practice only and stays free of any claim
            this document's source audit couldn't confirm.
          */}
        </div>
      </Section>

      <Section tone="surface" spacing="sm">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 shrink-0 text-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="text-display-m text-text-primary">Questions</h2>
          </div>
          <p className="max-w-[70ch] text-body-l text-text-secondary">
            Security questions go to the same team behind the product. Reach us at the contact
            details on this site.
          </p>
        </div>
      </Section>

      <CtaBand
        heading="Direct your first team this week."
        subhead="14 days or 10 deliverables, whichever comes first. No credit card. Cancel anytime."
        actions={
          <Link href="/pricing" className={cn(buttonVariants({ size: "lg" }))}>
            Start your free trial
          </Link>
        }
      />
    </>
  )
}
