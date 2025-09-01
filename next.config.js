/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'content.knightfrank.com',
      'static.vecteezy.com',
      'cdn.vectorstock.com'
    ],
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/leeadership',
        destination: '/leadership',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig