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
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js',
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	}
}