'use strict'

const {app, BrowserWindow} = require('electron')
const appExpress = require('express')()
const path = require('path')
const url = require('url')
const bodyParser = require('body-parser')
const QueryWindow = require('./windows/controllers/QueryWindow')

appExpress.use(bodyParser.urlencoded({ extended: true }))

class BB {
  constructor() {
    this.queryWindow = null
  }

  init() {
    this.initBB()
  }

  initBB() {
    app.on('ready', () => {
      this.createQueryWindow()
      this.queryWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/windows/views/index.html'),
        protocol: 'file',
        slashes: true
      })) 
      this.queryWindow.devTools()

      /*
      const {net} = require('electron')
      const request = net.request('http://127.0.0.1:1337')
      request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`)
        })
        response.on('end', () => {
          console.log('no more data in response.')
        })
      })
      request.end() 

      const requestQuery = net.request({
        method: 'POST',
        protocol: 'http:',
        hostname: '127.0.0.1',
        port: '1337',
        path: '/queries'
      })
      requestQuery.on('response', (response) => {
        console.log('worked')
        responseQuery.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`)
        })
        responseQuery.writeHead(301, { "Location": "http://127.0.0.1:1337" })
      })
      requestQuery.end() */
    })

    app.on('activate', () => {
      if (this.queryWindow == null) { 
        this.createQueryWindow() 
      } else {
        this.queryWindow.show()
      }
    })
  }

  createQueryWindow() {
    this.queryWindow = new QueryWindow()
  }
}

new BB().init()
