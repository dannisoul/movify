/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org']
  },
  distDir: '/build'
}

module.exports = nextConfig
