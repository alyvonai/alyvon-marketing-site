"use client"

import { useState } from "react"
import { MediaFrame } from "@/components/ui/media-frame"

// A gallery tile for the /workforce/creative showcase: shows the poster frame (via the
// same MediaFrame the static tiles use, so it matches visually and lazy-loads) with a
// play affordance, then swaps to a native <video> on click. Client component — the only
// interactive piece on an otherwise static gallery.
interface CreativeVideoTileProps {
  videoSrc: string
  posterSrc: string
  aspect: "9:16" | "16:9"
  title: string
}

export function CreativeVideoTile({ videoSrc, posterSrc, aspect, title }: CreativeVideoTileProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      // Illustrative sample clip, no dialogue. If a narrated asset ever ships here, add a
      // <track kind="captions"> before it goes live.
      <video
        src={videoSrc}
        poster={posterSrc}
        controls
        autoPlay
        playsInline
        className="w-full rounded-card border border-border-subtle"
        style={{ aspectRatio: aspect === "9:16" ? "9 / 16" : "16 / 9" }}
      >
        Your browser does not support embedded video.
      </video>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block w-full overflow-hidden rounded-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <MediaFrame
        src={posterSrc}
        alt={`${title} — poster frame`}
        aspect={aspect}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-150 group-hover:bg-black/20"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-150 group-hover:scale-105">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 translate-x-[2px] fill-accent">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
