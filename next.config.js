/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

const { withFrameworkConfig } = require("./framework/common/config")

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local"
  },
  i18n: {
    locales: ["en-US", "es", "ro-RO"],
    defaultLocale:  "en-US"
  }
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

module.exports = nextConfig