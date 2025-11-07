const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Polyfills for web compatibility
  if (config.resolve) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      process: require.resolve('process/browser'),
      // Fix React Native Vector Icons warnings
      '@react-native-vector-icons/get-image': false,
      // Fix Node.js vm module warnings
      vm: false,
      fs: false,
      path: false,
      os: false,
      util: false,
    };
  }

  // Add webpack plugins to provide global polyfills
  const webpack = require('webpack');
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    })
  );

  // Suppress specific warnings for modules that are meant to fail in browser environment
  config.ignoreWarnings = [
    /Can't resolve '@react-native-vector-icons\/get-image'/,
    /Can't resolve 'vm'/,
    /Can't resolve 'fs'/,
    /Can't resolve 'path'/,
    /Can't resolve 'os'/,
  ];

  // Add alias for React Native Vector Icons web compatibility
  if (config.resolve.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-vector-icons/MaterialCommunityIcons': '@expo/vector-icons/MaterialCommunityIcons',
    };
  } else {
    config.resolve.alias = {
      'react-native-vector-icons/MaterialCommunityIcons': '@expo/vector-icons/MaterialCommunityIcons',
    };
  }

  // Suppress specific warnings
  config.ignoreWarnings = [
    // Suppress React Native Vector Icons warnings
    /Module not found.*@react-native-vector-icons\/get-image/,
    // Suppress Node.js vm module warnings
    /Module not found.*Can't resolve 'vm'/,
    // Suppress ASN1.js warnings
    /Module not found.*asn1\.js/,
  ];

  // Alternative: Use stats to suppress warnings in console
  if (config.stats) {
    config.stats.warningsFilter = [
      /Module not found.*@react-native-vector-icons\/get-image/,
      /Module not found.*Can't resolve 'vm'/,
    ];
  } else {
    config.stats = {
      warningsFilter: [
        /Module not found.*@react-native-vector-icons\/get-image/,
        /Module not found.*Can't resolve 'vm'/,
      ],
    };
  }

  return config;
};
