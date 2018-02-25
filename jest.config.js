module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: '__coverage__',
  coveragePathIgnorePatterns: ['node_modules/', '__tests__/', 'assets/', 'lib/'],
  testPathIgnorePatterns: [
    'node_modules/',
    'assets/',
    '__tests__/setup.js',
    '__tests__/setupEnzyme.js',
    '__tests__/setupStoreMock.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|native-base|react-navigation|react-native-maps|recompose-ext|react-native-vector-icons|react-navigation-redux-helpers|react-native-safe-area-view)/)'
  ],
  setupFiles: [
    './__tests__/setup.js',
    './__tests__/setupEnzyme.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  globals: {
    navigator: {}
  }
};
