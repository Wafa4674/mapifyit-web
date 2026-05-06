import type { NextConfig } from "next";

const ONE_YEAR = 31536000; // seconds

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/terms-of-services",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/geoenvironmental",
        destination: "/gis",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: `max-age=${ONE_YEAR}; includeSubDomains; preload`,
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        // Explicit coverage for all _next assets (static chunks, images, turbopack, etc.)
        source: "/_next/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: `max-age=${ONE_YEAR}; includeSubDomains; preload` },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Public root asset
        source: "/mapify-white-bg.png",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: `max-age=${ONE_YEAR}; includeSubDomains; preload` },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache the manifest file for PWA performance
        source: "/manifest.json",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        // Cache other static files in public if accessed directly
        source: "/:path*(.png|.jpg|.jpeg|.gif|.webp|.svg|.ico|.js|.css|.woff|.woff2)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: `max-age=${ONE_YEAR}; includeSubDomains; preload` },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cloudflare injected scripts (just in case they fall through to our origin or Next.js handles them)
        source: "/cdn-cgi/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Strict-Transport-Security", value: `max-age=${ONE_YEAR}; includeSubDomains; preload` },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
