import Link from "next/link"
import { Boxes, DatabaseZap, FileText, KeyRound, Lock, Mail, ScrollText, ShieldCheck, Vault } from "lucide-react"

import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Container } from "@/components/marketing/container"
import { PageHero } from "@/components/marketing/page-hero"
import { Eyebrow } from "@/components/home/ui"
import { DemoCta, PrimaryCta } from "@/components/home/ctas"
import { CopyTemplateButton } from "@/components/blog/copy-template-button"
import { CTA, SUPPORT_EMAIL } from "@/lib/site"

// Security page. Architecture and operating practice only; every statement below is one
// the site already makes (homepage Client IT section, Platform harness, Terms section 8).
//
// FLAG carried from the source document (spec section 10 open question): security
// certifications (e.g. SOC 2) are intentionally not referenced anywhere on this page
// because no auditor or certification status was confirmed in the source audit. If a
// certification exists, add it with the auditor named -- do not add a certification
// claim without that.
export const metadata = buildMetadata({
  title: "Security",
  description:
    "How Alyvon protects client data: read-only discovery, every call logged, access revocable in one click, approval gates, and no model training on your data.",
  path: "/security",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Security", path: "/security" },
]

const COMMITMENTS = [
  { icon: Lock, title: "Read-only during discovery", body: "Alyvon reads the client’s systems to check data readiness. It never writes to them during discovery." },
  { icon: ScrollText, title: "Every call logged", body: "Each query and API call is recorded, and the client can review any of it." },
  { icon: KeyRound, title: "Revoke any time", body: "Access is granted per client and per system, and the client can pull it in one click." },
  { icon: Vault, title: "A vault per client", body: "Connections, API keys and example outputs are stored per client and never shared across engagements." },
  { icon: ShieldCheck, title: "Approval gates", body: "Anything that sends, publishes or spends waits for a person’s approval before it runs." },
  { icon: Boxes, title: "Isolated sandboxes", body: "Each task runs in its own sandbox, created fresh and destroyed when the task finishes." },
  { icon: DatabaseZap, title: "Credentials held by the provider", body: "OAuth credentials sit with our integrations provider. Alyvon never stores third-party passwords." },
  { icon: FileText, title: "No training on your data", body: "Your data and your clients’ data are not used to train the underlying models." },
]

const DETAILS: { eyebrow: string; title: string; body: string[] }[] = [
  {
    eyebrow: "Isolation",
    title: "How work is isolated",
    body: [
      "Each task runs inside its own sandbox, created fresh and destroyed once the task finishes. Nothing persists between tasks by default.",
      "Agents work from the scope, the files and the connections a task needs. They do not have open-ended access to other systems.",
    ],
  },
  {
    eyebrow: "Human in the loop",
    title: "Approval gates",
    body: [
      "Agents can draft an email, build a campaign or prepare a payment action. They cannot send it, publish it or spend money on their own.",
      "Any action that sends, publishes or pays waits for a human approval step before it executes, from the desk or the phone.",
    ],
  },
  {
    eyebrow: "Client systems",
    title: "Access and credentials",
    body: [
      "Alyvon connects to 1,000+ integrations. Those connections run through our integrations provider, which holds the OAuth credentials on your behalf. Alyvon does not store third-party passwords.",
      "Access is scoped per client and per system, read-only during discovery, logged call by call, and revocable by the client at any time.",
    ],
  },
  {
    eyebrow: "Data use",
    title: "What happens to the data",
    body: [
      "Your data is not used to train the underlying models.",
      "Task data lives inside the sandbox for that task and is not carried forward once the task ends, beyond the finished deliverable you receive.",
    ],
  },
]

const IT_SUMMARY = [
  "Alyvon security summary for client IT",
  "",
  "- Read-only access to client systems during discovery; nothing is written.",
  "- Every query and API call is logged and available for the client to review.",
  "- Access is granted per client and per system, and can be revoked in one click.",
  "- Connections, keys and outputs are stored per client, never shared across engagements.",
  "- OAuth credentials are held by the integrations provider; no third-party passwords are stored.",
  "- Each task runs in an isolated sandbox that is destroyed when the task ends.",
  "- Anything that sends, publishes or spends waits for human approval.",
  "- Client data is not used to train the underlying models.",
  "",
  `Questions: ${SUPPORT_EMAIL} · https://www.alyvon.com/security`,
].join("\n")

export default function SecurityPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Security"
        title={
          <>
            Built so your client’s IT <span className="text-accent">can say yes.</span>
          </>
        }
        subhead="Data access is the step that stalls most AI pilots. Alyvon asks for the least it can, logs all of it, and leaves the client holding the keys. Nothing that sends, publishes or spends happens without a person."
        actions={
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 px-8 text-body-l font-medium text-white transition-colors duration-micro ease-out-standard hover:border-white/60 hover:bg-white/5"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email a security question
          </a>
        }
      />

      {/* Commitments */}
      <Section tone="canvas">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[860px] flex-col gap-5">
            <Eyebrow>The commitments</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[48px] sm:leading-[1.05]">
              Eight things that are true on every engagement.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-[14px] border border-border-subtle p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold leading-snug">{title}</h3>
                <p className="text-body-s text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section tone="surface">
        <div className="flex flex-col divide-y divide-border-subtle">
          {DETAILS.map((d) => (
            <div key={d.title} className="grid gap-4 py-10 first:pt-0 last:pb-0 lg:grid-cols-[340px_1fr] lg:gap-12">
              <div className="flex flex-col gap-3">
                <Eyebrow>{d.eyebrow}</Eyebrow>
                <h2 className="text-[28px] font-bold leading-[1.1] tracking-[-0.03em]">{d.title}</h2>
              </div>
              <div className="flex max-w-[70ch] flex-col gap-4 text-body-l text-text-secondary">
                {d.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* For client IT */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <Eyebrow>For agencies</Eyebrow>
            <h2 className="text-balance text-display-l sm:text-[44px] sm:leading-[1.08]">
              Forward this to your client’s IT team.
            </h2>
            <p className="text-body-l text-text-secondary">
              The questions IT asks before granting access, answered in one block you can paste into an email or a
              security questionnaire.
            </p>
          </div>
          <section aria-label="Security summary for client IT" className="overflow-hidden rounded-[16px] border border-border-subtle">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-inverse px-5 py-3">
              <p className="text-body font-semibold text-text-on-inverse">Security summary for client IT</p>
              <CopyTemplateButton text={IT_SUMMARY} />
            </div>
            <ul className="flex flex-col divide-y divide-border-subtle bg-canvas">
              {IT_SUMMARY.split("\n")
                .filter((l) => l.startsWith("- "))
                .map((l) => (
                  <li key={l} className="px-5 py-3 text-body text-text-primary">
                    {l.slice(2)}
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </Section>

      {/* Questions */}
      <Section tone="surface" spacing="sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-[24px] font-bold tracking-[-0.02em]">Security questions</h2>
            <p className="text-body text-text-secondary">They go to the same team that builds the product.</p>
          </div>
          <p className="text-body text-text-secondary">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-accent-strong underline underline-offset-4">
              {SUPPORT_EMAIL}
            </a>{" "}
            or the{" "}
            <Link href="/contact" className="font-medium text-accent-strong underline underline-offset-4">
              contact form
            </Link>
            . Sub-processors are listed on the{" "}
            <Link href="/subprocessors" className="font-medium text-accent-strong underline underline-offset-4">
              subprocessors page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-ember bg-inverse py-20 text-center text-text-on-inverse sm:py-24">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
            Bring your next client. Bring their IT team too.
          </h2>
          <p className="text-body-l text-white/80">{CTA.founding.micro}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <PrimaryCta placement="security_final_cta" />
            <DemoCta placement="security_final_cta" />
          </div>
        </Container>
      </section>
    </>
  )
}
