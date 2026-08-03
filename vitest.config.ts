import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

// Minimal Vitest setup. Tests are source-level guards (claims/pricing/title/CTA invariants),
// so a node environment is enough. The "@" alias mirrors tsconfig's "@/*": ["./*"].
export default defineConfig({
  test: {
    environment: "node",
    include: ["__tests__/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
})
