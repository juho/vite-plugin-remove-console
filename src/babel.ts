const { transformSync } = require("@babel/core")
const myBabelPlugin = require("babel-remove-process-env-assignment")

module.exports = (name: string) => {
  const babelConfig = {
    plugins: [myBabelPlugin(name)],
  }
  return (code: any) => {
    const output = transformSync(code, babelConfig)
    return output.code
  }
}