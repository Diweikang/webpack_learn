const path = require('path');
const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map'
}

module.exports = merge(commonConfig, prodConfig)