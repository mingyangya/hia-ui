// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/base'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    'space-in-parens': 1, // 函数参数之间的空格
    // 'space-before-function-paren': 1, // 函数参数前的空格
    'comma-spacing': 1, // 逗号后有一个空格
    'object-curly-spacing': 0,
    'no-unneeded-ternary': 0,
    // 'object-curly-spacing': 1, // 对象左边大括号后不能有空格
    'space-infix-ops': 1, // 比较运算符两边的空格
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
    'no-multiple-empty-lines': 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-useless-escape': 'off'
  }
}