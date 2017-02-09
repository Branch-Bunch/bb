'use strict'

const houndify = require('houndify')

const client = new Houndify.HoundifyClient({

  clientId: "BB_ID",
  clientKey: "BB_KEY"

  // Voice Activity Detection
  enableVAD: false,

  // only if running locally 
  textSearchProxy: {
    url: "/textSearchProxy",
    method: "GET"
  },

  function onResponse(response, info) {
    console.log(response)
  },

  function onError(error, info) {
    console.log(error)
  }  
})

module.exports = HoundifyClient
