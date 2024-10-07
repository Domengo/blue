const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add crypto polyfill for web
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('react-native-crypto'),
  };

  // Provide polyfill for Buffer
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
