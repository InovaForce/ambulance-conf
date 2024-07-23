/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'infinitychassis.com'
      }
   
    ],
  },
}
  
  export default nextConfig;
  