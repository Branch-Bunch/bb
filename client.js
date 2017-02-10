'use strict'

const houndify = require('houndify')

const Client = new houndify.HoundifyClient({

  clientId: "BB_ID",
  clientKey: "BB_KEY",

  // Voice Activity Detection
  enableVAD: false,

  // only if running locally 
  textSearchProxy: {
    url: "/textSearchProxy",
    method: "GET"
  },

  onResponse: function(response, info) {
    console.log(response)
    conversationState = client.conversation.getState()
    client.conversation.setState(conversationState)
  },

  onError: function(error, info) {
    console.log(error)
  }  
})

module.exports = Client
