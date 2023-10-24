/** @type {import('next').NextConfig} */
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'seeklogo.com',
            port: '',
            // pathname: '/**',
        },
        {
            protocol: 'https',
            hostname:'elements-cover-images-0.imgix.net',
           
          },
        {
            protocol: 'https',
            hostname:'i.imgur.com',
           
        },
        {
          hostname: 'cdn.sanity.io'
        }
        ],
      },
}

module.exports = nextConfig
