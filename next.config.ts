import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adhdcoachindebuurt.nl',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;