'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/entry.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].min.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: [
    new ExtractTextPlugin('/app.min.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      favicon: path.join(__dirname, 'src', 'assets/favicon.ico'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]!sass'),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  }
};