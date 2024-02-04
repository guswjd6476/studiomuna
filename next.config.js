/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'imgix',
        path: ['https://www.studiomoona.co.kr/'],
    },
};

module.exports = nextConfig;
