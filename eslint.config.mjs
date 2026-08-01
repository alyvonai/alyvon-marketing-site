// ESLint 9 flat config bridging eslint-config-next via FlatCompat. The repo previously had
// a `lint` script but no config file, so `eslint .` failed; this makes `npm run lint` real.
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

const config = [
  { ignores: [".next/**", "node_modules/**", "out/**"] },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
]

export default config
