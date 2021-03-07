
const TerserPlugin = require('terser-webpack-plugin') // 引入压缩插件
 
module.exports = {
  entry: {
    'fast-axios': './src/index.js',
    'fast-axios.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'FastAxios',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'none', // 设置mode为none避免默认压缩
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  }
}
