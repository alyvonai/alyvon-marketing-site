// Skeleton: generic loading placeholder. Reuses the global `.skeleton-shimmer` keyframe
// already defined in app/globals.css — no new keyframes/durations are introduced here,
// per the motion-tokens rule.
import * as React from "react"
import { cn } from "@/lib/utils"

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("skeleton-shimmer rounded-card bg-surface-sunken", className)}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton"

// SkeletonText: a stack of line placeholders for paragraph/body copy loading.
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ className, lines = 3, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn("h-3 w-full", i === lines - 1 && "w-2/3")} />
      ))}
    </div>
  )
)
SkeletonText.displayName = "SkeletonText"

// SkeletonCard: card-shaped placeholder (media block + text lines) for grid/list loading.
export type SkeletonCardProps = React.HTMLAttributes<HTMLDivElement>

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex w-full flex-col gap-3 rounded-card border border-border-subtle p-4", className)}
      {...props}
    >
      <Skeleton className="h-40 w-full" />
      <SkeletonText lines={2} />
    </div>
  )
)
SkeletonCard.displayName = "SkeletonCard"

// SkeletonAvatar: circular placeholder for avatar/thumbnail loading.
export interface SkeletonAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

const avatarSizeMap: Record<NonNullable<SkeletonAvatarProps["size"]>, string> = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-14 w-14",
}

const SkeletonAvatar = React.forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ className, size = "md", ...props }, ref) => (
    <Skeleton ref={ref} className={cn("rounded-full", avatarSizeMap[size], className)} {...props} />
  )
)
SkeletonAvatar.displayName = "SkeletonAvatar"

export { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar }
