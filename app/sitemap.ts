// Sitemap. Static routes come from SITE_ROUTES (lib/nav-data.ts); blog posts and author
// pages come from lib/blog. lastModified is only emitted when the real date is known:
// stamping every URL with the build time teaches search engines to ignore lastmod.
import type { MetadataRoute } from "next"
import { SITE_ROUTES } from "@/lib/nav-data"
import { getAllPosts } from "@/lib/blog"
import { AUTHORS } from "@/lib/blog/authors"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latestPost = posts.map((p) => p.updated).sort().at(-1)
  const routes = SITE_ROUTES.map((r) => (r.path === "/insights" && latestPost ? { ...r, lastModified: latestPost } : r))
  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      ...(route.lastModified ? { lastModified: route.lastModified } : {}),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/insights/${p.slug}`,
      lastModified: p.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...AUTHORS.map((a) => ({
      url: `${SITE_URL}/insights/authors/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ]
}
