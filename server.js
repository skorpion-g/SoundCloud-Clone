var express = require('express');
const { truncate } = require('fs');
var { createProxyMiddleware } = require('http-proxy-middleware');
var port = 7000;
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('client'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/songdata/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}));

app.use('/relatedTracks/', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true
}))

app.use('/artistBio/', createProxyMiddleware({
  target: 'http://localhost:2000',
  changeOrigin: true
}))

app.use('/hashtags/', createProxyMiddleware({
  target: 'http://localhost:9001',
  changeOrigin: true
}))

app.use('/comments/', createProxyMiddleware({
  target: 'http://localhost:9000',
  changeOrigin: true
}))

app.use('/users/', createProxyMiddleware({
  target: 'http://localhost:9002',
  changeOrigin: true
}))

app.use('/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}))

app.use('/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}))

app.listen(port, () => {
  console.log(`Proxy server listening on http://localhost:${port}!`)
})

module.exports = app;