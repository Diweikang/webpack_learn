const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin() 
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}