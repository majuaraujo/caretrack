module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-syntax-flow',
      'react-native-reanimated/plugin', // sempre por último
    ],
  };
};
