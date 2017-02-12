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
