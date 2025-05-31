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
  async redirects() {
    return [
      {
        source: '/__nextjs_original-stack-frames',
        destination: '/api/stack-trace',
        permanent: true,
      },
    ]
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
