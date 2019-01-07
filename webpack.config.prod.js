const merge = require('webpack-merge');
const common = require('./webpack.config.js');
module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  }
});
