import { cn } from "@/lib/utils"
import { Mark } from "./mark"
import { Wordmark } from "./wordmark"

interface LogoProps {
  /** Mark size in px. The wordmark scales from this. */
  size?: number
  /** Hide the wordmark for icon-only contexts. */
  showWordmark?: boolean
  /** Accessible name for the whole lockup. */
  title?: string
  className?: string
}

// Horizontal Alyvon lockup: "A" monogram + ALYVON wordmark. Both parts inherit
// the surrounding text color, so set the container's text color to theme the
// whole logo; the accent triangle stays brand orange.
export function Logo({ size = 28, showWordmark = true, title = "Alyvon", className }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center", className)}
      role="img"
      aria-label={title}
      style={{ gap: size * 0.34 }}
    >
      <Mark size={size} />
      {showWordmark ? <Wordmark size={Math.round(size * 0.68)} /> : null}
    </span>
  )
}
