import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "viewport",
            value: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
