/** @type {import('next').NextConfig} */ 
const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: "https",
            hostname: "**",
          },
      ],
    },
    experimental: {
        serverActions: {
          bodySizeLimit: "10mb", // 🔥 Increase the body size limit (adjust as needed)
        },
      },
  };
  
  export default nextConfig;
  