const express = require('express')
const app = express();

const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile('./static/index.html')
})

server.listen(3000, ()  => {
    console.log('Listening for requests!')
})