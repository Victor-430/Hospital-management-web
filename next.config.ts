import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore all TypeScript type errors during build
  },
};

export default nextConfig;