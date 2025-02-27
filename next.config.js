/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
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