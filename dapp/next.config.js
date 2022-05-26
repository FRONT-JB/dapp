/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      http: false,
      https: false,
      crypto: false,
      stream: false,
      querystring: false,
    };
    return config;
  },
  env: {
    METADATA_URI: process.env.METADATA_URI,
  },
};

module.exports = nextConfig;
