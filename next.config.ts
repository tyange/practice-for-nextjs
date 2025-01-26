import type { NextConfig } from "next";

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.autowini.com",
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
