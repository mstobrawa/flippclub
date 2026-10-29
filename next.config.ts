import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/zones/flippers",
        destination: "/flippers",
        permanent: true,
      },
      {
        source: "/zones/arcades",
        destination: "/arcades",
        permanent: true,
      },
      {
        source: "/zones/bar",
        destination: "/bar",
        permanent: true,
      },
      {
        source: "/zones/events",
        destination: "/events",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
