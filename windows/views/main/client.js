const houndify = require('houndify')
const path = require('path')

const argv = require('minimist')(process.argv.slice(2))

const configFile = argv.config || 'config' 
const config = require(path.join(__dirname, configFile))

const HoundifyClient = new houndify.HoundifyClient({
  clientId: config.clientId,
  
  authURLL '/houndifyAuth",

  // Voice Activity Detection
  enableVAD: false,
  
  textSearchProxy: {
    url: "/textSearchProxy",
    method: "GET"
  },

  onResponse: function(response, info) {
    console.log(response, info)
    var conversationState = HoundifyClient.conversation.getState()
    HoundifyClient.conversation.setState(conversationState)
  },

  onError: function(err, info) {
    console.log(err)
  }
})

module.exports = HoundifyClient 
