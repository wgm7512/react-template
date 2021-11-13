const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const path = require('path');

const webpackDevConfig = {
  mode: 'development', // 如果没有手动的设置 NODE_ENV ，在执行 webpack 后，会将 mode 同步到 NODE_ENV 中
  devServer: {
    port: 3304,
    host: 'localhost',
    hot: true,
    open: true,
  }
}

module.exports = merge(webpackConfigBase, webpackDevConfig);