import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Trades & Services was replaced by the Home Services hub (SEO batch 1).
      {
        source: "/industries/trades-and-services",
        destination: "/industries/home-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
