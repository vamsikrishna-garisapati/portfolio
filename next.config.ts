import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    workerThreads: true,
    cpus: 1,
    viewTransition: true,
  },
};

export default nextConfig;
