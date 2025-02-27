/** @type {import('next').NextConfig} */
import { createSecureHeaders } from 'next-secure-headers';
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: createSecureHeaders(),
        }
      ]
    },
    reactStrictMode: true,
    webpack: (config, { dev, isServer }) => {
      // Enable Fast Refresh
      if (dev && !isServer) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        config.optimization.moduleIds = 'named'
      }
      return config
    },
  };
  export default nextConfig;