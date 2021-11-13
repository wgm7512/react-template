const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const path = require('path');

const webpackProdConfig = {
  mode: 'production ',
}

module.exports = merge(webpackConfigBase, webpackProdConfig);