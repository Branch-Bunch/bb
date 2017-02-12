'use strict'

const path = require('path')
const { app, BrowserWindow } = require('electron')
const shortcut = require('electron-localshortcut')

class Window {
  constructor() {
    this.createWindow()
  }

  createWindow() {
    this.window = new BrowserWindow({ width: 800, height: 600 })
  }

  loadURL(url) {
    this.window.loadURL(url) 
  }

  show() {
    this.window.show()
  }

  devTools() {
    this.window.webContents.openDevTools()
  }

  windowEvents() {
    this.window.on('close', (e) => {
      if (this.window.isVisible()) {
        e.preventDefault()
        this.window.hide()
       }
       this.unregister()
    })

    this.window.on('show', () => {
      this.register()
    })
  }

  register() {
    shortcut.register(this.window, 'Esc', () => {
      this.window.close()
    })
  }

  unregister() {
    shortcut.unregisterAll(this.window)
  }

  initShortCut() {
    this.register()
  }
}

module.exports = Window
