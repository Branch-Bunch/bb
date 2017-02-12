'use strict'

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const Window = require('./controllers/window')

class BB {
  constructor() {
    this.window = null
  }

  init() {
    this.initBB()
  }

  initBB() {
    app.on('ready', () => {
      this.createWindow()
      this.window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })) 
      this.window.devTools()

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
    })

    app.on('activate', () => {
      if (this.window == null) { 
        this.createWindow() 
      } else {
        this.window.show()
      }
    })
  }

  createWindow() {
    this.window = new Window()
  }
}

new BB().init()
