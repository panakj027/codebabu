/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/codebabu',
  assetPrefix: '/codebabu/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;