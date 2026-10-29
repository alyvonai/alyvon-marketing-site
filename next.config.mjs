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
  // Agency repositioning: Marketing Hub and Analytics moved off alyvon.com (to be marketed
  // separately), and the Workforce group pages folded into /platform. Temporary (307) on
  // purpose: these destinations may change once the other brand's site exists, and a
  // permanent redirect would be cached by browsers.
  // Gated template files: downloadable, never indexed as standalone documents.
  async headers() {
    return [{ source: "/downloads/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]
  },
  async redirects() {
    return [
      // The blog launched as Insights; catch any early /blog links.
      { source: "/blog", destination: "/insights", permanent: false },
      { source: "/blog/:path*", destination: "/insights/:path*", permanent: false },
      { source: "/marketing-hub", destination: "/", permanent: false },
      { source: "/marketing-hub/:path*", destination: "/", permanent: false },
      { source: "/analytics", destination: "/", permanent: false },
      { source: "/analytics/:path*", destination: "/", permanent: false },
      { source: "/pricing", destination: "/founding-partners", permanent: false },
      { source: "/workforce/pricing", destination: "/founding-partners", permanent: false },
      { source: "/workforce", destination: "/platform", permanent: false },
      { source: "/workforce/:path*", destination: "/platform", permanent: false },
    ]
  },
}

export default nextConfig
