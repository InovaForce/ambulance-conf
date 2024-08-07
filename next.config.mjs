/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "infinitychassis.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
