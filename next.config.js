/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // You can add custom webpack configuration here if needed:
    webpack: (config, { isServer }) => {
      // Example: Modify config if needed
      return config;
    },
  };
  
export default nextConfig;
  