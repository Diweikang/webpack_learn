const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel-loader',
		}]
	},
	plugins: [
		new HtmlWebpackPlugin(), 
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../dist')
		}),
		new BundleAnalyzerPlugin()
	],
	optimization: {
		splitChunks: {
      chunks: 'all'
    }
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}