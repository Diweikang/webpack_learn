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
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
}