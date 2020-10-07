var express = require('express');
const { truncate } = require('fs');
var { createProxyMiddleware } = require('http-proxy-middleware');
var port = 6666;
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/songdata/', createProxyMiddleware({
  target: 'http://localhost:1000',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`Proxy server listening on http://localhost:${port}!`)
})

module.exports = app;