import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF (then WebP) so the LCP hero and gallery images ship far fewer
    // bytes on mobile.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Trades & Services was replaced by the Home Services hub (SEO batch 1).
      {
        source: "/industries/trades-and-services",
        destination: "/industries/home-services",
        permanent: true,
      },
      // Sydney-focused post removed; service area is Melbourne-only.
      {
        source: "/blog/choosing-flyer-distribution-company-sydney",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
