// Blog content model. Posts are typed data, not MDX: the structure the SEO/AEO plan asks
// for (answer-first summary, question H2s, definition blocks, cited sources, a visible FAQ
// that matches its FAQPage schema) is enforced by the types instead of by convention.
//
// Inline text supports **bold** and [label](/path) links only.

export type Track = "agency" | "buyer" | "both"

export type Block =
  | { type: "p"; text: string }
  /** Question-phrased H2. `id` becomes the anchor and the table-of-contents entry. */
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  /** "X is ..." block for a term the page should own in AI answers and snippets. */
  | { type: "definition"; term: string; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string }
  /** A left-to-right system diagram: each step feeds the next. */
  | { type: "flow"; caption: string; steps: { label: string; note: string }[] }
  /** An open, copyable template (only downloadables would ever be gated). */
  /** `download` is a /templates/[slug] key: the editable file, offered behind an email form. */
  | { type: "template"; title: string; sections: { label: string; lines: string[] }[]; download?: string }

export interface Source {
  label: string
  url: string
}

export interface FaqEntry {
  q: string
  a: string
}

export interface Post {
  slug: string
  title: string
  /** <title> override when the H1 is too long for search results. */
  seoTitle?: string
  description: string
  /** Answer-first summary: the question answered outright in about 60 words. */
  answer: string
  /** 3 to 5 key takeaways, rendered as the closing summary. */
  takeaways: string[]
  track: Track
  category: string
  author: string
  /** ISO dates (YYYY-MM-DD). `updated` drives sitemap lastmod and dateModified. */
  published: string
  updated: string
  body: Block[]
  faq: FaqEntry[]
  sources?: Source[]
  cta: { heading: string; body: string }
  related?: string[]
}

export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  sameAs?: string[]
}
