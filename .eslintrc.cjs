module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
  }
};