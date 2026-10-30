/** @type {import("next").NextConfig} */
module.exports = {
  // NEXT_DIST_DIR lets a test build run without clobbering a running `next dev` (.next).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  // The site uses plain <img> tags, so the Next image optimizer endpoint (/_next/image) is switched off entirely.
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/:path*", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ] },
      { source: "/:dir(images|history|leaders|media)/:file*", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }] },
    ];
  },
};
