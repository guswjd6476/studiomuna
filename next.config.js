/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['lyoiltescwuhcqomxzbg.supabase.co'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.supabase.co',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  