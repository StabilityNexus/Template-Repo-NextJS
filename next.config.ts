import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(process.cwd()),
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
  },
};

export default nextConfig;
