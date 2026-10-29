import Link from "next/link"
import { CalendarDays, Mail, Sparkles } from "lucide-react"
import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { PageHero } from "@/components/marketing/page-hero"
import { FormEmbed } from "@/components/marketing/form-embed"
import { SUPPORT_EMAIL } from "@/lib/site"

// The GHL "Alyvon Form" (contact / lead form). Embedded on-site so the /thank-you handoff
// auto-attributes the lead (FormEmbed stashes product/source, /thank-you reads it) — the
// form's GHL redirect can be a bare https://www.alyvon.com/thank-you.
const FORM_ID = "If4MhRWDecZbR6xVnRAx"

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Questions about Alyvon, the founding partner cohort or a client project? Send them to the founding team and we’ll reply within two business days.",
  path: "/contact",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]

const OTHER_WAYS = [
  {
    icon: Sparkles,
    title: "Join the founding cohort",
    body: "Ready to run a client project on Alyvon? Apply for one of 12 founding spots.",
    href: "/founding-partners#apply",
    label: "Apply for a founding spot",
  },
  {
    icon: CalendarDays,
    title: "See it on a real project",
    body: "Book a demo and bring a client project you’re scoping.",
    href: "/book?product=workforce&source=contact_page",
    label: "Book a demo",
  },
  {
    icon: Mail,
    title: "Email us",
    body: "Security, billing or anything else.",
    href: `mailto:${SUPPORT_EMAIL}`,
    label: SUPPORT_EMAIL,
  },
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const str = (v: string | string[] | undefined) => (typeof v === "string" ? v : undefined)
  const product = str(sp.product) ?? "general"
  const source = str(sp.source) ?? "contact_page"

  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Talk to the founding team."
        subhead="Questions about Alyvon, the founding cohort or a client project you’re scoping? Send them here. We reply within two business days."
      />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <ul className="flex flex-col gap-4 lg:sticky lg:top-24">
            {OTHER_WAYS.map(({ icon: Icon, title, body, href, label }) => (
              <li key={title} className="flex gap-4 rounded-[14px] border border-border-subtle bg-canvas p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <h2 className="text-[17px] font-semibold">{title}</h2>
                  <p className="text-body-s text-text-secondary">{body}</p>
                  {href.startsWith("mailto:") ? (
                    <a href={href} className="break-all text-body-s font-medium text-accent-strong underline underline-offset-4">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-body-s font-medium text-accent-strong underline underline-offset-4">
                      {label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-[16px] border border-border-subtle bg-canvas p-2 shadow-sm sm:p-4">
            <FormEmbed formId={FORM_ID} formName="Alyvon Form" product={product} source={source} />
          </div>
        </div>
      </Section>
    </>
  )
}
