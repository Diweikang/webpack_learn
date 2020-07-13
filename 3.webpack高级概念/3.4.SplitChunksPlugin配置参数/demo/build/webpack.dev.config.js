const path = require('path');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devserver: {
    open: true,
    contentBase: path.join(__dirname, 'dist')
  }
}