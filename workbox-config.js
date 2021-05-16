module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{html,gz,css,jpg,svg,js}"],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: "dist/sw.js",
  globDirectory: "dist/",
  globPatterns: ["**/*.{css,ico,html,js}"],
  swDest: "dist/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
      handler: "StaleWhileRevalidate"
    }
  ]
};
