var path = require('path');
var webpack = require('webpack');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [mainPath],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
