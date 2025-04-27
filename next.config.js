// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['lyoiltescwuhcqomxzbg.supabase.co'],
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: '**.supabase.co',
//         },
//       ],
//     },
//   };

//   module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: ['lyoiltescwuhcqomxzbg.supabase.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lyoiltescwuhcqomxzbg.supabase.co',
                pathname: '/storage/v1/object/public/event-images/**',
            },
        ],
    },
};

module.exports = nextConfig;
