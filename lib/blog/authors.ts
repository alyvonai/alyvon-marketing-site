import type { Author } from "@/lib/blog/types"

// Real people only. Add `sameAs` (LinkedIn and other public profiles) so search engines and
// AI answers can tie the byline to one identity.
export const AUTHORS: Author[] = [
  {
    slug: "shawn-sias",
    name: "Shawn Sias",
    role: "Founder, Alyvon",
    bio: "Shawn Sias is the founder of Alyvon, writing about how AI agencies scope, prove and deliver agent projects, from first interview to a measured result.",
    sameAs: [],
  },
]

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug)
}
