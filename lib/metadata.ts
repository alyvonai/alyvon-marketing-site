// Ticket 22: buildMetadata() helper for consistent Open Graph / Twitter card tags
// across pages. No per-page metadata is set up yet since no other real pages exist
// in this PR -- follow-on page tickets import this to build their own
// `generateMetadata`/`metadata` export instead of hand-rolling OG tags each time.
import type { Metadata } from "next"

const SITE_URL = "https://www.alyvon.com"
const DEFAULT_OG_IMAGE = "/og-default.png"
const SITE_NAME = "Alyvon"

export interface BuildMetadataOptions {
  /** Page title. Rendered through the "%s | Alyvon" template set in app/layout.tsx. */
  title: string
  description?: string
  /** Path relative to the site root, e.g. "/pricing". Defaults to "/". */
  path?: string
  /** Path or absolute URL to an OG image. Defaults to the sitewide fallback. */
  ogImage?: string
}

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
}: BuildMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, SITE_URL).toString()
  const imageUrl = new URL(ogImage, SITE_URL).toString()

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}
