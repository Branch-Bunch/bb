'use strict'

const jsonElement = document.getElementById("responseJSON")
const infoElement = document.getElementById("infoJSON")
const outputElement = document.getElementById("outputString")

const HoundifyRequest = (() => {
  const RequestInfo = { 
    ClientID: config.clientId,
    UserID: "test_user",
    Latitude: 45.4205, 
    Longitude: -75.6928,
    Street: "150 Elgin Street K2P 1L4",
    City: "Ottawa",
    State: "Ontario",
    Country: "Canada",
    UseClientTime: true
  } 
      
  const HoundifyClient = new Houndify.HoundifyClient({
        
    clientId: config.clientId, 

    authURL: "/houndifyAuth",
 
    // Voice Activity Detection 
    enableVAD: false,

    textSearchProxy: {
      url: "/textSearchProxy",
      method: "GET"  
    },

    onResponse: function(response, info) {
      if (response.AllResults && response.AllResults[0] !== undefined) {
        jsonElement.value = response.stringify(undefined, 2)
        jsonElement.parentNode.hidden = false
        infoElement.value = JSON.stringify(info, undefined, 2)
        infoElement.parentNode.hidden = false
        outputElement.value = response.stringify(undefined, 2)
        outputElement.parentNode.hidden = false
        console.log(response) 
      }
    },

    onError: function(err, info) {
      jsonElement.parentNode.hidden = true
      infoElement.value = JSON.stringify(info, undefined, 2)
      infoElement.parentNode.hidden = false 
      outputElement.parentNode.hidden = true
      console.log(err)
    }
  })
 
  function textQuery() {
    let query = document.getElementById('query').value
    HoundifyClient.textSearch.query(query, RequestInfo)
    jsonElement.parentNode.hidden = true
    infoElement.parentNode.hidden = true
    outputElement.parentNode.hidden = true
  }
})()

module.exports = HoundifyRequest
