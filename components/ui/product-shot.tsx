import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type ProductShotAspect = "tier1Hero" | "tier3Device"

// Mirrors lib/imagery.ts ASPECT_RATIOS as Tailwind arbitrary values so the
// fixed-aspect wrapper (not the browser, not a later crop) owns layout --
// zero CLS per spec Section 7.
const ASPECT_CLASS: Record<ProductShotAspect, string> = {
  tier1Hero: "aspect-[16/10]",
  tier3Device: "aspect-[16/9]",
}

export interface ProductShotProps {
  src: string
  alt: string
  /** Tier 1 hero (16:10) is the default. tier3Device (16:9) is available for a
   * real screenshot used outside a device photo composite. */
  aspect?: ProductShotAspect
  /** Heroes on /, /workforce, /marketing-hub get this. Everything else lazy loads (spec Section 7). */
  priority?: boolean
  sizes?: string
  /** Optional descriptive caption, e.g. what the shot demonstrates. */
  caption?: React.ReactNode
  /** Blur placeholder -- hero images only per spec Section 7. Omit below the fold. */
  blurDataURL?: string
  className?: string
  imageClassName?: string
}

/**
 * Tier 1 "product truth" wrapper: browser frame, subtle shadow, no device
 * chrome, no perspective, no background scene (imagery spec Section 2 Tier 1;
 * Section 7 "Engineering handles" -- "the ProductShot wrapper: browser
 * frame, shadow, optional caption"). Use this for every real, unretouched
 * product screenshot that carries a page hero or a primary product section.
 *
 * The chrome bar deliberately renders no address-bar text. The spec's
 * Section 1 rule -- no legible generated text anywhere in an Alyvon asset --
 * applies to the frame too, and a fabricated URL is exactly the kind of
 * string that rule exists to prevent. A plain pill communicates "this is a
 * browser" without inventing one.
 */
const ProductShot = React.forwardRef<HTMLDivElement, ProductShotProps>(
  (
    {
      src,
      alt,
      aspect = "tier1Hero",
      priority = false,
      sizes = "(min-width: 1024px) 720px, 100vw",
      caption,
      blurDataURL,
      className,
      imageClassName,
    },
    ref
  ) => {
    return (
      <figure ref={ref} className={cn("flex flex-col gap-3", className)}>
        <div
          className={cn(
            // Neutral card, never inverted -- paired with the .product-shot
            // dark-mode guard in globals.css. Real product screenshots are
            // light-background artifacts; they read as broken if a future
            // dark theme tries to invert or recolor them (spec Section 7,
            // "Dark mode").
            "product-shot overflow-hidden rounded-card border border-border-subtle bg-surface",
            // Subtle shadow only, no perspective/tilt (Tier 1 treatment).
            // Color is --bg-inverse (#0B0D11) at 25% alpha, so it still
            // traces to a brand token per the spec's acceptance checklist.
            "shadow-[0_20px_40px_-24px_rgba(11,13,17,0.25)]"
          )}
        >
          <div className="flex items-center gap-1.5 border-b border-border-subtle bg-surface-sunken px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border-input/40" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-input/40" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-input/40" aria-hidden="true" />
            <span className="ml-2 h-4 w-full max-w-[220px] rounded-full bg-canvas" aria-hidden="true" />
          </div>
          <div className={cn("relative w-full", ASPECT_CLASS[aspect])}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              loading={priority ? undefined : "lazy"}
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
              className={cn("object-cover object-top", imageClassName)}
            />
          </div>
        </div>
        {caption ? (
          <figcaption className="flex flex-col gap-1">
            <span className="text-body-s text-text-secondary">{caption}</span>
          </figcaption>
        ) : null}
      </figure>
    )
  }
)
ProductShot.displayName = "ProductShot"

export { ProductShot }
