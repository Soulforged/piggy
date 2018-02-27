module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jest/globals': true,
    'react-native-globals/all': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:flowtype/recommended',
    'airbnb'
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
    'jest',
    'immutable',
    "react-native-globals",
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error','always'],
    'no-console': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-var': ['error'],
    'no-undef': ['error'],
    'no-param-reassign': ['error'],
    'react/display-name': [0],
    'react/prop-types': [2, { ignore: ['navigation', 'rnNavTintColor']}],
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'space-before-blocks': 'off',
    'no-underscore-dangle': 'off',
    //https://github.com/benmosher/eslint-plugin-import/issues/935
    'import/no-extraneous-dependencies': 'off',
    'react/no-multi-comp': [0, { 'ignoreStateless': false }],
    // https://github.com/airbnb/javascript/issues/982
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'immutable/no-let': ['error'],
    'immutable/no-this': ['error'],
    'immutable/no-mutation': 'off',
  },
  'globals': {
    'navigator': true,
    '__DEV__': true
  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
