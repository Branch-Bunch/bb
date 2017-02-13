'use strict'

const { app } = require('electron')
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
      this.queryWindow.loadURL('http://localhost:3000')
      this.queryWindow.devTools()
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
