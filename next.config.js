/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/afwanfatma',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
