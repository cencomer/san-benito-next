/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbo: {
      resolveAlias: {
        // Configuración específica de TurboPack si es necesaria
      }
    }
  }
}

export default nextConfig
