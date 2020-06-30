var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 表示当图片小于8kb时，打包后图片以base64形式存储，否则copy对应图片
              limit: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
}