const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');
const { merge } = require('webpack-merge');

const commonConfig = {
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
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'imports-loader',
            options: {
              wrapper: 'window'
            }
          }
        ]
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

module.exports = (env) => {
	if (env && env.production) {
		return merge(commonConfig, prodConfig)
	} else {
		return merge(commonConfig, devConfig)
	}
}