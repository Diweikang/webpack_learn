const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() 
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)