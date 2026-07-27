{/*
  LEGAL REVIEW FLAG -- NOT FINAL. This page is a first draft only and has not
  been reviewed by a licensed attorney. Do not treat this copy as final or
  remove this notice until counsel has signed off (Ticket 0k). No prior
  Terms of Service exists to build from; this is a first draft written fresh
  for the current product.

  Known open item, unresolved: the source draft lists a registered address of
  13856 Summerport Trail Loop, Windermere, FL 34786, while every customer-
  facing marketing page on this site uses "Orlando, FL." Windermere sits
  inside the Orlando metro area, so these may describe the same registered
  address two different ways, but that has not been confirmed. This page
  ships with the Windermere street address as drafted -- the conflict is
  intentionally left unresolved here rather than silently picked one way.
  Confirm the single correct legal address with counsel before publishing.
  The contact email below is also a placeholder pending the real support
  mailbox. Sections 7 (Disclaimers), 8 (Limitation of liability), and 10
  (Governing law) are explicit counsel placeholders in the source draft and
  are rendered as such -- do not fill these in without attorney sign-off.
*/}
import { Section } from "@/components/marketing/section"
import { List, DataTable, Blockquote } from "@/components/ui/typography"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of Alyvon. First draft, pending legal review.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <>
      <Section tone="canvas" spacing="lg">
        <span className="font-mono text-label uppercase text-text-secondary">
          Legal
        </span>
        <h1 className="mt-3 text-display-l text-text-primary">
          Terms of Service
        </h1>
        <p className="mt-4 text-body text-text-secondary">
          Effective date: [to be set on publish]. Last legal review: not yet
          reviewed. No prior Terms of Service exists to build from; this is a
          first draft written fresh for the current product.
        </p>
      </Section>

      <Section tone="surface" spacing="lg">
        <div className="mx-auto flex max-w-[72ch] flex-col gap-12">
          <div>
            <h2 className="text-display-m text-text-primary">
              1. The service
            </h2>
            <p className="mt-4 text-body text-text-primary">
              Alyvon is an AI workforce platform. You submit a brief to a
              department Director, and that department returns a finished
              deliverable, a document, spreadsheet, slide deck, piece of
              code, or project archive. Alyvon also offers the Marketing Hub
              product line (CRM, automations, and AI Employee) and the
              Analytics product line, each described on their respective
              pages.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              2. Free trial
            </h2>
            <p className="mt-4 text-body text-text-primary">
              New accounts receive a free trial of 14 days or 10 completed
              deliverables, whichever comes first. No credit card is
              required to start the trial. You may cancel at any time during
              or after the trial with no further obligation.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              3. Subscriptions and billing
            </h2>
            <List className="mt-4">
              <li>
                Paid plans are billed monthly or annually. Annual billing
                gives you two months free compared to paying monthly.
              </li>
              <li>
                Each plan includes a monthly allowance of deliverables and a
                set number of departments and seats, as described on the
                pricing page.
              </li>
              <li>
                A deliverable is one completed brief: one finished file or
                set of files returned against a single brief you submitted,
                regardless of how many specialists or departments were
                involved in producing it.
              </li>
              <li>
                Deliverables used beyond your plan&apos;s monthly allowance
                are billed at your plan&apos;s published overage rate and
                appear on your next invoice. Your account is not blocked
                from working while an overage is billed.
              </li>
              <li>
                You may cancel at any time. There is no minimum contract term
                on any published plan.
              </li>
            </List>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              4. Acceptable use
            </h2>
            <List className="mt-4">
              <li>
                You will not use the service to generate content that is
                unlawful, infringing, or that you do not have the rights to
                request.
              </li>
              <li>
                You are responsible for reviewing and approving any
                deliverable before you send, publish, or act on it
                externally. Any action that sends, publishes, or spends
                money on your behalf requires your explicit approval before
                it executes; the service does not take these actions
                unattended.
              </li>
              <li>
                You will not attempt to circumvent the approval gates
                described in this section or in the Security page.
              </li>
            </List>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              5. Your content and our deliverables
            </h2>
            <List className="mt-4">
              <li>You retain ownership of the content and data you submit.</li>
              <li>
                You own the deliverables produced for your account once
                delivered, subject to your continued compliance with these
                terms.
              </li>
              <li>
                You are responsible for verifying that any factual claim,
                legal statement, or regulated content in a deliverable is
                accurate and appropriate for your use before you rely on or
                publish it.
              </li>
            </List>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              6. Third-party integrations
            </h2>
            <p className="mt-4 text-body text-text-primary">
              Connecting a third-party app (for example, your CRM, ad
              platform, or email provider) is done through our integrations
              provider, which holds the relevant credentials on your behalf.
              Your use of any connected third-party app remains subject to
              that provider&apos;s own terms.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              7. Disclaimers
            </h2>
            <p className="mt-4 text-body text-text-primary">
              The service and its deliverables are provided on an as-is
              basis. We do not guarantee that any deliverable will achieve a
              particular business outcome.
            </p>
            <Blockquote className="mt-4 text-body-s">
              Placeholder: standard warranty disclaimer language to be
              finalized by counsel.
            </Blockquote>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              8. Limitation of liability
            </h2>
            <Blockquote className="mt-4 text-body-s">
              Placeholder: standard limitation of liability clause, capping
              liability and excluding indirect and consequential damages, to
              be drafted by counsel to match Alyvon&apos;s actual risk
              position and insurance coverage.
            </Blockquote>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              9. Termination
            </h2>
            <p className="mt-4 text-body text-text-primary">
              Either party may terminate the subscription at any time. Upon
              termination, access to the service ends at the close of the
              current billing period, and outstanding overage charges remain
              due.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              10. Governing law
            </h2>
            <Blockquote className="mt-4 text-body-s">
              Placeholder: governing law and venue to be set by counsel,
              informed by the confirmed registered address in section 10 of
              the Privacy Policy above.
            </Blockquote>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              11. Contact
            </h2>
            <DataTable className="mt-4">
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.HeaderCell className="w-1/3">
                    Registered address
                  </DataTable.HeaderCell>
                  <DataTable.Cell>
                    13856 Summerport Trail Loop, Windermere, FL 34786
                    [flagged: confirm before publishing]
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.HeaderCell className="w-1/3">
                    Phone
                  </DataTable.HeaderCell>
                  <DataTable.Cell>407-993-2979</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.HeaderCell className="w-1/3">
                    Email
                  </DataTable.HeaderCell>
                  <DataTable.Cell>
                    [email protected] [placeholder, confirm before
                    publishing]
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>
        </div>
      </Section>
    </>
  )
}
