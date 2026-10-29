"use client"

import * as React from "react"
import { Pause, Play, Volume2 } from "lucide-react"
import { track } from "@/lib/analytics"

// Homepage hero film. Plays muted and looped as ambient motion (never under
// prefers-reduced-motion), with an explicit "Play with sound" that restarts from 0:00,
// unmutes, and turns on the native controls + captions. A pause control is always
// reachable so the autoplay loop can be stopped (WCAG 2.2.2).
export function HeroFilm() {
  const ref = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(false)
  const [withSound, setWithSound] = React.useState(false)

  React.useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!reduce) v.play().catch(() => {})
  }, [])

  const playWithSound = () => {
    const v = ref.current
    if (!v) return
    v.currentTime = 0
    v.muted = false
    v.loop = false
    setWithSound(true)
    // Show the captions track by default once sound is on.
    if (v.textTracks[0]) v.textTracks[0].mode = "showing"
    v.play().catch(() => {})
    track("hero_film_played", { placement: "home_hero", with_sound: true })
  }

  const togglePause = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <figure className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-black shadow-[0_40px_120px_-40px_rgba(222,75,18,0.35)]">
        <video
          ref={ref}
          className="block aspect-video h-auto w-full"
          width={1280}
          height={720}
          poster="/video/hero-film-poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
          controls={withSound}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label="Alyvon product film: one AI pilot from kickoff to signed scope"
        >
          <source src="/video/hero-film-720p.mp4" type="video/mp4" media="(max-width: 1023px)" />
          <source src="/video/hero-film-1080p.mp4" type="video/mp4" />
          <track kind="captions" src="/video/hero-film-captions.vtt" srcLang="en" label="English" />
        </video>

        {!withSound ? (
          <div className="pointer-events-none absolute bottom-0 right-0 flex items-center gap-2 p-3 sm:p-5">
            <button
              type="button"
              onClick={togglePause}
              aria-label={playing ? "Pause film" : "Play film without sound"}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors duration-micro ease-out-standard hover:bg-black/80 sm:h-11 sm:w-11"
            >
              {playing ? (
                <Pause className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={playWithSound}
              className="pointer-events-auto inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-text-on-accent transition-colors duration-micro ease-out-standard hover:bg-accent-strong sm:h-11 sm:px-5"
            >
              <Volume2 className="h-4 w-4" aria-hidden="true" />
              Play with sound
            </button>
          </div>
        ) : null}
      </div>
      <figcaption className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/60 sm:text-[12px]">
        One AI pilot, from kickoff to signed scope. 94 seconds. Sample engagement, names and figures
        illustrative.
      </figcaption>
    </figure>
  )
}
