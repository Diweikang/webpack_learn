const path = require('path');
const webpack = require('webpack');

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
  ],
  output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}

module.exports = devConfig