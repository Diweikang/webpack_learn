const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: [
					{ loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
				]
			},	
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(), 
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../dist')
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			_join: ['lodash', 'join']
		})
	],
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		splitChunks: {
      chunks: 'all'
		}
	},
	performance: false
}