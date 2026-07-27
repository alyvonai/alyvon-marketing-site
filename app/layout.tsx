import type { Metadata } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
// title/description/OG image via their own generateMetadata export once
// those pages are built -- see docs/section-manifest.md for what's in scope
// in this PR versus follow-on work.
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
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cnFonts(archivo.variable, jetbrainsMono.variable)}>
      <body>{children}</body>
    </html>
  )
}

function cnFonts(...classes: string[]) {
  return classes.join(" ")
}
