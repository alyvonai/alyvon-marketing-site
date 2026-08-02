// Dual-fire analytics: every tracked event goes to BOTH the GTM dataLayer and PostHog
// (spec §10). Decoupled from the posthog-js import — the PostHogProvider assigns the
// initialized client to window.__alyvon_posthog, so this module is SSR-safe and never
// throws when neither is configured.

type Props = Record<string, unknown>

interface PostHogLike {
  capture: (event: string, props?: Props) => void
}

declare global {
  interface Window {
    dataLayer?: Props[]
    __alyvon_posthog?: PostHogLike
  }
}

export function track(event: string, props: Props = {}): void {
  if (typeof window === "undefined") return
  const payload = { ...props, ...getAttribution() }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...payload })
  window.__alyvon_posthog?.capture(event, payload)
}

// --- Typed convenience wrappers (spec §10 event schemas) ---

export function ctaClick(p: {
  product: string
  page_path: string
  placement: string
  destination: string
  plan?: string
  workforce_group?: string
  department_anchor?: string
}): void {
  track("cta_click", p)
}

export function trialCtaClicked(p: {
  placement: string
  tier?: string
  selected_departments_count?: number
  creative_addon_selected?: boolean
}): void {
  track("trial_cta_clicked", { product: "workforce", ...p })
}

export function bookCallClicked(p: {
  product: string
  placement: string
  destination: string
}): void {
  track("book_call_clicked", p)
}

export function leadFormSubmitted(p: {
  product: string
  form_name: string
  placement: string
  inquiry_type?: string
}): void {
  track("lead_form_submitted", p)
}

// --- First-touch attribution (spec §11) ---
// Store the first external UTM set + landing page + referrer once, and never overwrite it
// during the window. Kept intentionally small for launch.

const ATTRIBUTION_KEY = "alyvon_first_touch"
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const

export function captureFirstTouch(): void {
  if (typeof window === "undefined") return
  try {
    if (window.localStorage.getItem(ATTRIBUTION_KEY)) return
    const params = new URLSearchParams(window.location.search)
    const hasUtm = UTM_KEYS.some((k) => params.get(k))
    // Store on the first visit that has attribution signal, or the first visit at all.
    const record: Props = {
      first_landing_page: window.location.pathname,
      referrer: document.referrer || null,
    }
    for (const k of UTM_KEYS) {
      const v = params.get(k)
      if (v) record[k] = v
    }
    if (hasUtm || document.referrer) {
      window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(record))
    }
  } catch {
    // localStorage can throw in private mode — attribution is best-effort.
  }
}

export function getAttribution(): Props {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY)
    return raw ? (JSON.parse(raw) as Props) : {}
  } catch {
    return {}
  }
}
