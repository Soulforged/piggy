module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:flowtype/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'promise',
    'flowtype',
    'jest'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 'off'
  },
  'globals': {
    'navigator': true
  }
};
