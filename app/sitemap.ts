// Ticket 22: sitemap route. Maps over SITE_ROUTES (lib/nav-data.ts), the
// single source of truth for the site's route list -- add a page's entry
// there in the same commit that lands its app/**/page.tsx, never ahead of
// the real route existing.
import type { MetadataRoute } from "next"
import { SITE_ROUTES } from "@/lib/nav-data"

const SITE_URL = "https://www.alyvon.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
