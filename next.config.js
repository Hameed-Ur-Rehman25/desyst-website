/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
    loader: 'default',
    unoptimized: true,
  },
  // Fix module resolution for 'desyst-website' local dependency
  webpack: (config) => {
    // Add a rule to handle the circular dependency
    config.resolve.alias = {
      ...config.resolve.alias,
      'desyst-website': false, // Ignore the circular dependency
    };
    return config;
  },
};

module.exports = nextConfig;