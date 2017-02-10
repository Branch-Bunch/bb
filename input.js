const readline = require('readline')

const Input = (() => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'I am BB, witness me > '
  })

  function getInput(inputHandler) {
    rl.on('line', (input) => {
      inputHandler(input)
    })
  }
})()

module.exports = Input
