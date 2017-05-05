var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname ,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./javascript/main.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componenets)/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0' ],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/javascript/",
    filename: "bundle.js"
  },
  plugins: debug ? [
//    new HtmlWebpackPlugin()
  ] : [
//    new HtmlWebpackPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};