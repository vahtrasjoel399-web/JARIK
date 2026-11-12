import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Placeholder photos come from Unsplash. When you switch to your own photos in /public,
    // this can be removed.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Estonian is the default language.
    return [{ source: "/", destination: "/et", permanent: false }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
