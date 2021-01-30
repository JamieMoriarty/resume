module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: "/.json$/",
      use: [{ loader: "json-loader" }],
    });

    return config;
  },
};
