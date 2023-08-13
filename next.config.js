/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'hooks', 'components'],
  },
}

module.exports = nextConfig
