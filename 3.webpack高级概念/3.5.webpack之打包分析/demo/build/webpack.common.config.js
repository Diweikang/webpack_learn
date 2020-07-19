const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
		})
	],
	optimization: {
		splitChunks: {
      chunks: 'async'
    }
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}