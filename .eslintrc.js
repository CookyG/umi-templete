module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'prefer-const': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'template-curly-spacing': ['error', 'never'],
    'prefer-template': 'error',
    semi: ['error', 'never'],
  },
}
