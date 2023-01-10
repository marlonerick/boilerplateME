/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig

//next.config.js
module.exports = {
  experimental: {
    forceSwcTransforms: true
  }
}

const isProd = process.env.NODE_ENV === 'production'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
module.exports = withPWA({
  dest: 'public',
  disable: !isProd
  // next.js config
})
