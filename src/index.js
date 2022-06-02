const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryName = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicDirectoryName))

let count = 0 

io.on('connection', (socket)=>{
    console.log('new websocket connection!')
    
// It's my chalange code

   socket.emit('message', 'Welcome!')


    // socket.emit('countUpdated', count)

    // socket.on('increment', () => {
    //     count++
    //     io.emit('countUpdated', count)
    // })
})

server.listen(port, () => {
    console.log(`port listning on up port ${port}`)
})