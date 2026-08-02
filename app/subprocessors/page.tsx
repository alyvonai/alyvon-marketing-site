import Link from "next/link"
import { Section } from "@/components/marketing/section"
import { DataTable } from "@/components/ui/typography"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Subprocessors",
  description:
    "The third-party providers Alyvon uses to operate the Services, what each processes, and where it is located.",
  path: "/subprocessors",
})

export default function SubprocessorsPage() {
  return (
    <>
      <Section tone="canvas" spacing="lg">
        <span className="font-mono text-label uppercase text-text-secondary">Legal</span>
        <h1 className="mt-3 text-display-l text-text-primary">Subprocessors</h1>
        <p className="mt-4 text-body text-text-secondary">Last updated: August 2, 2026</p>
      </Section>

      <Section tone="surface" spacing="lg">
        <div className="mx-auto flex max-w-[80ch] flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-body text-text-secondary">
              Alyvon is a product of Skyyr Digital LLC. We use the third-party providers listed
              below to operate the Services. Each has access to customer data only as necessary to
              perform its function, and each is bound by contractual confidentiality and data
              protection obligations.
            </p>
            <p className="text-body text-text-secondary">
              This page is referenced by Section 11 of our{" "}
              <Link href="/terms" className="text-accent-strong underline-offset-4 hover:underline">
                Terms of Service
              </Link>{" "}
              and Section 4 of our{" "}
              <Link href="/privacy" className="text-accent-strong underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Infrastructure and platform */}
          <div>
            <h2 className="text-display-m text-text-primary">Infrastructure and platform</h2>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Provider</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Function</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Data it may process</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Location</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Supabase</DataTable.Cell>
                    <DataTable.Cell>Primary database, authentication, file storage, serverless functions</DataTable.Cell>
                    <DataTable.Cell>Account data, briefs, deliverables, organizational context, usage records</DataTable.Cell>
                    <DataTable.Cell>United States (East US, North Virginia)</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Google Cloud Platform</DataTable.Cell>
                    <DataTable.Cell>Agent execution service hosting (Cloud Run)</DataTable.Cell>
                    <DataTable.Cell>Briefs, agent output, execution logs, transient customer data during a run</DataTable.Cell>
                    <DataTable.Cell>United States (us-central1)</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Vercel</DataTable.Cell>
                    <DataTable.Cell>Web application and marketing site hosting, and AI Gateway routing for generative media</DataTable.Cell>
                    <DataTable.Cell>Account data in transit, request logs, IP addresses, generative media prompts and generated assets routed through Vercel AI Gateway</DataTable.Cell>
                    <DataTable.Cell>United States and global edge network</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>E2B</DataTable.Cell>
                    <DataTable.Cell>Isolated sandbox execution for code and file generation</DataTable.Cell>
                    <DataTable.Cell>Briefs, attachments, generated files, transient execution state during a single run</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
          </div>

          {/* AI model providers */}
          <div>
            <h2 className="text-display-m text-text-primary">AI model providers</h2>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Provider</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Function</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Data it may process</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Location</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Anthropic</DataTable.Cell>
                    <DataTable.Cell>Large language models powering Directors, specialists, and orchestration</DataTable.Cell>
                    <DataTable.Cell>Briefs, attachments, organizational context, agent output</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Google (accessed via Vercel AI Gateway)</DataTable.Cell>
                    <DataTable.Cell>Generative image and video models</DataTable.Cell>
                    <DataTable.Cell>Prompts and generated media assets for those specific features</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
            <p className="mt-4 text-body text-text-secondary">
              Generative media traffic is routed through Vercel AI Gateway, so Vercel is a
              subprocessor for that data path, listed under Infrastructure and platform above, in
              addition to hosting.
            </p>
            <p className="mt-4 text-body text-text-primary">
              <strong>Model training position, confirmed 2026-08-02.</strong> No AI provider in this
              table trains generative models on data we transmit on your behalf.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-body text-text-secondary">
              <li>
                <strong>Anthropic.</strong> Our commercial terms are no-training.
              </li>
              <li>
                <strong>Google.</strong> Google does not use data sent through its paid enterprise or
                developer interfaces, such as the Gemini API and Vertex AI, to train its generative
                models. Inputs are transiently logged by Google for safety and abuse monitoring.
              </li>
              <li>
                <strong>Vercel AI Gateway.</strong> Routes requests without training on the data
                passing through it.
              </li>
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h2 className="text-display-m text-text-primary">Integrations</h2>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Provider</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Function</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Data it may process</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Location</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Composio</DataTable.Cell>
                    <DataTable.Cell>OAuth broker and third-party tool execution for Connected Services</DataTable.Cell>
                    <DataTable.Cell>Third-party access tokens, data retrieved from and written to your connected applications</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
            <p className="mt-4 text-body text-text-secondary">
              Any third-party application you connect to Alyvon, for example your email provider,
              CRM, or code repository, whether connected through Composio or through a direct
              integration such as your own GoHighLevel account, is a system you control rather than a
              subprocessor of ours. Data flowing to it does so at your direction and is governed by
              that provider’s own terms.
            </p>
          </div>

          {/* Business operations */}
          <div>
            <h2 className="text-display-m text-text-primary">Business operations</h2>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Provider</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Function</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Data it may process</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Location</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Stripe</DataTable.Cell>
                    <DataTable.Cell>Payment processing and subscription billing</DataTable.Cell>
                    <DataTable.Cell>Billing contact details, payment method tokens, transaction records</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Resend</DataTable.Cell>
                    <DataTable.Cell>Transactional and notification email delivery</DataTable.Cell>
                    <DataTable.Cell>Recipient email addresses, email content, and delivery, bounce, and complaint events</DataTable.Cell>
                    <DataTable.Cell>United States (North Virginia, us-east-1)</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>GoHighLevel</DataTable.Cell>
                    <DataTable.Cell>Booking, lead capture, and CRM for our marketing site (scheduling and contact forms), and delivery of generated media where we operate GoHighLevel on your behalf</DataTable.Cell>
                    <DataTable.Cell>Prospect and lead contact details submitted through the marketing site booking widget and forms, and generated media delivered to a connected location</DataTable.Cell>
                    <DataTable.Cell>United States (Ashburn, Phoenix, Dallas)</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>PostHog</DataTable.Cell>
                    <DataTable.Cell>Product analytics</DataTable.Cell>
                    <DataTable.Cell>Usage events, feature interaction, pseudonymous user identifiers</DataTable.Cell>
                    <DataTable.Cell>United States (US Cloud)</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Sentry</DataTable.Cell>
                    <DataTable.Cell>Error monitoring and performance tracing</DataTable.Cell>
                    <DataTable.Cell>Error events, stack traces, run and organization identifiers. Content is scrubbed before transmission.</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Google (Tag Manager, analytics, and advertising tags)</DataTable.Cell>
                    <DataTable.Cell>Marketing website tag management, analytics, and advertising measurement</DataTable.Cell>
                    <DataTable.Cell>Website visitor data, IP addresses, referral data, cookie identifiers. Marketing site only, not the application.</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
          </div>

          {/* Sales and marketing providers */}
          <div>
            <h2 className="text-display-m text-text-primary">
              Providers we use for our own sales and marketing
            </h2>
            <p className="mt-4 text-body text-text-secondary">
              These providers do not touch customer data inside the Services. They process business
              contact details of prospects and marketing contacts, for which Alyvon is the
              controller. They are listed here so that anyone exercising a privacy right over their
              own contact data can see where it sits.
            </p>
            <div className="mt-4 overflow-x-auto">
              <DataTable>
                <DataTable.Head>
                  <DataTable.Row>
                    <DataTable.HeaderCell>Provider</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Function</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Data it may process</DataTable.HeaderCell>
                    <DataTable.HeaderCell>Location</DataTable.HeaderCell>
                  </DataTable.Row>
                </DataTable.Head>
                <DataTable.Body>
                  <DataTable.Row>
                    <DataTable.Cell>Apollo</DataTable.Cell>
                    <DataTable.Cell>Prospect sourcing and contact enrichment</DataTable.Cell>
                    <DataTable.Cell>Business contact details, company data</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Instantly</DataTable.Cell>
                    <DataTable.Cell>Outbound email delivery</DataTable.Cell>
                    <DataTable.Cell>Prospect email addresses, message content, engagement and bounce events</DataTable.Cell>
                    <DataTable.Cell>United States</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>HeyReach</DataTable.Cell>
                    <DataTable.Cell>LinkedIn outbound sequencing</DataTable.Cell>
                    <DataTable.Cell>LinkedIn profile data, connection and message activity</DataTable.Cell>
                    <DataTable.Cell>European Union (HeyReach Inc OU, an Estonian entity). Specific hosting region not publicly disclosed.</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>GoHighLevel</DataTable.Cell>
                    <DataTable.Cell>CRM of record for prospects and pipeline</DataTable.Cell>
                    <DataTable.Cell>Prospect contact details, pipeline stage, communications history</DataTable.Cell>
                    <DataTable.Cell>United States (Ashburn, Phoenix, Dallas)</DataTable.Cell>
                  </DataTable.Row>
                </DataTable.Body>
              </DataTable>
            </div>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-display-m text-text-primary">Changes to this list</h2>
            <p className="mt-4 text-body text-text-secondary">
              We may add or replace subprocessors as the Services evolve. We will update this page
              and, for customers with an executed data processing addendum, provide notice as
              required by that addendum before a new subprocessor begins processing personal data.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Questions:{" "}
              <a href="mailto:legal@alyvon.com" className="text-accent-strong underline-offset-4 hover:underline">
                legal@alyvon.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
