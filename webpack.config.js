'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/entry.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
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
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]',
          'sass?sourceMap'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192&name=images/[name]-[hash:6].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      favicon: path.join(__dirname, 'src', 'assets/favicon.ico'),
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ],
  node: {
    fs: 'empty'
  }
};