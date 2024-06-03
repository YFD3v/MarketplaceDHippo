/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //       domains: [
    // 'localhost',  'marketplacedhippo-production.up.railway.app'
    //       ],
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
