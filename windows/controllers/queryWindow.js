'use strict'

const path = require('path')
const { app, BrowserWindow } = require('electron')
const shortcut = require('electron-localshortcut')

class QueryWindow {
  constructor() {
    this.createQueryWindow()
    this.initWindowEvents()
    this.initShortCut()
  }

  createQueryWindow() {
    this.queryWindow = new BrowserWindow({ 
      width: 800, 
      height: 900,
      show: true 
    })
  }

  loadURL(url) {
    this.queryWindow.loadURL(url) 
  }

  show() {
    this.queryWindow.show()
  }

  devTools() {
    this.queryWindow.webContents.openDevTools()
  }

  initWindowEvents() {
    this.queryWindow.on('close', (e) => {
      if (this.queryWindow.isVisible()) {
        e.preventDefault()
        this.queryWindow.hide()
       }
       this.unregister()
    })

    this.queryWindow.on('show', () => {
      this.register()
    })
  }

  register() {
    shortcut.register(this.queryWindow, 'Esc', () => {
      this.queryWindow.close()
    })
  }

  unregister() {
    shortcut.unregisterAll(this.queryWindow)
  }

  initShortCut() {
    this.register()
  }
}

module.exports = QueryWindow
