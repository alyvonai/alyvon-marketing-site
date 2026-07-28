interface MarkProps {
  /** Mark height in px. Width scales from the logo's intrinsic aspect ratio. */
  size?: number
  /** When set, the mark is exposed to assistive tech with this label; otherwise decorative. */
  title?: string
  className?: string
}

// The mark is wider than tall (161:135) -- a chunky "A" letterform traced from
// the brand lockup, not a square.
const RATIO = 161 / 135

// The letterform uses `fill-current` so it takes the surrounding text color;
// only the apex triangle carries the brand accent (--accent, #de4b12).
// Token-only per app/globals.css -- no literal hex here.
export function Mark({ size = 28, title, className }: MarkProps) {
  return (
    <svg
      width={Math.round(size * RATIO)}
      height={size}
      viewBox="0 0 161 135"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 0 160 134 1 134Z M80 34 110 85 51 85Z M40 107 121 107 135 134 26 134Z"
      />
      <path className="fill-accent" d="M80 56 90 74 70 74Z" />
    </svg>
  )
}
