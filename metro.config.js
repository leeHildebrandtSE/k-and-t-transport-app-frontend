const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable web support
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Configure web-specific settings
if (config.resolver.alias) {
  config.resolver.alias['react-native'] = 'react-native-web';
} else {
  config.resolver.alias = {
    'react-native': 'react-native-web'
  };
}

module.exports = config;
