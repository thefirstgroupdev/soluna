
const webpack = require("webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  }));
 return config;
},
};

module.exports = {
  nextConfig,
  images: {
    domains: ['localhost'],
  },
  future: { webpack5: true }
}
