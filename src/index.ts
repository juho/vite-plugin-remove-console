const baseBabel = require('./babel')

module.exports = (name: string) => {
  let config: { command: string }
  const babelConsoleName = baseBabel(name)
  return {
    name: 'remove-process-env',
    configResolved(resolvedConfig: { command: string }) {
      config = resolvedConfig
    },
    transform(_source: string, id: string) {
      if (/\.(js|ts)$/.test(id)) {
        return babelConsoleName(_source)
      }
    }
  }
}
