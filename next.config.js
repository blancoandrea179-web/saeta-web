const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.saetaoc.com'],
    unoptimized: true,
  },
}

module.exports = withNextIntl(nextConfig)