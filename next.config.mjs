/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    resolveAlias: {
      // Configuración específica de TurboPack si es necesaria
    }
  }
}

export default nextConfig
