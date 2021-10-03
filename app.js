const express = require('express')
const app = express();

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.use("/static", express.static('./static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

io.on('connection', (socket) => {
    //where our emits will happen
    return 0 //just to stop errors
})

server.listen(3000, ()  => {
    console.log('Listening for requests!')
})