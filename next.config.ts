import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow MDX and other static assets from /public
  // next-mdx-remote handles MDX compilation at request time — no extra webpack config needed
  serverExternalPackages: ["gray-matter"],
};

export default nextConfig;
