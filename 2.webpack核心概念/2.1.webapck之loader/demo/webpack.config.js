var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
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
          'css-loader',
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