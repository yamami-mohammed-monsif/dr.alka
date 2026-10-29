import type { NextConfig } from "next";

const nextConfig = {

  experimental: {
    inlineCss: true,
  },

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],      
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384, 525, 600],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};
};

export default nextConfig;
