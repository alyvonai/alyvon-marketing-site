import { cn } from "@/lib/utils"

interface WordmarkProps {
  /** Font size in px. */
  size?: number
  className?: string
}

// "ALYVON" wordmark -- Archivo (font-display), uppercase, tracked to sit beside
// the mark. Inherits the surrounding text color.
export function Wordmark({ size = 19, className }: WordmarkProps) {
  return (
    <span
      className={cn("font-display font-bold uppercase leading-none", className)}
      style={{ fontSize: size, letterSpacing: "0.12em", marginRight: "-0.12em" }}
    >
      Alyvon
    </span>
  )
}
