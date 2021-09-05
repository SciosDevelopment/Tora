//https://github.com/react-monaco-editor/react-monaco-editor#usage-with-create-react-app
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['json','javascript']
  }))
  return config
}