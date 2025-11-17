const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = nextConfig;
