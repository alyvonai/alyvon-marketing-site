interface MarkProps {
  /** Rendered width/height in px. */
  size?: number
  /** When set, the mark is exposed to assistive tech with this label; otherwise decorative. */
  title?: string
  className?: string
}

// Alyvon "A" monogram. The letterform uses `fill-current` so it takes the
// surrounding text color; only the apex triangle carries the brand accent
// (--accent, #de4b12). Token-only per app/globals.css -- no literal hex here.
export function Mark({ size = 28, title, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
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
        d="M24 4 43 44 5 44Z M24 27 31 44 17 44Z M24 10.5 28.5 23 19.5 23Z"
      />
      <path className="fill-accent" d="M24 13.5 27.8 22 20.2 22Z" />
    </svg>
  )
}
