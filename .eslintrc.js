module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'no-await-in-loop': 'error',
    'no-extra-parens': 'error',
    'no-useless-return': 'error',
    'symbol-description': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': ['error', 'never']
  },
}