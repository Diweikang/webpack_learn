const path = require('path');
const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map',
  output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	}
}

module.exports = merge(commonConfig, prodConfig)