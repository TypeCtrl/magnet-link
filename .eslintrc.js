module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['xo-space/esnext', 'xo-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'capitalized-comments': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
};
