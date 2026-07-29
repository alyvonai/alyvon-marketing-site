import * as React from "react"
import { cn } from "@/lib/utils"
import { ILLUSTRATIVE_CAPTION } from "@/lib/imagery"

export interface IllustrativeCaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

const IllustrativeCaption = React.forwardRef<HTMLParagraphElement, IllustrativeCaptionProps>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn("text-body-s italic text-text-secondary", className)} {...props}>
      {children ?? ILLUSTRATIVE_CAPTION}
    </p>
  )
)
IllustrativeCaption.displayName = "IllustrativeCaption"
export { IllustrativeCaption }
