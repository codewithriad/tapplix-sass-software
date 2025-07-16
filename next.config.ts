import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: 'img.freepik.com'
    }
  ],
},
  reactStrictMode: true,
  devIndicators: false,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  }
}

export default nextConfig
