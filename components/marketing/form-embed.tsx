"use client"

import { useEffect } from "react"
import { formViewed, type FormName } from "@/lib/analytics"

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js"

// Embeds a GHL form on-site and stashes the lead context (product/source/type) so
// /thank-you can attribute the submission even with a bare redirect URL. Same pattern as
// BookingEmbed. form_embed.js auto-sizes the iframe by its data-form-id.
export function FormEmbed({
  formId,
  formName = "Alyvon Form",
  analyticsName,
  product,
  source,
  minHeight = 720,
}: {
  formId: string
  formName?: string
  /** form_name dimension on form events. GHL submits happen inside the iframe, so only
   * form_viewed is tracked here; the submit is counted by /thank-you's conversion event. */
  analyticsName: FormName
  product: string
  source: string
  /** Starting height reserved before form_embed.js sizes the iframe to its content. */
  minHeight?: number
}) {
  const initialHeight = minHeight ?? 760
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "alyvon_booking_context",
        JSON.stringify({ product, source, plan: null, type: "lead" })
      )
    } catch {
      // best-effort attribution
    }
    formViewed({ form_name: analyticsName, product, source })

    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SCRIPT
      s.async = true
      document.body.appendChild(s)
    }
  }, [analyticsName, product, source])

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
      id={`inline-${formId}`}
      title={formName}
      scrolling="no"
      className="w-full"
      style={{ height: initialHeight, minHeight: initialHeight, border: "none", borderRadius: 12 }}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height="undefined"
      data-layout-iframe-id={`inline-${formId}`}
      data-form-id={formId}
    />
  )
}
