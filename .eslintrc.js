module.exports = {
  extends: [require.resolve('./eslint')],
  env: {
    browser: false,
    node: true,
    commonjs: true,
  },
  rules: {
    'no-warning-comments': 'off',
  }
};
