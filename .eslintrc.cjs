module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'promise', 'import', 'prettier'],
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': [
      'error',
      {
        allowFinally: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{modules/**/*}',
            group: 'internal',
          },
          {
            pattern: '{components/**/*}',
            group: 'internal',
          },
          {
            pattern: '{design/**/*}',
            group: 'internal',
          },
          {
            pattern: '*.scss',
            group: 'index',
            patternOptions: {
              matchBase: true,
            },
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/first': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prefer-const': 'warn',
    'block-spacing': 'error',
    'space-before-blocks': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'block-like',
          'multiline-expression',
          'function',
          'multiline-const',
          'if',
          'switch',
          'return',
          'export',
        ],
      },
      {
        blankLine: 'always',
        prev: ['function', 'multiline-const', 'switch', 'multiline-expression'],
        next: '*',
      },
    ],
    'default-case': 'warn',
    'arrow-body-style': 'error',
  },
};
