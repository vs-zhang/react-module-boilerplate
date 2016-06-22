var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var axios = require('axios')

var isProduction = process.env.NODE_ENV === 'production';
var APP_PORT = isProduction ? process.env.PORT : 3000;
var app = new express();

if (!isProduction) {
  var compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))

} else {
  app.use(express.static('./dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.get('/google_news', function response(req, res) {
  axios.get('https://www.google.com')
    .then(function(res){
    })
  res.send({data: ['yayo']})
})

if (!APP_PORT) {
  APP_PORT = 3000;
}

app.listen(APP_PORT, function () {
  console.log('Server running on port ' + APP_PORT);
});
