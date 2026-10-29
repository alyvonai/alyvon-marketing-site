// robots route. Production is indexable; preview/staging (any non-production Vercel
// environment) is noindexed so the preview URL never competes with www.alyvon.com
// (spec §28).
import type { MetadataRoute } from "next"

const SITE_URL = "https://www.alyvon.com"

// AI search and assistant crawlers, allowed by name on purpose: being readable by AI
// answer engines (ChatGPT, Claude, Perplexity, Gemini, Apple Intelligence) is part of the
// site's AEO strategy. Removing a name here opts the site out of that engine.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
]

// Not content: form endpoints and the internal imagery preview.
const PRIVATE = ["/api/", "/dev/"]

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === undefined
  // VERCEL_ENV is "production" | "preview" | "development" on Vercel, and undefined in
  // local/other builds (treated as production so local prod builds behave normally).
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` }
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
