module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  extends: ['standard', 'prettier/react', 'prettier/standard'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  globals: {
    it: false,
  },
  rules: {
    'react/jsx-uses-vars': Warn,
    'react/jsx-uses-react': Warn,
    'space-before-function-paren': Disable,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
