import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Shared className helper used by every component in components/ui.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
