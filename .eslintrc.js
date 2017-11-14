const config = {
  "parser": "babel-eslint",
  globals: {
    '__VERSION__': false,
    'process': false,
    'module': false,
    '__dirname': true,
    'describe': false,
    'it': false,
    'require': false,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
  },
  rules: {
    "strict": 0,
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'no-unused-vars': [
      'warn',
      'all',
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      }
    ],
  },
  plugins: [
    'react',
    'mocha',
  ],
};

module.exports = config;
