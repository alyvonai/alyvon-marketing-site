"use client"

import * as React from "react"
import { formStarted, type FormName } from "@/lib/analytics"

// Returns an onInput handler for a form's email field. Fires `form_started` the first time
// the field holds 1+ characters (typed, pasted or autofilled), and only once per form per
// page view, so editing or clearing the field never fires it again.
export function useFormStart(form_name: FormName, template?: string) {
  const started = React.useRef(false)
  return React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (started.current || e.currentTarget.value.length < 1) return
      started.current = true
      formStarted({ form_name, field: "email", ...(template ? { template } : {}) })
    },
    [form_name, template]
  )
}
