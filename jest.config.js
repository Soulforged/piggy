module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: '__coverage__',
  coveragePathIgnorePatterns: ['node_modules/', '__tests__/', 'assets/', 'lib/'],
  testPathIgnorePatterns: [
    'node_modules/',
    'assets/',
    '__tests__/setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|native-base|react-navigation|react-native-maps|recompose-ext)/)'
  ],
  setupFiles: ['./__tests__/setup.js'],
  globals: {
    navigator: {}
  }
};
