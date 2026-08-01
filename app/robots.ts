// robots route. Production is indexable; preview/staging (any non-production Vercel
// environment) is noindexed so the preview URL never competes with www.alyvon.com
// (spec §28).
import type { MetadataRoute } from "next"

const SITE_URL = "https://www.alyvon.com"

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined
  // VERCEL_ENV is "production" | "preview" | "development" on Vercel, and undefined in
  // local/other builds (treated as production so local prod builds behave normally).
  const allowIndexing = isProduction

  return {
    rules: allowIndexing
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
