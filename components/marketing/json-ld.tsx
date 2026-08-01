// Renders one or more schema.org JSON-LD blocks into the page (spec §27). Server
// component so the structured data is in the initial HTML for crawlers.
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[]
}) {
  const items = Array.isArray(data) ? data : [data]
  return (
    <>
      {items.map((d, i) => (
        <script
          // biome-ignore lint: index key is stable for a fixed schema list
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  )
}
