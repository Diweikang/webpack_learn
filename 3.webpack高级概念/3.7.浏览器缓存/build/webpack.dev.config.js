const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'none',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonConfig, devConfig)