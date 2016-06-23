var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var request = require('request');
var cheerio = require('cheerio');
request = request.defaults({jar: true});

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
  var options = {
    url: 'https://www.google.com',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
    }
  };
  var result = []
  request(options, function () {
    request('https://www.google.com/search?q=boston&source=lnms&tbm=nws', function (error, response, html) {
      var $ = cheerio.load(html);
      $("div.g").each(function(i, element) {
        "use strict";
        var newsCard = $(this),
          item = { title : "", imgSrc : "", link : ""};
        var h3 = newsCard.find('h3');
        item.title = h3.text();
        item.imgSrc = newsCard.find('img').attr('src');
        var href = h3.children().first().attr('href');
        item.link = /http(.*)&sa/.exec(href)[0].slice(0,-3);
        result.push(item);
      });
      res.send(result)
    });
  });
})

if (!APP_PORT) {
  APP_PORT = 3000;
}

app.listen(APP_PORT, function () {
  console.log('Server running on port ' + APP_PORT);
});
