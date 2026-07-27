{/*
  LEGAL REVIEW FLAG -- NOT FINAL. This page is a first draft only and has not
  been reviewed by a licensed attorney. Do not treat this copy as final or
  remove this notice until counsel has signed off (Ticket 0k).

  Known open item, unresolved: the source draft lists a registered address of
  13856 Summerport Trail Loop, Windermere, FL 34786, while every customer-
  facing marketing page on this site uses "Orlando, FL." Windermere sits
  inside the Orlando metro area, so these may describe the same registered
  address two different ways, but that has not been confirmed. This page
  ships with the Windermere street address as drafted (a Privacy Policy is a
  legal document that should carry the real registered address rather than
  the marketing-facing city name) -- the conflict is intentionally left
  unresolved here rather than silently picked one way. Confirm the single
  correct legal address with counsel before publishing. The contact email
  below is also a placeholder pending the real support mailbox.
*/}
import { Section } from "@/components/marketing/section"
import { List, DataTable, Blockquote } from "@/components/ui/typography"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Alyvon collects, uses, and protects your information. First draft, pending legal review.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <Section tone="canvas" spacing="lg">
        <span className="font-mono text-label uppercase text-text-secondary">
          Legal
        </span>
        <h1 className="mt-3 text-display-l text-text-primary">Privacy Policy</h1>
        <p className="mt-4 text-body text-text-secondary">
          Effective date: [to be set on publish]. Last legal review: not yet
          reviewed.
        </p>
      </Section>

      <Section tone="surface" spacing="lg">
        <div className="mx-auto flex max-w-[72ch] flex-col gap-12">
          <div>
            <h2 className="text-display-m text-text-primary">
              1. Information we collect
            </h2>
            <List className="mt-4">
              <li>
                Account and contact information you provide directly: name,
                email address, phone number, company information, and billing
                details, collected when you create an account, start a trial,
                or request a demo.
              </li>
              <li>
                Usage data collected automatically: IP address, browser type,
                device information, and pages visited.
              </li>
              <li>
                Cookies, pixels, and similar technologies used for site
                function, analytics, and, where applicable, advertising.
              </li>
              <li>
                Content you submit as part of a brief or a deliverable,
                including any files, data, or credentials you connect through
                a supported integration.
              </li>
            </List>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              2. How we use information
            </h2>
            <List className="mt-4">
              <li>
                To provide the service: routing your briefs to the right
                department, producing deliverables, and maintaining your
                account.
              </li>
              <li>
                To process transactions and billing, including trial and
                subscription management.
              </li>
              <li>To respond to inquiries and provide support.</li>
              <li>To analyze and improve the service.</li>
              <li>
                To send service and, where you have opted in, marketing
                communications.
              </li>
              <li>To meet legal obligations.</li>
            </List>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              3. Third parties we share information with
            </h2>
            <p className="mt-4 text-body text-text-primary">
              We do not sell your personal information. We share information
              only as needed to run the service, with the following
              categories of processor:
            </p>
            <DataTable className="mt-4">
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Processor</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Role</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell className="font-medium text-text-primary">
                    Anthropic
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Provides the underlying AI models that power specialist
                    work. Content you submit in a brief may be processed by
                    this model provider to generate your deliverable. Your
                    data is not used to train Anthropic&apos;s or
                    Alyvon&apos;s models.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell className="font-medium text-text-primary">
                    Composio
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Holds the OAuth credentials for any third-party app you
                    connect (for example, your CRM or ad platform) and
                    brokers the connections specialists use to complete a
                    brief. Alyvon does not directly store your third-party
                    account passwords.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell className="font-medium text-text-primary">
                    GoHighLevel
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Powers the Marketing Hub product line: CRM records,
                    automations, and the AI Employee.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell className="font-medium text-text-primary">
                    Standard infrastructure and billing providers
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Hosting, storage, and payment processing needed to
                    operate the service.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
            <p className="mt-4 text-body text-text-primary">
              We may also share information during a business transfer, such
              as a merger or acquisition, or when required by law,
              regulation, or a valid government request.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              4. Data retention
            </h2>
            <p className="mt-4 text-body text-text-primary">
              We retain account and billing information for as long as your
              account is active and as needed to meet legal, accounting, or
              reporting obligations. Task-level data lives inside an isolated
              sandbox created for that task, which is destroyed once the task
              completes, beyond the finished deliverable retained in your
              account.
            </p>
            <Blockquote className="mt-4 text-body-s">
              Placeholder: exact retention periods in days or years for each
              data category to be set by counsel before publishing.
            </Blockquote>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              5. Your rights
            </h2>
            <List className="mt-4">
              <li>Access, correct, or request deletion of your personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>
                Where applicable under your local law, additional rights may
                apply.
              </li>
            </List>
            <Blockquote className="mt-4 text-body-s">
              Placeholder: add jurisdiction-specific rights, such as GDPR or
              CCPA language, once counsel confirms which jurisdictions apply.
            </Blockquote>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              6. SMS and email consent
            </h2>
            <p className="mt-4 text-body text-text-primary">
              If you provide a phone number and opt in to SMS communication,
              we send transactional messages (such as appointment reminders)
              and, only with your separate consent, marketing messages. You
              can opt out of SMS at any time by replying STOP, and out of
              marketing email using the unsubscribe link in any marketing
              message. Transactional and marketing consent are collected
              separately and are not bundled into a single checkbox.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">7. Cookies</h2>
            <p className="mt-4 text-body text-text-primary">
              We use cookies for authentication, analytics, and, where
              applicable, advertising. You can manage or disable cookies
              through your browser settings, though some parts of the
              service may not function correctly without them.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">8. Security</h2>
            <p className="mt-4 text-body text-text-primary">
              We maintain reasonable technical and administrative safeguards,
              including isolated, per-task processing environments and
              access controls on stored credentials. No method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">
              9. Children&apos;s privacy
            </h2>
            <p className="mt-4 text-body text-text-primary">
              Alyvon is not directed at individuals under 18, and we do not
              knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-display-m text-text-primary">10. Contact</h2>
            <DataTable className="mt-4">
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.HeaderCell className="w-1/3">
                    Registered address
                  </DataTable.HeaderCell>
                  <DataTable.Cell>
                    13856 Summerport Trail Loop, Windermere, FL 34786
                    [flagged: confirm against the Orlando, FL public-facing
                    location before publishing]
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
                    [email protected] [placeholder, confirm the real
                    mailbox before publishing]
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
