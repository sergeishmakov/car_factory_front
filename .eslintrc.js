module.exports = {
  extends: [
    require.resolve('prettier'),
    require.resolve('eslint-config-standard'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/standard'),
    require.resolve('eslint-config-standard-react'),
    require.resolve('eslint-config-prettier/react')
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']]
      }
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes': [1, 'prefer-double']
  },
  globals: {
    FileReader: 'readonly'
  }
};
