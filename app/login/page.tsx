import { ArrowRight, Megaphone, Users } from "lucide-react"

import { buildMetadata } from "@/lib/metadata"
import { PageHero } from "@/components/marketing/page-hero"
import { Section } from "@/components/marketing/section"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Login router: no auth form lives here, it only sends people to the right app.
// Marketing Hub stays listed so existing Marketing Hub customers can still sign in.
export const metadata = buildMetadata({
  title: "Log in",
  description: "Log in to Alyvon, or to Marketing Hub if you are an existing Marketing Hub customer.",
  path: "/login",
  noindex: true,
})

const APPS = [
  {
    icon: Users,
    title: "Alyvon",
    body: "Stakeholder interviews, data discovery, scopes and the AI workforce for your client projects.",
    href: "https://app.alyvon.com",
    cta: "Log in to Alyvon",
    primary: true,
  },
  {
    icon: Megaphone,
    title: "Marketing Hub",
    body: "For existing Marketing Hub customers: CRM, automations and the AI Employee.",
    href: "https://mh.alyvon.com",
    cta: "Log in to Marketing Hub",
    primary: false,
  },
]

export default function LoginPage() {
  return (
    <>
      <PageHero eyebrow="Log in" title="Welcome back." subhead="Choose where you’re signing in." size="md" />

      <Section tone="surface">
        <div className="grid w-full max-w-[880px] gap-4 sm:grid-cols-2">
          {APPS.map(({ icon: Icon, title, body, href, cta, primary }) => (
            <div key={title} className="flex flex-col gap-4 rounded-[16px] border border-border-subtle bg-canvas p-6 sm:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-wash text-accent-strong">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-[22px] font-semibold">{title}</h2>
              <p className="text-body text-text-secondary">{body}</p>
              <a
                href={href}
                className={cn(
                  buttonVariants({ size: "lg", variant: primary ? "primary" : "secondary" }),
                  "mt-auto h-[52px] w-full rounded-full"
                )}
              >
                {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
