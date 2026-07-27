import type { Config } from "tailwindcss"

// Token source: Brand's Design System Extension Spec (Ticket 0c), corrected version.
// Every color below is a CSS custom property defined in app/globals.css so there is
// exactly one place (globals.css) where a literal hex value is allowed to live.
// See docs/design-tokens-reference.md for the full token table, usage rules, and
// the two contrast deviations Engineering applied (border-input, text-tertiary).
const config: Config = {
  darkMode: "class", // reserved: site is light-theme only per Ticket 1, app theme is separate
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        surface: "var(--bg-surface)",
        "surface-sunken": "var(--bg-surface-sunken)",
        inverse: "var(--bg-inverse)",
        disabled: "var(--bg-disabled)",

        "border-subtle": "var(--border-subtle)",
        "border-input": "var(--border-input)",
        "border-focus": "var(--border-focus)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "text-disabled": "var(--text-disabled)",
        "text-on-accent": "var(--text-on-accent)",
        "text-on-inverse": "var(--text-on-inverse)",

        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-wash": "var(--accent-wash)",

        "success-ink": "var(--success-ink)",
        "success-bg": "var(--success-bg)",
        "error-ink": "var(--error-ink)",
        "error-bg": "var(--error-bg)",
        "warning-ink": "var(--warning-ink)",
        "warning-bg": "var(--warning-bg)",
        "info-ink": "var(--info-ink)",
        "info-bg": "var(--info-bg)",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Arial", "Helvetica", "sans-serif"],
        body: ["var(--font-archivo)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["56px", { lineHeight: "60px", letterSpacing: "-0.042em", fontWeight: "700" }],
        "display-l": ["40px", { lineHeight: "44px", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-m": ["28px", { lineHeight: "34px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "body-l": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "26px" }],
        "body-s": ["14px", { lineHeight: "22px" }],
        label: ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" }],
        mono: ["13px", { lineHeight: "22px" }],
      },
      transitionDuration: {
        micro: "150ms",
        panel: "250ms",
        page: "300ms",
      },
      transitionTimingFunction: {
        "ease-out-standard": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-standard": "cubic-bezier(0.4, 0, 1, 1)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      screens: {
        xs: "360px",
      },
      maxWidth: {
        content: "1120px",
        "content-lg": "1200px",
      },
    },
  },
  plugins: [],
}

export default config
