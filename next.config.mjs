/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable Next.js dev indicators
  // Disable Next.js dev indicators
  devIndicators: false,
  // Disable powered by header
  poweredByHeader: false,
}

export default nextConfig
