'use strict'

const houndify = require('./client.js')
const input = require('./input.js')
const dotenv = require('dotenv').config()

const argv = require('minimist')(process.argv.slice(2))

// refer to https://houndify.com/reference/RequestInfo
const requestInfo = {
  ClientID: "BB_ID"
  Latitude: 37.388309,
  Longitude: -121.973936
}

const queryString = "What is the weather like in Ottawa?"

houndify.textSearch.query(argv.query || queryString, requestInfo)