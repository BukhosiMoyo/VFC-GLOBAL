import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/visas",
        destination: "/services/visa-applications",
        permanent: true,
      },
      {
        source: "/services/waivers",
        destination: "/services/waivers-appeals",
        permanent: true,
      },
      {
        source: "/services/corporate",
        destination: "/services/corporate-immigration",
        permanent: true,
      },
      {
        source: "/services/special",
        destination: "/services/special-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
