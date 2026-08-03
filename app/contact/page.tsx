import { buildMetadata } from "@/lib/metadata"
import { Section } from "@/components/marketing/section"
import { Hero } from "@/components/marketing/hero"
import { Breadcrumbs } from "@/components/marketing/breadcrumbs"
import { JsonLd } from "@/components/marketing/json-ld"
import { FormEmbed } from "@/components/marketing/form-embed"
import { SUPPORT_EMAIL } from "@/lib/site"
import { breadcrumbSchema } from "@/lib/jsonld"

// The GHL "Alyvon Form" (contact / lead form). Embedded on-site so the /thank-you handoff
// auto-attributes the lead (FormEmbed stashes product/source, /thank-you reads it) — the
// form's GHL redirect can be a bare https://www.alyvon.com/thank-you.
const FORM_ID = "If4MhRWDecZbR6xVnRAx"

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to the Alyvon team. Tell us what you’re trying to get done and we’ll point you to the fastest path — a self-serve department, a marketing system, or a custom build.",
  path: "/contact",
})

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
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
      <Hero
        eyebrow="Contact"
        heading="Talk to Alyvon"
        subhead="Tell us what you’re trying to get done and we’ll point you to the fastest path — a self-serve department, a marketing system, or a custom build."
      />

      <Section tone="canvas">
        <div className="flex flex-col gap-8">
          <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-card border border-border-subtle bg-canvas">
            <FormEmbed formId={FORM_ID} formName="Alyvon Form" product={product} source={source} />
          </div>
          <p className="text-center text-body-s text-text-secondary">
            Prefer email? Reach us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent-strong underline-offset-4 hover:underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  )
}
