/** @type {import('next').NextConfig} */
const path = require('path')
// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
