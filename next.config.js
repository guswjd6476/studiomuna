/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};
const withTM = require('next-transpile-modules')(['slick-carousel']);

module.exports = nextConfig;
