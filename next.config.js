/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['image.tmdb.org']
  },
  env:{
    VIDEO_SERVER_IP:"123.215.130.240"
  }
}

module.exports = nextConfig
