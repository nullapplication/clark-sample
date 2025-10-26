/** @type {import('next').NextConfig} */
const nextConfig = { 
    experimental: {
        serverActions: {
           bodySizeLimit: '2mb',
        },
     },
     images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'accelerate-mx-public.s3.us-east-1.amazonaws.com',
              pathname: '/**',
            },
          ],
     },
    output: 'standalone' 
};

export default nextConfig;
