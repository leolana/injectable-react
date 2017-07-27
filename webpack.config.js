var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var LIB_DIR = path.resolve(__dirname, 'src/lib');

var config = {
  entry: {
    app: APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : [
          APP_DIR,
          LIB_DIR
        ],
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
