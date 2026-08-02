import Link from "next/link"
import { Section } from "@/components/marketing/section"
import { List, DataTable } from "@/components/ui/typography"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Alyvon collects, uses, discloses, and protects personal data across its websites and platform.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <Section tone="canvas" spacing="lg">
        <span className="font-mono text-label uppercase text-text-secondary">Legal</span>
        <h1 className="mt-3 text-display-l text-text-primary">Privacy Policy</h1>
        <p className="mt-4 text-body text-text-secondary">Effective date: August 2, 2026</p>
      </Section>

      <Section tone="surface" spacing="lg">
        <div className="mx-auto flex max-w-[72ch] flex-col gap-12">
          {/* Intro */}
          <div className="flex flex-col gap-4">
            <p className="text-body text-text-secondary">
              Alyvon is an AI workforce platform operated by Skyyr Digital LLC, a Florida limited
              liability company doing business as Alyvon (<strong>“Alyvon,” “we,” “us,” “our”</strong>).
            </p>
            <p className="text-body text-text-secondary">
              This Privacy Policy explains how we collect, use, disclose, and protect personal data
              when you visit our websites, create an account, use the Alyvon platform, use the Alyvon
              Marketing Hub or Analytics product lines, or otherwise interact with us (the{" "}
              <strong>“Services”</strong>).
            </p>
            <p className="text-body text-text-secondary">
              Our{" "}
              <Link href="/terms" className="text-accent-strong underline-offset-4 hover:underline">
                Terms of Service
              </Link>{" "}
              govern your use of the Services. This policy is part of them.
            </p>
          </div>

          {/* Two roles */}
          <div>
            <h2 className="text-display-m text-text-primary">Two different roles we play</h2>
            <p className="mt-4 text-body text-text-secondary">
              This distinction determines which parts of this policy apply to you.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>When we act as a controller.</strong> For information about the people who sign
              up for, buy, and administer the Services, including account details, billing data,
              website visitors, and marketing contacts, we decide how and why that data is used.
              Those activities are governed by this policy.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>When we act as a processor.</strong> When your organization submits briefs,
              attachments, organizational context, or data pulled from your connected applications,
              we process that content on your organization’s instructions in order to produce
              deliverables. Your organization decides what goes in and why. Our handling of that
              content is governed by our contract with your organization, including any data
              processing addendum, and this policy describes it only for transparency. If you are an
              individual user under an organization’s account and want your content deleted or
              corrected, contact your organization’s administrator first.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="text-display-m text-text-primary">1. Information we collect</h2>

            <h3 className="mt-6 text-body-l font-semibold text-text-primary">You provide it directly</h3>
            <List className="mt-3">
              <li>
                <strong>Account and contact data.</strong> Name, work email, phone number, company
                name, role, and account credentials, collected when you create an account, start a
                trial, book a demo, or contact us.
              </li>
              <li>
                <strong>Billing data.</strong> Billing contact, billing address, tax details, and
                transaction records. Card numbers go directly to our payment processor. We do not
                store full payment card numbers.
              </li>
              <li>
                <strong>Inputs.</strong> Briefs, instructions, attachments, brand guidelines,
                organizational context, agent configuration, and any data retrieved from applications
                you connect at your direction. Inputs may contain personal data about your employees,
                customers, or prospects if you choose to include it.
              </li>
              <li>
                <strong>Outputs.</strong> Deliverables and other content the Services generate from
                your Inputs, including files stored in your Library.
              </li>
              <li>
                <strong>Support and communications.</strong> The content of emails, support requests,
                demo calls, and any messages you send us.
              </li>
              <li>
                <strong>Feedback.</strong> Ratings, bug reports, and suggestions. If you rate an
                Output, we may store the associated run so we can understand the rating.
              </li>
            </List>

            <h3 className="mt-6 text-body-l font-semibold text-text-primary">We collect it automatically</h3>
            <List className="mt-3">
              <li>
                <strong>Device and connection data.</strong> IP address, approximate location derived
                from IP address, browser and device type, operating system, and referring URL.
              </li>
              <li>
                <strong>Usage data.</strong> Pages viewed, features used, tasks submitted, agents
                invoked, run duration, token consumption, and deliverable counts.
              </li>
              <li>
                <strong>Log and diagnostic data.</strong> Error events, stack traces, and performance
                traces. Our error monitoring is configured to strip the content of briefs and
                deliverables before transmission, so we receive the shape of an error rather than
                what you wrote.
              </li>
              <li>
                <strong>Cookies and similar technologies.</strong> Described in Section 7.
              </li>
            </List>

            <h3 className="mt-6 text-body-l font-semibold text-text-primary">We receive it from third parties</h3>
            <List className="mt-3">
              <li>
                <strong>Connected applications.</strong> When you authorize a connection, we receive
                data from that application as needed to complete the work you requested.
              </li>
              <li>
                <strong>Payment and business tools.</strong> Our payment processor, CRM, and analytics
                providers return transaction status, engagement data, and similar operational
                information.
              </li>
              <li>
                <strong>Prospect data.</strong> For our own marketing, we use business contact data
                from commercial data providers. If you received an email from us and did not sign up,
                this is likely why, and every such message includes a way to opt out.
              </li>
            </List>

            <h3 className="mt-6 text-body-l font-semibold text-text-primary">What we do not want you to send us</h3>
            <p className="mt-3 text-body text-text-secondary">
              Do not submit health records, payment card data, government identification numbers,
              biometric data, or data about children through the Services unless we have agreed in
              writing in advance. Our Terms prohibit it, and we are not configured to handle those
              categories.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-display-m text-text-primary">2. How we use information</h2>
            <List className="mt-4">
              <li>To operate the Services, route briefs to the right department, execute agent runs, and produce and store deliverables.</li>
              <li>To create and administer your account, authenticate users, and enforce plan entitlements.</li>
              <li>To meter usage and process billing, including trials, subscriptions, and overage.</li>
              <li>To provide support and respond to your requests.</li>
              <li>To monitor, secure, debug, and improve the Services, including analyzing aggregated usage patterns and error rates.</li>
              <li>To detect, investigate, and prevent fraud, abuse, security incidents, and violations of our Terms.</li>
              <li>To send you operational, security, and billing notices, which you cannot opt out of while you hold an account.</li>
              <li>To send marketing communications where you have opted in or where permitted by law, with an opt-out in every message.</li>
              <li>To comply with legal, tax, and accounting obligations, and to establish or defend legal claims.</li>
            </List>

            <h3 className="mt-6 text-body-l font-semibold text-text-primary">We do not train AI models on your content</h3>
            <p className="mt-3 text-body text-text-secondary">
              We do not use your Inputs or Outputs to train or fine-tune generative AI models, and our
              model providers do not train their generative models on data we transmit on your behalf.
              Those providers may transiently log inputs for their own safety and abuse monitoring,
              which is separate from training and is described in their own terms. We use aggregated,
              de-identified operational metrics, such as token counts, run duration, error rates, and
              feature adoption, to operate and improve the Services. Those metrics do not identify you
              and do not reveal the content of your briefs or deliverables.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              We may access specific content only where necessary to investigate a suspected violation
              of our Terms, to respond to a support request you initiate, or to comply with law.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-display-m text-text-primary">3. Agent actions and connected applications</h2>
            <p className="mt-4 text-body text-text-secondary">
              The Services differ from a typical SaaS product in one way that matters for privacy:
              agents take actions in systems you connect.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              When you authorize a connection, you direct us to send your Inputs, instructions, and
              generated content to that third-party application, and to retrieve data from it. That
              application receives the data directly and handles it under its own privacy policy, not
              ours. Some connections remain active until you disconnect them.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Credentials for connected applications are held by our integration provider on your
              behalf. We do not receive or store passwords for your third-party accounts.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Agent work runs inside an isolated execution environment created for that run and
              destroyed when the run finishes. Deliverables are moved to your Library before the
              environment is torn down. Nothing persists in the execution environment between runs.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Before you connect an application, confirm that you have authority to grant that access
              and that doing so is consistent with your own obligations to your customers and
              employees.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-display-m text-text-primary">4. Who we share information with</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>We do not sell personal data for money.</strong> Our marketing website does use
              advertising platform tags, which under several state privacy laws counts as sharing
              personal data for targeted advertising. Section 8 explains what that means and how to
              opt out. We never sell or share the content you submit to the platform.
            </p>
            <p className="mt-4 text-body text-text-secondary">We share information with:</p>
            <List className="mt-3">
              <li>
                <strong>Service providers.</strong> Hosting, database and storage, sandboxed
                execution, AI model providers, integration brokering, payment processing, analytics,
                error monitoring, email delivery, and CRM. Our current list is at{" "}
                <Link href="/subprocessors" className="text-accent-strong underline-offset-4 hover:underline">
                  alyvon.com/subprocessors
                </Link>
                . Each is bound by contract to use the data only to provide services to us.
              </li>
              <li>
                <strong>Our own sales and marketing tools.</strong> If you are a prospect rather than
                a customer, your business contact details may sit in our prospecting, outbound email,
                LinkedIn outreach, and CRM tools rather than in the platform itself. Those providers
                are listed in a separate section of the same{" "}
                <Link href="/subprocessors" className="text-accent-strong underline-offset-4 hover:underline">
                  subprocessor page
                </Link>{" "}
                so you can see where your data is held and exercise your rights over it.
              </li>
              <li>
                <strong>Your organization.</strong> If you use an account provisioned by your employer
                or client, administrators of that account can view, export, and delete content in it,
                including yours.
              </li>
              <li>
                <strong>Connected applications you authorize.</strong> As described in Section 3.
              </li>
              <li>
                <strong>Professional advisors.</strong> Lawyers, accountants, auditors, and insurers,
                under confidentiality obligations.
              </li>
              <li>
                <strong>Legal and safety recipients.</strong> Government authorities, law enforcement,
                and others where we have a good faith belief that disclosure is required by law or
                reasonably necessary to prevent serious harm, investigate fraud, or enforce our Terms.
              </li>
              <li>
                <strong>Corporate transactions.</strong> An acquirer or successor in a merger,
                financing, reorganization, or sale of assets, including a future reincorporation of
                the business.
              </li>
            </List>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-display-m text-text-primary">5. Data retention</h2>
            <p className="mt-4 text-body text-text-secondary">
              We keep personal data only as long as needed for the purposes described here.
            </p>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Category</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Retention</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Account and profile data</DataTable.Cell>
                    <DataTable.Cell>For the life of the account, then 90 days after closure</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Deliverables and Library files</DataTable.Cell>
                    <DataTable.Cell>Until you delete them, or 30 days after termination, then deleted</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Briefs, run records, and agent logs</DataTable.Cell>
                    <DataTable.Cell>12 months, then deleted or de-identified</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Execution environment contents</DataTable.Cell>
                    <DataTable.Cell>Destroyed when the run ends</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Error and performance monitoring data</DataTable.Cell>
                    <DataTable.Cell>90 days</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Product analytics</DataTable.Cell>
                    <DataTable.Cell>24 months</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Billing and transaction records</DataTable.Cell>
                    <DataTable.Cell>7 years, to meet tax and accounting obligations</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Support correspondence</DataTable.Cell>
                    <DataTable.Cell>24 months</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Marketing contact data</DataTable.Cell>
                    <DataTable.Cell>Until you opt out, then retained on a suppression list so we do not contact you again</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Backups</DataTable.Cell>
                    <DataTable.Cell>Purged on a rolling cycle of up to 35 days</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
            <p className="mt-4 text-body text-text-secondary">
              Deletion requests are honored across live systems promptly and work through backups on
              the cycle above. We may retain data longer where required by law or where necessary to
              establish or defend a legal claim.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-display-m text-text-primary">6. Your rights and choices</h2>
            <p className="mt-4 text-body text-text-secondary">
              Depending on where you live, you may have the right to:
            </p>
            <List className="mt-3">
              <li>Know what personal data we hold and how we use it.</li>
              <li>Access a copy of it, and receive it in a portable format.</li>
              <li>Correct inaccurate data.</li>
              <li>Delete data, subject to exceptions.</li>
              <li>Opt out of targeted advertising, sale, or sharing of personal data.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Object to or restrict certain processing.</li>
              <li>Withdraw consent where processing relies on it.</li>
              <li>Appeal a denial of a request.</li>
            </List>
            <p className="mt-4 text-body text-text-secondary">
              To exercise any of these, email{" "}
              <a href="mailto:privacy@alyvon.com" className="text-accent-strong underline-offset-4 hover:underline">
                privacy@alyvon.com
              </a>
              . We will verify your identity before acting, usually by confirming control of the email
              address on the account. We respond within 45 days where US state law applies, and within
              one month where the GDPR or UK GDPR applies, with extensions where the law permits. We
              will not discriminate against you for exercising a right.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>A note on accuracy.</strong> We cannot guarantee that AI-generated Outputs are
              factually accurate about any person. If an Output contains inaccurate personal data
              about you, tell us and we will make reasonable efforts to address it, but the nature of
              these systems means we cannot promise a specific correction will hold across future
              generations.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>If your data is in a customer’s account,</strong> we will route your request to
              that customer, who is the controller of it.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-display-m text-text-primary">7. Cookies and analytics</h2>
            <p className="mt-4 text-body text-text-secondary">
              We use cookies and similar technologies for authentication and session management, for
              security, to remember preferences, and to measure how our website and product are used.
              Our marketing website uses a tag management container that loads analytics tags and
              advertising platform tags. Our application loads no advertising tags.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              You can accept or decline non-essential cookies using the Your Privacy Choices link in
              our website footer, and you can change that choice at any time. You can also manage
              cookies through your browser. Blocking cookies that are strictly necessary will break
              parts of the Services.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-display-m text-text-primary">8. US state privacy rights</h2>
            <p className="mt-4 text-body text-text-secondary">
              If you are a resident of California, Colorado, Connecticut, Virginia, Texas, Oregon,
              Montana, Florida, or another state with a comprehensive privacy law, the rights in
              Section 6 apply to you.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Categories collected, disclosed, and purposes</strong> are described in Sections
              1, 2, and 4. We collect identifiers, commercial information, internet activity,
              geolocation inferred from IP address, professional information, and the content you
              submit.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Sale and sharing.</strong> We do not sell personal data for money. Our marketing
              website uses advertising platform tags, and that data flow counts as sharing personal
              data for cross-context behavioral advertising under the California Consumer Privacy Act,
              and as processing for targeted advertising under Colorado, Connecticut, Virginia, Texas,
              Oregon, and similar state laws. You may opt out at any time using the Your Privacy
              Choices link in our website footer, or by emailing privacy@alyvon.com. We honor Global
              Privacy Control signals sent by your browser. We do not sell or share the content you
              submit to the platform, and our application carries no advertising tags.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Sensitive personal data.</strong> We do not collect sensitive personal
              information for the purpose of inferring characteristics, and we do not use or disclose
              it beyond the purposes permitted without a right to limit.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Authorized agents</strong> may submit requests on your behalf with written proof
              of authorization.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-display-m text-text-primary">9. International users and transfers</h2>
            <p className="mt-4 text-body text-text-secondary">
              We operate from the United States, and our infrastructure and service providers are
              primarily located there. If you use the Services from outside the United States, your
              personal data is transferred to and processed in the United States, where data
              protection law differs from that of your country.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              The Services are offered to businesses in the United States, and we do not currently
              market or target them to individuals in the European Economic Area, the United Kingdom,
              or Switzerland. If you access the Services from outside the United States, you do so on
              your own initiative. Where we transfer personal data out of the European Economic Area,
              the United Kingdom, or Switzerland, we put an appropriate transfer mechanism in place
              before doing so.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Legal bases under the GDPR and UK GDPR.</strong> Where those laws apply, we
              process personal data on the basis of contract for providing and administering the
              Services and processing payment, legitimate interests for securing and improving the
              Services, preventing abuse, and marketing to business contacts, consent for optional
              cookies and certain marketing, and legal obligation for tax, accounting, and lawful
              requests.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              You have the right to lodge a complaint with your local supervisory authority.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-display-m text-text-primary">10. SMS and email communications</h2>
            <p className="mt-4 text-body text-text-secondary">
              If you provide a phone number and opt in, we may send transactional SMS messages, such
              as appointment and demo reminders. We send marketing SMS only where you have given
              separate, specific consent. Transactional and marketing consent are collected separately
              and are never bundled into one checkbox. Message and data rates may apply. Reply STOP to
              opt out of SMS and HELP for assistance.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Marketing email includes an unsubscribe link and our physical postal address in every
              message. Unsubscribing from marketing does not stop operational, billing, or security
              notices while you hold an account.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-display-m text-text-primary">11. Security</h2>
            <p className="mt-4 text-body text-text-secondary">
              We maintain administrative, technical, and organizational safeguards designed to protect
              personal data, including tenant isolation and row-level access controls in our database,
              encryption in transit and at rest, isolated per-run execution environments, time-limited
              signed access to stored files, scoped credential brokering for connected applications,
              access logging, and content scrubbing before data reaches our error monitoring provider.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              No system is completely secure and we cannot guarantee absolute security. If we become
              aware of a security incident affecting your personal data, we will notify you without
              undue delay and as required by law.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-display-m text-text-primary">12. Children</h2>
            <p className="mt-4 text-body text-text-secondary">
              The Services are for business use and are not directed to anyone under 18. We do not
              knowingly collect personal data from children. If you believe a child has provided us
              personal data, email privacy@alyvon.com and we will investigate and delete it where
              appropriate.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-display-m text-text-primary">13. Changes to this policy</h2>
            <p className="mt-4 text-body text-text-secondary">
              We may update this policy. We will change the effective date at the top and, for
              material changes, notify account holders by email or in-product notice before the change
              takes effect.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-display-m text-text-primary">14. Contact</h2>
            <p className="mt-4 text-body text-text-primary">
              <strong>Skyyr Digital LLC, doing business as Alyvon</strong>
            </p>
            <p className="mt-1 text-body text-text-secondary">13256 Strode Ln, Windermere, FL 34786</p>
            <p className="mt-1 text-body text-text-secondary">Phone: 407-993-2979</p>
            <p className="mt-1 text-body text-text-secondary">
              Privacy and legal:{" "}
              <a href="mailto:privacy@alyvon.com" className="text-accent-strong underline-offset-4 hover:underline">
                privacy@alyvon.com
              </a>
            </p>
            <p className="mt-1 text-body text-text-secondary">
              General and support:{" "}
              <a href="mailto:support@alyvon.com" className="text-accent-strong underline-offset-4 hover:underline">
                support@alyvon.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
