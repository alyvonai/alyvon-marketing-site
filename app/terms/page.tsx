import Link from "next/link"
import { Section } from "@/components/marketing/section"
import { List, Blockquote } from "@/components/ui/typography"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern access to and use of the Alyvon platform and Services.",
  path: "/terms",
})

const orderedListClass =
  "mt-4 flex list-decimal flex-col gap-2 pl-5 text-body text-text-secondary marker:text-text-tertiary"

export default function TermsPage() {
  return (
    <>
      <Section tone="canvas" spacing="lg">
        <span className="font-mono text-label uppercase text-text-secondary">Legal</span>
        <h1 className="mt-3 text-display-l text-text-primary">Terms of Service</h1>
        <p className="mt-4 text-body text-text-secondary">Effective date: August 2, 2026</p>
      </Section>

      <Section tone="surface" spacing="lg">
        <div className="mx-auto flex max-w-[72ch] flex-col gap-12">
          {/* Plain-language summary */}
          <Blockquote className="text-body-s">
            <p>
              <strong>Plain-language summary.</strong> This box is a convenience only and is not part
              of the agreement. If it conflicts with anything below, the sections below control.
            </p>
            <p className="mt-3">
              You direct AI agents to do work. They produce files. You own those files. You are
              responsible for checking them before you use them, and you are responsible for anything
              the agents do inside accounts you connect. We bill per completed task against a monthly
              allowance. AI output can be wrong, so do not treat it as reviewed professional work.
            </p>
          </Blockquote>

          {/* Intro */}
          <div className="flex flex-col gap-4">
            <p className="text-body text-text-secondary">
              These Terms of Service (the <strong>“Terms”</strong>) govern access to and use of the
              Alyvon platform, the Alyvon Marketing Hub, the Alyvon Analytics product line, and any
              associated applications, APIs, integrations, and websites (together, the{" "}
              <strong>“Services”</strong>). The Services are provided by Skyyr Digital LLC, a Florida
              limited liability company doing business as Alyvon (<strong>“Alyvon,” “we,” “us,” “our”</strong>).
              “Alyvon” is a trade name of Skyyr Digital LLC.
            </p>
            <p className="text-body text-text-secondary">
              These Terms form a binding contract between Alyvon and the organization or individual
              accessing the Services (<strong>“Customer,” “you,” “your”</strong>). They incorporate by
              reference the{" "}
              <a href="#acceptable-use" className="text-accent-strong underline-offset-4 hover:underline">
                Acceptable Use Policy
              </a>
              , the{" "}
              <Link href="/privacy" className="text-accent-strong underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              , and any order form, plan page, or supplemental terms we present to you.
            </p>
            <p className="text-body text-text-secondary">
              <strong>By creating an account, accessing the Services, or paying an invoice, you accept
              these Terms.</strong> If you accept on behalf of an organization, you represent that you
              are authorized to bind that organization, and “you” means that organization.
            </p>
            <p className="text-body text-text-secondary">
              <strong>The Services are offered for business use.</strong> They are not directed to
              consumers, children, or personal household use.
            </p>
          </div>

          {/* 1 */}
          <div>
            <h2 className="text-display-m text-text-primary">1. Who we are and what the Services do</h2>
            <p className="mt-4 text-body text-text-secondary">
              Alyvon is a platform for directing teams of AI agents. You submit a brief. A department
              Director agent, working with specialist sub-agents, plans and executes the work in an
              isolated execution environment and returns a finished deliverable, which may be a
              document, spreadsheet, presentation, PDF, image, web page, source code file, or project
              archive.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              Depending on your plan and configuration, the Services may also:
            </p>
            <List className="mt-3">
              <li>Run work automatically on a schedule or in response to an external event (<strong>“Routines”</strong>).</li>
              <li>Execute code and shell commands inside an isolated sandbox environment on your behalf.</li>
              <li>Read from and write to third-party applications you connect to your account.</li>
              <li>Retain organizational context, brand guidelines, and prior work to inform future output.</li>
            </List>
            <p className="mt-4 text-body text-text-secondary">
              Alyvon builds on large language models and other AI systems supplied by third parties.
              We are not the developer of those underlying models.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-display-m text-text-primary">2. Definitions</h2>
            <div className="mt-4 flex flex-col gap-3 text-body text-text-secondary">
              <p><strong>Account.</strong> Your registered organizational workspace on the Services, including all users provisioned under it.</p>
              <p><strong>Agent.</strong> A configured AI worker on the Services, including Directors, specialists, and the Chief of Staff orchestrator.</p>
              <p><strong>Task.</strong> A single brief you submit for execution. A <strong>Root Task</strong> is the top-level brief, distinct from any internal steps, sub-tasks, department hand-offs, or model calls the platform performs to complete it.</p>
              <p><strong>Run.</strong> One execution attempt by an Agent against a Task or sub-task.</p>
              <p><strong>Deliverable.</strong> A completed file or set of files returned to your Library against a Root Task.</p>
              <p><strong>Inputs.</strong> Anything you or your users submit to the Services, including briefs, attachments, brand guidelines, organizational context, prompts, configuration, and data retrieved from Connected Services at your direction.</p>
              <p><strong>Outputs.</strong> Anything the Services generate in response to Inputs, including Deliverables, drafts, summaries, code, and intermediate work product.</p>
              <p><strong>Actions.</strong> Operations the Services perform outside the generation of text or files, including executing code, calling third-party APIs, reading or writing records in Connected Services, sending or scheduling communications, and modifying repositories or files.</p>
              <p><strong>Customer Materials.</strong> Inputs and Outputs, collectively.</p>
              <p><strong>Connected Service.</strong> Any third-party application, account, or system you authorize the Services to access, whether through OAuth, an API key, a webhook, or any other credential or connection mechanism.</p>
              <p><strong>Documentation.</strong> The published product documentation, plan pages, pricing page, and security page for the Services, as updated from time to time.</p>
            </div>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-display-m text-text-primary">3. Accounts, users, and access</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Eligibility.</strong> You must be at least 18 years old and legally capable of
              entering a contract. You must not be barred from receiving the Services under applicable
              law, sanctions, or export control regulations.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Account information.</strong> You agree to provide accurate, current, and
              complete registration and billing information and to keep it current. We may use your
              Account contact details to send you operational, legal, security, and billing notices,
              and those notices satisfy any requirement that notice be in writing.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Credentials.</strong> You are responsible for safeguarding login credentials,
              API keys, and tokens associated with your Account. You may not share credentials outside
              your organization or permit access by anyone who is not an authorized user under your
              plan. Notify us immediately at legal@alyvon.com if you learn of unauthorized access.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Users and seats.</strong> Your plan sets the number of authorized users. You are
              responsible for all activity under your Account, including activity by your users,
              contractors, and anyone using credentials issued under your Account, whether or not
              authorized by you.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Administrators.</strong> If your Account has one or more administrators, those
              administrators may configure, view, export, and delete Customer Materials across the
              Account, provision and remove users, connect and disconnect Connected Services, change
              plan and billing settings, and adjust approval and automation settings. If you access
              the Services using an email address on a domain controlled by an organization, we may
              associate your access with that organization’s Account and grant its administrators the
              rights above.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Suspension for security.</strong> We may suspend an Account or a specific user,
              integration, or Agent immediately where we reasonably believe it is necessary to prevent
              security compromise, abuse, unlawful activity, harm to third parties, or material harm
              to the Services or other customers. We will notify you as soon as reasonably practicable.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-display-m text-text-primary">4. Plans, evaluation, and changes to the Services</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Plans and entitlements.</strong> The Services are offered in tiers. Your tier
              determines your monthly Deliverable allowance, the number of departments and Agents
              available to you, seat count, Routine limits, retention periods, and support level, all
              as set out on the pricing page or your order form.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Free trial.</strong> New Accounts receive a free trial that ends on the earlier
              of 14 days from Account creation or 10 completed Root Tasks. No payment method is
              required to start the trial. During the trial, Routines are limited to one active
              Routine, and certain features may be restricted or unavailable. Trials are for
              evaluation of the Services by your organization and may not be used to deliver services
              to third parties, to benchmark against competing products for publication, or to build a
              competing product. Trials are limited to one per organization. We may modify, shorten,
              or end a trial at any time.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Beta and preview features.</strong> We may make features available that are
              labeled beta, preview, early access, design partner, or similar. Those features are
              provided for evaluation, may change or be withdrawn at any time, are excluded from any
              service commitment, and are provided without warranty of any kind. Use them at your own
              risk and do not use them in production workflows where failure would cause material harm.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Changes to the Services.</strong> The Services are new and will change. We may
              add, modify, or remove features, change model providers or model versions, change
              capacity or rate limits, and discontinue Services or parts of them. Where a change
              materially reduces core functionality of a paid tier, we will provide at least 30 days
              notice and, if you object, allow you to terminate and receive a pro rata refund of
              prepaid fees for the unused remainder of your term. Urgent changes required for
              security, legal compliance, abuse prevention, or provider availability may be made
              without advance notice.
            </p>
          </div>

          {/* 5 — Acceptable use */}
          <div id="acceptable-use" className="scroll-mt-24">
            <h2 className="text-display-m text-text-primary">5. Acceptable use</h2>
            <p className="mt-4 text-body text-text-secondary">
              You will use the Services only in compliance with these Terms, the Documentation, and
              applicable law. You will not, and will not permit any user, Agent, Routine, or third
              party acting through your Account to:
            </p>
            <ol className={orderedListClass}>
              <li>Violate any applicable law or regulation, including laws governing privacy, data protection, marketing communications, consumer protection, securities, employment, export control, and sanctions.</li>
              <li>Infringe, misappropriate, or violate the intellectual property, publicity, privacy, or other rights of any person.</li>
              <li>Generate, distribute, or facilitate content that is unlawful, defamatory, harassing, fraudulent, deceptive, sexually explicit involving minors, or that promotes violence or self-harm.</li>
              <li>Use the Services or any Output to develop, train, fine-tune, evaluate for training purposes, or improve any competing artificial intelligence model, agent platform, or orchestration product, or to resell or provide the Services as a substitute product to third parties except as expressly permitted in a written agreement with us.</li>
              <li>Decompile, reverse engineer, disassemble, or attempt to derive the source code, model weights, system prompts, agent configurations, or underlying architecture of the Services, except to the extent this restriction is unenforceable under applicable law.</li>
              <li>Scrape, crawl, or systematically extract data from the Services other than through documented interfaces and within published rate limits.</li>
              <li>Use the Services or any Agent to gain unauthorized access to any system, account, network, or data, to test or probe security without written authorization from the system owner, or to develop or distribute malware, exploits, or credential harvesting tools.</li>
              <li>Circumvent, disable, reconfigure to defeat, or instruct an Agent to bypass any approval gate, rate limit, quota, metering mechanism, content filter, or other technical control in the Services.</li>
              <li>Use automated means to inflate, evade, or misreport usage, or to obtain Services beyond your paid entitlement.</li>
              <li>Interfere with or disrupt the Services or their infrastructure, including by introducing malicious code, overloading systems, or launching denial of service attacks.</li>
              <li>Submit to the Services any protected health information, payment card data, government-issued identification numbers, biometric identifiers, children’s data, or other data subject to heightened regulatory requirements, unless we have agreed in writing in advance to receive that category of data.</li>
              <li>Represent that any Output was produced or reviewed by a licensed professional, or present Output as legal, medical, tax, accounting, investment, or other regulated professional advice.</li>
              <li>Use Outputs or Actions as the sole basis for a decision that produces a legal or similarly significant effect on an individual, including decisions about employment, credit, housing, insurance, education, or access to essential services, without meaningful human review by a qualified person.</li>
              <li>Use the Services in the operation of safety-critical systems, including medical devices, life support, emergency response, critical infrastructure control, or vehicle operation.</li>
            </ol>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Outbound communications.</strong> If you use the Services to draft, schedule, or
              send email, SMS, direct messages, connection requests, or other outbound communications,
              you are solely responsible for compliance with all applicable communications law,
              including the CAN-SPAM Act, the Telephone Consumer Protection Act, CASL, the GDPR and
              ePrivacy rules, and the terms of any sending platform you connect. You are responsible
              for maintaining lawful basis or consent, accurate sender identification, a valid
              physical postal address, functioning unsubscribe and opt-out handling, and suppression
              list hygiene. Alyvon is not the sender of your communications and does not provide
              compliance review of them.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Underlying provider policies.</strong> Your use of the Services is additionally
              subject to the usage policies of the AI model providers powering the Services. We may
              pass through, and you agree to comply with, restrictions those providers impose. We may
              restrict or suspend functionality where required by a provider.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Enforcement.</strong> We may investigate suspected violations and may remove
              content, disable a Connected Service, restrict an Agent or Routine, suspend a user, or
              suspend or terminate the Account. Where practicable and lawful, we will notify you and
              give you an opportunity to cure.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-display-m text-text-primary">6. Inputs, Outputs, Deliverables, and ownership</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Your ownership of Inputs.</strong> As between you and Alyvon, you retain all
              right, title, and interest in Inputs. Nothing in these Terms transfers ownership of your
              data to us.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Your rights and warranties in Inputs.</strong> You represent and warrant that
              you hold all rights, licenses, consents, and permissions necessary for us to process
              your Inputs, to generate Outputs from them, to share Outputs as you direct, to transmit
              them to our subprocessors and model providers, and to take Actions in Connected Services
              at your direction. You are responsible for obtaining any consent required from
              individuals whose personal data appears in your Inputs.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Ownership of Outputs.</strong> Subject to the third-party rights described
              below, and to the extent Alyvon holds any right, title, or interest in Outputs generated
              for your Account, we assign that interest to you upon generation. This assignment is not
              conditioned on your continued compliance with these Terms. If you breach these Terms, our
              remedies are suspension, termination, and the other remedies stated here, not revocation
              of your ownership of previously generated Deliverables.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>License to us.</strong> You grant Alyvon a non-exclusive, worldwide,
              royalty-free license to host, store, reproduce, transmit, display, modify, and process
              Customer Materials solely as necessary to operate, secure, support, and provide the
              Services to you, to comply with law, and to enforce these Terms. This license ends when
              the relevant Customer Materials are deleted, subject to backup and legal retention.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Model training.</strong> We do not use your Customer Materials to train or
              fine-tune generative AI models, and our model providers do not train their generative
              models on data we transmit through their commercial interfaces. Those providers may
              transiently log inputs for their own safety and abuse monitoring. We may use aggregated,
              de-identified operational telemetry, such as token counts, error rates, latency, and
              feature usage, that does not identify you or reveal the content of your Customer
              Materials, to operate and improve the Services. We may retain and review specific
              Customer Materials where necessary to investigate a suspected violation of these Terms,
              to respond to a support request you initiate, or to comply with law.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Non-uniqueness of Outputs.</strong> AI systems generate output probabilistically.
              Other customers may submit similar Inputs and receive similar or identical Outputs. We
              make no representation that any Output is unique, original, novel, or free of similarity
              to material produced for others or to pre-existing third-party works. We do not warrant
              that any Output is eligible for copyright, trademark, or patent protection in any
              jurisdiction, and the legal status of AI-generated material is unsettled and varies by
              jurisdiction.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>No warranty of non-infringement in Outputs.</strong> We do not warrant that
              Outputs do not infringe third-party rights. You are responsible for clearing rights
              before commercial use, including for any brand names, taglines, images, code, or text a
              Deliverable contains.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-display-m text-text-primary">7. Accuracy, human review, and reliance</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>AI output can be wrong.</strong> Large language models and agentic systems are a
              developing technology. You acknowledge and agree that:
            </p>
            <ol className={orderedListClass}>
              <li>Outputs may contain factual errors, fabricated citations, invented statistics, incorrect calculations, non-functional or insecure code, and material inaccuracies, and errors may appear plausible precisely because Outputs are detailed and confidently worded.</li>
              <li>Actions may fail, partially complete, or produce unintended results in Connected Services.</li>
              <li>Outputs may reflect biases present in training data or in the Inputs you supply.</li>
              <li>Outputs may be out of date and do not necessarily reflect current facts, law, pricing, or availability.</li>
              <li>Outputs do not represent the views of Alyvon and are not reviewed by Alyvon before delivery.</li>
            </ol>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Your review obligation.</strong> You are solely responsible for reviewing,
              verifying, testing, and approving every Deliverable and every Action before you rely on
              it, publish it, send it, deploy it, or use it in a business decision. This obligation
              applies with particular force to factual claims, statistics, citations, legal or
              regulatory statements, financial figures, medical or safety content, and any code
              intended for a production environment.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>No professional advice.</strong> The Services do not provide legal, medical,
              tax, accounting, investment, insurance, or other regulated professional advice, and no
              professional relationship is formed by your use of them.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-display-m text-text-primary">8. Agentic Actions and Connected Services</h2>
            <p className="mt-4 text-body text-text-secondary">
              This section governs the most consequential aspect of the Services. Read it carefully.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>You are the principal.</strong> When you connect a third-party account, configure
              an Agent, or launch a Task or Routine, you authorize the Services to act as your agent
              within the scope of the credentials and permissions you have granted. Actions taken
              through your Account are your actions for all purposes as between you and Alyvon, and as
              between you and any third party.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Scope of authorization.</strong> You control which Connected Services are linked,
              which permission scopes are granted, which Agents may use them, and which Routines may
              run. You are responsible for granting the narrowest scopes appropriate, for reviewing
              granted scopes periodically, and for revoking access promptly when it is no longer needed
              or when a user leaves your organization. We are not responsible for over-broad
              permissions you grant.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Credentials and the integration provider.</strong> Connected Service credentials
              are held and brokered by our integration provider on your behalf. We do not receive or
              store your third-party account passwords. Your use of each Connected Service remains
              governed by that provider’s own terms and policies, and that provider may suspend, rate
              limit, or terminate your access independently of us.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Approval gates.</strong> The Services provide controls that can require human
              approval before an Agent performs certain classes of Action, including sending
              communications, publishing content, writing to external repositories or systems, and
              initiating payments. <strong>You are responsible for configuring, enabling, and
              maintaining approval settings appropriate to your risk tolerance, and for ensuring that
              approvals are reviewed by a person with authority to grant them.</strong> Default
              settings are not a recommendation for your circumstances. Where an approval control is
              available and you disable it, weaken it, or grant an Agent standing authorization, you
              accept the resulting risk.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Irreversible Actions.</strong> Some Actions cannot be undone, including sent
              messages, published content, deleted records, merged code, and completed transactions.
              Alyvon has no ability to recall an Action once it has executed in a third-party system.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Code execution.</strong> The Services execute code, shell commands, and scripts
              in an isolated sandbox environment at your direction and at the direction of Agents you
              configure. You are responsible for the code produced and executed under your Account,
              including its security, licensing, and fitness for purpose, and for any effect it has on
              systems you connect to.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Allocation of responsibility.</strong> To the maximum extent permitted by law,
              Alyvon is not responsible or liable for the consequences of Actions performed in
              Connected Services or in sandboxed execution at your direction or at the direction of
              Agents configured or invoked under your Account, including data loss, unintended sends,
              unauthorized disclosure resulting from permissions you granted, charges incurred with
              third parties, breach of a third party’s terms, or regulatory exposure. This allocation
              does not limit our obligations under Section 12 or our liability for our own gross
              negligence, willful misconduct, or fraud.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-display-m text-text-primary">9. Routines and automated execution</h2>
            <p className="mt-4 text-body text-text-secondary">
              Routines run without a person present at the moment of execution. You are responsible for
              the design, scheduling, scope, and monitoring of every Routine you enable, and for the
              Outputs and Actions each Routine produces. You will not configure a Routine that performs
              an irreversible or externally visible Action without an approval gate unless you have
              accepted that risk in your Account settings.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              We may impose and adjust limits on Routine frequency, concurrency, and volume. We may
              pause or disable a Routine that is producing runaway consumption, error loops, abusive
              volume, or instability, and we will notify you when we do.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-display-m text-text-primary">10. Fees, metering, and payment</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Fees.</strong> You will pay the fees for your plan as stated on the pricing page
              or your order form, plus applicable taxes. Fees are stated in US dollars.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>The billable unit.</strong> One billable Deliverable equals{" "}
              <strong>one completed Root Task</strong>, regardless of how many departments, Agents,
              specialists, Runs, model calls, or output files were involved in completing it, and
              regardless of the number of files returned. A Root Task that fails, errors out, or is
              cancelled by you before completion does not consume a Deliverable from your allowance and
              is not billable. Internal sub-tasks, department hand-offs, retries, and consultations do
              not count separately.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Allowances and overage.</strong> Each plan includes a monthly Deliverable
              allowance, a department count, and a seat count. Unused allowance does not roll over.
              Deliverables completed beyond your allowance are billed at your plan’s published overage
              rate and appear on your next invoice. We will notify the Account billing contact when
              consumption reaches 80% and 100% of the monthly allowance. You may set an overage cap in
              your Account settings, and if you set one, we will pause new Root Tasks once it is
              reached. If you do not set a cap, work continues and overage accrues without limit.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Billing period and renewal.</strong> Monthly plans renew monthly. Annual plans
              are billed in advance for a twelve month term and provide the discount stated on the
              pricing page. <strong>Annual plans commit you to a twelve month term.</strong> You may
              cancel an annual plan at any time to prevent renewal, but prepaid annual fees are not
              refundable except as expressly stated in these Terms or as required by law. Unless you
              cancel before the end of the then-current term, your plan renews automatically for a
              further term of the same length, and your payment method will be charged.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Cancellation.</strong> You may cancel from your billing settings or by contacting
              support@alyvon.com. Cancellation takes effect at the end of the current billing period.
              Access continues through that period. Outstanding overage charges remain due.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Price changes.</strong> We may change fees. We will give at least 30 days notice
              before a change takes effect for your Account, and no change will apply during a term for
              which you have already prepaid. If you do not accept a change, you may cancel before it
              takes effect.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Payment processing and non-payment.</strong> Payments are processed by a
              third-party processor. We are not liable for processor errors, but we will work in good
              faith to resolve them. If a payment fails or an invoice is more than 10 days overdue, we
              may suspend access after notice, and overdue amounts may accrue interest at 1.5% per
              month or the maximum rate permitted by law, whichever is lower. You will reimburse
              reasonable costs of collection.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Taxes.</strong> Fees exclude sales, use, VAT, GST, and similar taxes. You are
              responsible for those taxes other than taxes on our net income.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Non-refundable.</strong> Except where these Terms expressly provide a refund or
              applicable law requires one, all fees are non-refundable, including for partial periods,
              unused allowance, and Accounts suspended or terminated for breach.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-display-m text-text-primary">11. Data protection, security, and confidentiality</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Privacy.</strong> Our handling of personal data is described in the{" "}
              <Link href="/privacy" className="text-accent-strong underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              , which forms part of these Terms.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Data processing.</strong> Where we process personal data on your behalf, you are
              the controller and we are the processor. If you require a data processing addendum,
              contact legal@alyvon.com. If a DPA is executed between the parties, it controls over this
              Section as to the processing of personal data.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Subprocessors.</strong> We use subprocessors to provide the Services, including
              cloud hosting, database and storage providers, sandboxed execution providers, AI model
              providers, an integration and OAuth provider, payment processing, analytics, error
              monitoring, and email delivery. A current list is available at{" "}
              <Link href="/subprocessors" className="text-accent-strong underline-offset-4 hover:underline">
                alyvon.com/subprocessors
              </Link>
              . We remain responsible for our subprocessors’ performance of our obligations.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Security.</strong> We maintain administrative, technical, and organizational
              safeguards designed to protect Customer Materials, including tenant isolation, row-level
              access controls, encryption in transit and at rest, isolated per-run execution
              environments, signed and time-limited access to stored files, and access logging. Our
              current practices are described on the security page. No system is perfectly secure, and
              we do not guarantee that the Services cannot be compromised.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Incident notice.</strong> We will notify you without undue delay after becoming
              aware of a security incident affecting your Customer Materials, and will provide
              information reasonably available to us about the incident and the steps taken.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Your security obligations.</strong> You are responsible for access control within
              your organization, for the security of Connected Services, for revoking credentials on
              user departure, and for choosing appropriate approval settings.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Confidentiality.</strong> Each party may receive non-public information of the
              other. Each party will use the other’s confidential information only to perform under
              these Terms and will protect it with at least reasonable care. Confidential information
              does not include information that is public through no fault of the receiving party,
              independently developed, or rightfully received from a third party. A party may disclose
              confidential information where legally compelled, after giving notice where lawful.
              Customer Materials are your confidential information. The Services, Documentation, pricing
              not publicly posted, and non-public feature roadmaps are our confidential information.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-display-m text-text-primary">12. Feedback</h2>
            <p className="mt-4 text-body text-text-secondary">
              If you send us ideas, suggestions, bug reports, ratings, or other feedback about the
              Services (<strong>“Feedback”</strong>), you grant us a perpetual, irrevocable, worldwide,
              royalty-free, sublicensable license to use and exploit that Feedback for any purpose
              without obligation or compensation to you. Do not send us Feedback you consider
              confidential or that contains third-party confidential information.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-display-m text-text-primary">13. Our intellectual property</h2>
            <p className="mt-4 text-body text-text-secondary">
              Alyvon and its licensors retain all right, title, and interest in the Services, including
              software, models and model configurations, agent designs and system prompts,
              orchestration logic, user interfaces, Documentation, and all improvements to them. These
              Terms grant you a limited, non-exclusive, non-transferable, revocable right to access and
              use the Services during your subscription for your internal business purposes, and
              nothing more. All rights not expressly granted are reserved.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Trademarks and publicity.</strong> You may not use our names, logos, or marks
              without our prior written permission, except that you may factually state that you use
              the Services. We may identify you as a customer and use your name and logo in marketing
              materials and on our website, unless you opt out at any time by notifying us at
              support@alyvon.com. We will stop within a reasonable period after receiving your notice.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-display-m text-text-primary">14. Third-party content and services</h2>
            <p className="mt-4 text-body text-text-secondary">
              The Services may surface, retrieve, or integrate content, data, and services provided by
              third parties. We do not control third-party content or services, do not endorse them,
              and make no representations or warranties about them. Your use of them is at your own risk
              and subject to their terms. We are not liable for any loss arising from third-party
              content, services, integrations, or their unavailability, modification, or
              discontinuation.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="text-display-m text-text-primary">15. Term, suspension, and termination</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Term.</strong> These Terms apply from your first access to the Services and
              continue until your Account is terminated.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Termination by you.</strong> You may terminate at any time by cancelling your
              subscription and closing your Account. Section 10 governs refunds.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Termination or suspension by us.</strong> We may suspend or terminate your
              access, in whole or in part, immediately and without refund if you materially breach
              these Terms or the Acceptable Use Policy, if you fail to pay, if we are required to do so
              by law or by a provider, or if your use presents a security, legal, or reputational risk
              to us, our customers, or third parties. We may also terminate for convenience on 60 days
              notice, in which case we will refund prepaid fees for the unused remainder of your term
              on a pro rata basis. We may terminate a free Account that has been inactive for more than
              12 months after notice.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Effect of termination.</strong> Access ends. For 30 days after termination you
              may export your Deliverables and Customer Materials through the Services or by request to
              support@alyvon.com. After that period we may delete Customer Materials, subject to backup
              cycles and any legal retention obligation. You remain liable for fees accrued before
              termination, including outstanding overage.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Survival.</strong> Sections 5 (as to obligations accrued), 6, 7, 8 (allocation of
              responsibility), 10 (as to amounts owed), 11 (confidentiality), 12, 13, 14, and 15
              through 20 survive termination.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h2 className="text-display-m text-text-primary">16. Disclaimer of warranties</h2>
            <p className="mt-4 text-body text-text-secondary">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES, OUTPUTS, DELIVERABLES,
              AND ACTIONS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY
              KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. ALYVON AND ITS SUPPLIERS DISCLAIM ALL
              IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
              NON-INFRINGEMENT, ACCURACY, RELIABILITY, AVAILABILITY, SECURITY, AND ANY WARRANTY ARISING
              FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR TRADE USAGE.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE,
              THAT DEFECTS WILL BE CORRECTED, THAT OUTPUTS WILL BE ACCURATE, COMPLETE, ORIGINAL,
              NON-INFRINGING, OR FIT FOR YOUR PURPOSE, OR THAT THE SERVICES WILL PRODUCE ANY PARTICULAR
              BUSINESS OUTCOME. WE DO NOT WARRANT THAT ACTIONS WILL EXECUTE AS INTENDED IN CONNECTED
              SERVICES.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              SOME JURISDICTIONS DO NOT ALLOW CERTAIN DISCLAIMERS, SO PARTS OF THIS SECTION MAY NOT
              APPLY TO YOU.
            </p>
          </div>

          {/* 17 */}
          <div>
            <h2 className="text-display-m text-text-primary">17. Limitation of liability</h2>
            <p className="mt-4 text-body text-text-secondary">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY, NOR OUR RESPECTIVE
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS, WILL BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
              DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST BUSINESS, LOSS OF GOODWILL, BUSINESS
              INTERRUPTION, OR LOSS OR CORRUPTION OF DATA, ARISING OUT OF OR RELATED TO THESE TERMS OR
              THE SERVICES, UNDER ANY THEORY OF LIABILITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALYVON’S TOTAL AGGREGATE LIABILITY
              ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF
              (A) THE TOTAL FEES YOU PAID TO ALYVON FOR THE SERVICES IN THE TWELVE MONTHS IMMEDIATELY
              PRECEDING THE EVENT GIVING RISE TO THE CLAIM, AND (B) ONE HUNDRED US DOLLARS ($100).
            </p>
            <p className="mt-4 text-body text-text-secondary">
              THE EXCLUSIONS AND LIMITS IN THIS SECTION DO NOT APPLY TO: YOUR PAYMENT OBLIGATIONS UNDER
              SECTION 10, YOUR INDEMNIFICATION OBLIGATIONS UNDER SECTION 18, YOUR BREACH OF SECTION 5 OR
              SECTION 13, EITHER PARTY’S BREACH OF CONFIDENTIALITY OBLIGATIONS, OR LIABILITY THAT CANNOT
              BE LIMITED UNDER APPLICABLE LAW, INCLUDING LIABILITY FOR FRAUD, GROSS NEGLIGENCE, OR
              WILLFUL MISCONDUCT.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              THESE LIMITATIONS ARE AN ESSENTIAL BASIS OF THE BARGAIN AND REFLECT THE ALLOCATION OF RISK
              BETWEEN THE PARTIES. THE FEES CHARGED WOULD BE SUBSTANTIALLY HIGHER WITHOUT THEM.
            </p>
          </div>

          {/* 18 */}
          <div>
            <h2 className="text-display-m text-text-primary">18. Indemnification</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>By you.</strong> You will defend, indemnify, and hold harmless Alyvon and its
              affiliates, officers, directors, employees, and agents from and against any third-party
              claim, and any resulting losses, damages, liabilities, settlements, and reasonable
              attorneys’ fees, arising out of or related to: your Inputs, your use of Outputs and
              Deliverables, any Action taken through your Account or in a Connected Service, your
              outbound communications, your breach of these Terms or the Acceptable Use Policy, your
              violation of law or of any third party’s rights, and any product or service you develop
              or deliver using the Services.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>By us.</strong> We will defend you against a third-party claim alleging that the
              Services, as provided by us and used in accordance with these Terms, infringe that third
              party’s US patent, copyright, or trade secret, and we will pay damages finally awarded or
              agreed in settlement. This obligation does not apply to claims arising from Outputs, from
              your Inputs, from Connected Services or third-party content, from modifications not made
              by us, from use in combination with anything not supplied by us, from beta or preview
              features, or from use in violation of these Terms. If the Services become subject to such
              a claim, we may procure the right to continue use, modify the Services, or terminate the
              affected Services and refund prepaid unused fees. This is our sole liability and your
              exclusive remedy for infringement claims. <strong>Our indemnity does not extend to
              Outputs.</strong>
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Procedure.</strong> The indemnified party will promptly notify the indemnifying
              party, give it sole control of the defense, and provide reasonable cooperation. The
              indemnifying party will not settle in a way that imposes obligation or admission on the
              indemnified party without consent. The indemnified party may participate with its own
              counsel at its own expense.
            </p>
          </div>

          {/* 19 */}
          <div>
            <h2 className="text-display-m text-text-primary">19. General</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Changes to these Terms.</strong> We may update these Terms. For material changes
              we will provide at least 30 days notice by email to the Account contact or by in-product
              notice before the change takes effect. Continued use after the effective date constitutes
              acceptance. If you do not accept, you must stop using the Services and may terminate, with
              a pro rata refund of prepaid fees for the unused remainder of your term.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Notices.</strong> Notices to you may be sent to the email address on your Account
              or posted in-product. Notices to us must be sent to legal@alyvon.com and to Skyyr Digital
              LLC dba Alyvon, 13256 Strode Ln, Windermere, FL 34786.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Assignment.</strong> You may not assign these Terms without our prior written
              consent, except to a successor in a merger or sale of substantially all assets that is
              not a competitor of Alyvon. We may assign these Terms freely, including to an affiliate or
              to a successor entity in connection with a corporate reorganization, reincorporation,
              financing, merger, or sale of substantially all assets. Any attempted assignment in
              violation of this section is void.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Independent contractors.</strong> The parties are independent contractors.
              Nothing creates a partnership, joint venture, agency, or employment relationship, except
              for the limited agency described in Section 8.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Force majeure.</strong> Neither party is liable for failure or delay caused by
              events beyond its reasonable control, including acts of God, war, terrorism, labor
              disputes, government action, internet or utility failure, and the failure, suspension, or
              discontinuation of a third-party model provider, cloud provider, or integration provider.
              This does not excuse payment obligations.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Entire agreement.</strong> These Terms, together with the Privacy Policy,
              Acceptable Use Policy, any DPA, and any order form, are the entire agreement and supersede
              prior agreements on this subject. Terms in your purchase order or vendor forms are void
              and have no effect.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Order of precedence.</strong> A signed order form or master agreement controls
              over these Terms. These Terms control over the Documentation.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Severability, waiver, headings.</strong> If a provision is unenforceable, it is
              modified to the minimum extent necessary or severed, and the rest remains in effect.
              Failure to enforce is not a waiver. Headings are for convenience only.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>No third-party beneficiaries.</strong> Except that our suppliers and licensors
              are intended beneficiaries of Sections 16 and 17, there are no third-party beneficiaries.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Export and sanctions.</strong> You represent that you are not located in,
              organized under the laws of, or ordinarily resident in a country subject to comprehensive
              US sanctions, and that you are not on any US restricted party list. You will not export or
              provide access to the Services in violation of export control or sanctions law.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>US government users.</strong> The Services are commercial computer software
              developed at private expense. Government users receive only the rights granted to all
              other users under these Terms.
            </p>
          </div>

          {/* 20 */}
          <div>
            <h2 className="text-display-m text-text-primary">20. Governing law and disputes</h2>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Governing law.</strong> These Terms are governed by the laws of the State of
              Florida, excluding its conflict of laws rules and the UN Convention on Contracts for the
              International Sale of Goods.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Venue.</strong> The parties submit to the exclusive jurisdiction of the state and
              federal courts located in Orange County, Florida, and waive any objection to venue,
              forum, or inconvenient forum in those courts.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Jury and class action waiver.</strong> TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW, EACH PARTY WAIVES ANY RIGHT TO A TRIAL BY JURY. EACH PARTY MAY BRING
              CLAIMS ONLY IN ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
              PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Attorneys’ fees.</strong> In any action to enforce these Terms, the prevailing
              party is entitled to recover its reasonable attorneys’ fees and costs.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Equitable relief.</strong> Breach of Section 5, Section 11, or Section 13 may
              cause irreparable harm for which damages are inadequate, and the non-breaching party may
              seek injunctive relief without posting bond.
            </p>
            <p className="mt-4 text-body text-text-secondary">
              <strong>Limitations period.</strong> Any claim must be brought within one year after the
              cause of action accrues, or it is permanently barred, except where a longer period is
              required by law.
            </p>
          </div>

          {/* 21 */}
          <div>
            <h2 className="text-display-m text-text-primary">21. Contact</h2>
            <p className="mt-4 text-body text-text-primary">
              <strong>Skyyr Digital LLC, doing business as Alyvon</strong>
            </p>
            <p className="mt-1 text-body text-text-secondary">13256 Strode Ln, Windermere, FL 34786</p>
            <p className="mt-1 text-body text-text-secondary">Phone: 407-993-2979</p>
            <p className="mt-1 text-body text-text-secondary">
              General, billing, and support:{" "}
              <a href="mailto:support@alyvon.com" className="text-accent-strong underline-offset-4 hover:underline">
                support@alyvon.com
              </a>
            </p>
            <p className="mt-1 text-body text-text-secondary">
              Legal, privacy, and security:{" "}
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
