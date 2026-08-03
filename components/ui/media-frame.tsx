// MediaFrame: wraps next/image with the shared rounded-card shape + subtle border that
// cards and images both use (no exceptions). No drop shadow, no "hero" variant — aspect
// ratio is the only axis of variation per the brief.
//
// Imagery spec addendum (alyvon-imagery-ui-icon-spec.md, Section 7 "Aspect ratios"):
// added "16:10" (Tier 1 alt use), "3:2" and "4:5" (Tier 2 section-break desktop/mobile
// crops) alongside the original three. This is additive only, per this file's own
// "aspect ratio is the only axis of variation" contract above — no shadow, no frame,
// no new variant was introduced. Tier 1 hero screenshots that need the browser frame
// use <ProductShot> instead; Tier 3 device renders and Tier 2 composed art use
// MediaFrame directly with the new ratios.
import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

// Creative-gallery addendum: "9:16" (vertical Reel/Story posters) and "ad" (1200×627 ad
// units) added for the /workforce/creative sample gallery — additive, aspect-ratio only.
export type MediaFrameAspect = "16:9" | "1:1" | "9:8" | "4:3" | "16:10" | "3:2" | "4:5" | "9:16" | "ad"

const aspectClassMap: Record<MediaFrameAspect, string> = {
  "16:9": "aspect-video",
  "1:1": "aspect-square",
  "9:8": "aspect-[9/8]",
  "4:3": "aspect-[4/3]",
  "16:10": "aspect-[16/10]",
  "3:2": "aspect-[3/2]",
  "4:5": "aspect-[4/5]",
  "9:16": "aspect-[9/16]",
  ad: "aspect-[1200/627]",
}

export interface MediaFrameProps extends Omit<ImageProps, "fill"> {
  aspect?: MediaFrameAspect
  containerClassName?: string
}

const MediaFrame = React.forwardRef<HTMLImageElement, MediaFrameProps>(
  ({ aspect = "16:9", className, containerClassName, alt, ...props }, ref) => (
    <div
      data-imagery-tier={aspect}
      className={cn(
        "relative w-full overflow-hidden rounded-card border border-border-subtle",
        aspectClassMap[aspect],
        containerClassName
      )}
    >
      <Image ref={ref} alt={alt} fill className={cn("object-cover", className)} {...props} />
    </div>
  )
)
MediaFrame.displayName = "MediaFrame"

export { MediaFrame }
