var code = `class F {}`
var output = require('@babel/core').transform(code, {
  plugins: ['@babel/plugin-transform-classes']
})

console.log(output.code)
