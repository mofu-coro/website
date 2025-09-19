const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qr-official.line.me',
        port: '',
        pathname: '/gs/**',
      },
      {
        protocol: 'https',
        hostname: 'scdn.line-apps.com',
        port: '',
        pathname: '/n/**',
      },
    ],
  },
};

module.exports = nextConfig;
