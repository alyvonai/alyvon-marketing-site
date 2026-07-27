// MediaFrame: wraps next/image with the shared rounded-card shape + subtle border that
// cards and images both use (no exceptions). No drop shadow, no "hero" variant — aspect
// ratio is the only axis of variation per the brief.
import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

export type MediaFrameAspect = "16:9" | "1:1" | "4:3"

const aspectClassMap: Record<MediaFrameAspect, string> = {
  "16:9": "aspect-video",
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
}

export interface MediaFrameProps extends Omit<ImageProps, "fill"> {
  aspect?: MediaFrameAspect
  containerClassName?: string
}

const MediaFrame = React.forwardRef<HTMLImageElement, MediaFrameProps>(
  ({ aspect = "16:9", className, containerClassName, alt, ...props }, ref) => (
    <div
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
