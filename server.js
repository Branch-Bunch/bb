const net = require('net')

const server = net.createServer((socket) => {
  console.log('listening on http://127.0.0.1:1337')
  socket.write('Echo server\r\n')
  socket.pipe(socket)
})

server.listen(1337, '127.0.0.1')
