import { buildLlmsFullTxt } from "@/lib/llms"

// /llms-full.txt (llmstxt.org), generated at build time from the site's own data.
export const dynamic = "force-static"

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
