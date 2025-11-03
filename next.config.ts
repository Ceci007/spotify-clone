import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gbbjjecoikypebogfkvk.supabase.co",
        pathname: "/storage/v1/object/public/**"
      }
    ]
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
