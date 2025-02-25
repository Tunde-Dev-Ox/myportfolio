/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      return config;
    },
    reactStrictMode: true,
    output: "standalone",
  };
  
export default nextConfig;
  