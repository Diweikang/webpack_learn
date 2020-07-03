const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const complier = webpack(config);

const app = express();

// 当文件发生变化后，重新进行编译
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))

app.listen(3000, () => {
  console.log('server is running')
})