/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      return config;
    },
    reactStrictMode: true,
    output: "standalone",
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    trailingSlash: false,
  };
  
export default nextConfig;