module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: [
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:security/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-hooks', 'jsx-a11y', 'zod', 'promise', 'strict-dependencies'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn'],
    'zod/prefer-enum': 2,
    'zod/require-strict': 2,
    'no-console': ['error', { allow: ['error'] }],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme'], location: 'anywhere' },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'security/detect-object-injection': 'off',
  },

  settings: {
    react: {
      version: '18.2.0',
    },
  },
  ignorePatterns: [
    '**/public/*',
    '**/node_modules/*',
    '.eslintrc.js',
    '.prettierrc.js',
    'cypress.config.ts',
  ],
};
