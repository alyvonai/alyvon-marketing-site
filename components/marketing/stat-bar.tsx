// Thin stats strip (spec §16 stats bar / homepage proof line). Uppercase mono labels on
// a surface band.
export function StatBar({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
      {items.map((stat) => (
        <span key={stat} className="font-mono text-label uppercase text-text-secondary">
          {stat}
        </span>
      ))}
    </div>
  )
}
