const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8081,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,      // 对node_modules中的js代码不做处理
        use: {
          loader: "babel-loader",
          options: {
            presets: [['@babel/preset-env', {
              "targets": {
                "chrome": "67"
              },
              "useBuiltIns": "usage",
            }]]
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin (),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}