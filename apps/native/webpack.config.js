const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const webpack = require("webpack");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ["nativewind"],
      },
    },
    argv,
  );

  // Add crypto polyfill for web
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("react-native-crypto"),
    stream: require.resolve("stream-browserify"),
    crypto: require.resolve("crypto-browserify"),
    vm: require.resolve("vm-browserify"),
  };

  // Provide polyfill for Buffer
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  );

  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  return config;
};
