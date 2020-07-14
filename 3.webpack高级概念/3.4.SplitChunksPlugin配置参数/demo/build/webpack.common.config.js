const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // 表示支持所有的导入方式(异步/同步)
      minSize: 0,
      maxSize: 0,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}