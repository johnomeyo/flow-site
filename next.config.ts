import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // <-- Add this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
