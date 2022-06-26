module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-mutating-props':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
