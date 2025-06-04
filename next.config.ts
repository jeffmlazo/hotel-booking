import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals.push("_http_common");
  //   }
  //   return config;
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "9tfdybtajbwefbrt.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
