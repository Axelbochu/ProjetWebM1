/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // (Optionnel) pour activer les erreurs strictes en React
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // Remplace par le port utilisé par ton backend
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
