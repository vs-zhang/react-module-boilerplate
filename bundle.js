var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');

module.exports = function () {

  var bundleStart = null;
  var compiler = webpack(webpackConfig);

  compiler.plugin('compile', function () {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function () {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8081, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Bundling project, please wait...');
  });

};