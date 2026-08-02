import Link from "next/link"
import { breadcrumbSchema } from "@/lib/jsonld"
import { JsonLd } from "@/components/marketing/json-ld"

// Visual breadcrumb trail + BreadcrumbList JSON-LD (spec §27). The last crumb is the
// current page and is not linked.
export function Breadcrumbs({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-body-s text-text-secondary">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={c.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-text-primary">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="underline-offset-4 hover:underline">
                    {c.name}
                  </Link>
                  <span aria-hidden="true" className="text-text-tertiary">
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </nav>
  )
}
