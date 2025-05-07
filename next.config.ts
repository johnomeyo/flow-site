// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname and any subdomain over HTTPS
        // Alternatively, just use hostname: '*'
      },
      // You can still list specific domains here if needed alongside the wildcard,
      // but the wildcard makes them redundant for HTTPS.
    ],
  },
  // Other Next.js configurations...
};

export default nextConfig;