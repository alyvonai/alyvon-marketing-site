/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920, 2560, 2880],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // How-it-works diagram is an inline vector (brand-safe, no external refs),
    // so allow Next/Image to optimize SVGs. Locked down per Next.js guidance:
    // no script execution, forced download disposition, strict sandboxed CSP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
