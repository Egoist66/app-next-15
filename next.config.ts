import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {incomingRequests: true},
  compiler: {
    styledJsx: true,
  }
};

export default nextConfig;
