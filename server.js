'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')
const config = require('./config')

const houndify = require('houndify').HoundifyExpress

const port = config.port || 3030

app.use(express.static(path.join(__dirname, 'windows', 'views', 'main')))

app.get('/houndifyAuth', houndify.createAuthenticationHandler({
  clientId: config.clientId,
  clientKey: config.clientKey
}))

app.get('/textSearchProxy', houndify.createTextProxyHandler())

server.listen(port, () => {
  console.log("Listening on http://localhost:" + port)
})
