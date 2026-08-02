import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Archivo, JetBrains_Mono } from "next/font/google"
import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PostHogProvider } from "@/components/analytics/posthog-provider"
import { GTM_ID } from "@/lib/site"

// Brand typography per Ticket 0c Section 2: Archivo (display + body) and
// JetBrains Mono (labels, eyebrows, timestamps, numeric figures). Fraunces
// and Inter Tight are retired from the brand and must not appear anywhere,
// including fallback chains.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

// Ticket 22 (Open Graph + meta): sitewide defaults. Individual pages override
// title/description/OG image via their own generateMetadata/metadata export
// (see lib/metadata.ts buildMetadata helper, used by every Ticket 2-21 page).
export const metadata: Metadata = {
  metadataBase: new URL("https://www.alyvon.com"),
  title: {
    default: "Alyvon",
    template: "%s | Alyvon",
  },
  description: "Direct a team. Not a tool.",
  openGraph: {
    siteName: "Alyvon",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  // GTM mounts from GTM_ID (env override, live default). PostHog no-ops without a key.
  return (
    <html lang="en" className={cnFonts(archivo.variable, jetbrainsMono.variable)}>
      {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      <body className="flex min-h-screen flex-col">
        <PostHogProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PostHogProvider>
      </body>
    </html>
  )
}

function cnFonts(...classes: string[]) {
  return classes.join(" ")
}
