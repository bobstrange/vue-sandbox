module.exports = {
  root: true,

  env: {
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  overrides: [
    // suppress no unused var error on typescript type in .vue
    {
      files: ['*.vue'],
      rules: require('@typescript-eslint/eslint-plugin').configs[
        'eslint-recommended'
      ].overrides[0].rules
    }
  ],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ]
}
