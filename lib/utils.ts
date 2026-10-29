import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// tailwind-merge must know the custom font sizes from tailwind.config.ts. Without this it
// reads `text-body-l` as a text *color* and drops `text-text-on-accent` from buttons, so
// primary buttons lost their white label everywhere they sit on a light background.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-xl", "display-l", "display-m", "body-l", "body", "body-s", "label", "mono"] }],
    },
  },
})

// Shared className helper used by every component in components/ui.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
