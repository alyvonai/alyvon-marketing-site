// Ticket 22: sitemap route. Only "/" is a real page in this PR (Tickets 2-21 build
// the other 21 marketing pages listed in spec-2-marketing-site.md section 4). Add
// each additional page's entry here as it lands -- do not fabricate entries for
// pages that don't exist yet.
import type { MetadataRoute } from "next"

const SITE_URL = "https://www.alyvon.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Follow-on tickets: add /pricing, /departments, /about, etc. here as each
    // page is built (see spec-2-marketing-site.md section 4 for the full list).
  ]
}
