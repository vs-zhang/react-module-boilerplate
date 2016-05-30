var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var isProduction = process.env.NODE_ENV === 'production';
var APP_PORT = isProduction ? process.env.PORT : 3000;
var app = new express();

if (!isProduction) {
  var bundleStart = null;
  var WebpackDevServer = require('webpack-dev-server');
  var compiler = webpack(webpackConfig);

  compiler.plugin('compile', function () {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function () {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  app = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });
} else {
  app.use(express.static('./dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

if (!APP_PORT) {
  APP_PORT = 3000;
}

app.listen(APP_PORT, function () {
  console.log('Server running on port ' + APP_PORT);
});