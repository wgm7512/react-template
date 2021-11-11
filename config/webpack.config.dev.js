const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const path = require('path');

const webpackDevConfig = {
  devServer: {
    port: 3304,
    host: 'localhost',
    hot: true,
    open: true,
  }
}

module.exports = merge(webpackConfigBase, webpackDevConfig);