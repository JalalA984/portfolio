/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn-icons-png.flaticon.com',
            port: '',
            pathname: '/512/25/25231.png**',
          },
        ],
      },
      

}

module.exports = nextConfig
