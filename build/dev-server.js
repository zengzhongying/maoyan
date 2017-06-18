require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var http = require('http');
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var apiRoutes = express.Router();
apiRoutes.get('/film', function (req, res) {
  let url = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000';
  let idList = '';
  let getIdList = new Promise((resolve, reject) => {
    http.get(url, response => {
      response.on('data', data => {
        idList += data;
      });
      response.on('end', () => {
        resolve(idList);
      });
    })
  });
  getIdList.then(list => {
      let data = JSON.parse(list)
      res.json(data);
    })
 })
apiRoutes.get('/cinema', function (req, res) {
  let url = 'http://m.maoyan.com/cinemas.json';
  let cinemaList = '';
  let getcinemaList = new Promise((resolve, reject) => {
    http.get(url, response => {
      response.on('data', data => {
        cinemaList += data;
      });
      response.on('end', () => {
        resolve(cinemaList);
      });
    })
  });
  getcinemaList.then(list => {
      let data = JSON.parse(list)
      res.json(data);
    })
 })
apiRoutes.get('/filmdetail/:id', function (req, res) {
  // let movieid = +req.params.id;
  let url = `http://m.maoyan.com/movie/${req.params.id}.json`;
  // console.log(url);
  let filmdetailList = '';
  let getfilmdetailList = new Promise((resolve, reject) => {
    http.get(url, response => {
      response.on('data', data => {
        filmdetailList += data;
      });
      response.on('end', () => {
        resolve(filmdetailList);
      });
    })
  });
  getfilmdetailList.then(list => {
      let data = JSON.parse(list)
      res.json(data);
    })
 })
 apiRoutes.get('/cinemadetail/:id', function (req, res) {
   // let movieid = +req.params.id;
   let url = `http://m.maoyan.com/showtime/wrap.json?cinemaid=${req.params.id}&movieid=`;
   // console.log(url);
   let cinemadetailList = '';
   let getcinemadetailList = new Promise((resolve, reject) => {
     http.get(url, response => {
       response.on('data', data => {
         cinemadetailList += data;
       });
       response.on('end', () => {
         resolve(cinemadetailList);
       });
     })
   });
   getcinemadetailList.then(list => {
       let data = JSON.parse(list)
       res.json(data);
     })
  })
apiRoutes.get('/buy/:id', function (req, res) {
  // let movieid = +req.params.id;
  let url = `http://m.maoyan.com/movie/${req.params.id}.json`;
  // console.log(url);
  let buyList = '';
  let getbuyList = new Promise((resolve, reject) => {
    http.get(url, response => {
      response.on('data', data => {
        buyList += data;
      });
      response.on('end', () => {
        resolve(buyList);
      });
    })
  });
  buyList.then(list => {
      let data = JSON.parse(list)
      res.json(data);
    })
 })
 apiRoutes.get('/cinemadetail/:id', function (req, res) {
   // let movieid = +req.params.id;
   let url = `http://m.maoyan.com/showtime/wrap.json?cinemaid=${req.params.id}&movieid=`;
   // console.log(url);
   let cinemadetailList = '';
   let getcinemadetailList = new Promise((resolve, reject) => {
     http.get(url, response => {
       response.on('data', data => {
         cinemadetailList += data;
       });
       response.on('end', () => {
         resolve(cinemadetailList);
       });
     })
   });
   getcinemadetailList.then(list => {
       let data = JSON.parse(list)
       res.json(data);
     })
  })


app.use('/api', apiRoutes);


var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
