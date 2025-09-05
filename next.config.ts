import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {incomingRequests: true},
  experimental: {
    reactCompiler: true
  },
  compiler: {
    styledJsx: true,
  }
};

export default nextConfig;
