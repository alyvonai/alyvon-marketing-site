"use client";

import { useState } from "react";
import { MediaFrame } from "@/components/ui/media-frame";

/**
 * ASSUMPTION (component source not available to me for verification —
 * confirm before merge): MediaFrame's public API is
 *   { src: string; alt: string; aspect: Aspect; sizes?: string; priority?: boolean; className?: string }
 * If your real prop names differ, adjust the two <MediaFrame> calls below only —
 * nothing else in this file depends on that shape.
 */

interface VideoTileProps {
  videoSrc: string;
  posterSrc: string;
  aspect: "9:16" | "16:9";
  title: string;
  className?: string;
}

export function VideoTile({ videoSrc, posterSrc, aspect, title, className }: VideoTileProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption -- no caption track supplied for this asset; flag to Content/Product for a captions file before this ships with audio */}
        <video
          src={videoSrc}
          poster={posterSrc}
          controls
          autoPlay
          playsInline
          className="w-full rounded-card"
          style={{ aspectRatio: aspect === "9:16" ? "9 / 16" : "16 / 9" }}
        >
          Your browser does not support embedded video.
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block w-full overflow-hidden rounded-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DE4B12] focus-visible:ring-offset-2 ${className ?? ""}`}
    >
      <MediaFrame src={posterSrc} alt={`${title} — poster frame`} aspect={aspect} />

      {/* Play affordance overlay */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-150 group-hover:bg-black/20"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-150 group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 translate-x-[2px] fill-[#DE4B12]"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
