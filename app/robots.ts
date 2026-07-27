// Ticket 22: robots route. Allow all, point crawlers at the sitemap above.
import type { MetadataRoute } from "next"

const SITE_URL = "https://www.alyvon.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
