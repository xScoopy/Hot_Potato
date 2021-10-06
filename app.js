const express = require("express");
const app = express();
require('dotenv').config();
const mailer = require('./utils/mailer')
const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.EMAIL_DOMAIN
// const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN})
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//We'll store our online users here

app.use("/static", express.static("./static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

var countdown = getRandomIntInclusive(15000,20000);

  

const readyPlayers = {}
io.on("connection", (socket) => {
  //initial emissions
  socket.broadcast.emit("welcome_user");
  socket.emit("player_join");

  //player ready
  socket.on("player_ready", (email) => {
    if (readyPlayers["PlayerOne"]) {
        if (readyPlayers["PlayerTwo"]){
            io.emit("max_players", readyPlayers)
        } else {
            readyPlayers["PlayerTwo"] = email
            socket.info = email
            socket.broadcast.emit("potato_on")
            io.emit("total_ready", readyPlayers)
            setTimeout(function() {
              io.emit("timer_end")
            }, countdown);
        } 
    } else {
        readyPlayers["PlayerOne"] = email
        socket.info = email
        io.emit("total_ready", readyPlayers)
    }
  });

  //disconnect broadcast
  socket.on("disconnect", () => {
    io.emit("user_disconnect");
  });
  //turn on potato div for player holding potato
  socket.on("potato_on", () => {
      socket.broadcast.emit("potato_on")
  })
  //send email to loser's email
  socket.on("game_loser", () => {
    // const data = {
    //   from: 'no-reply@example.com',
    //   to: socket.info,
    //   subject: 'You lost bruv',
    //   text: 'Just a friendly reminder that you lost that game of hot potato earlier. Try not to get too down on yourself scrub.'
    // }
    // mailgun.messages().send(data, (error, body) => {
    //   console.log(body)
    // })
    mailer.sendMail(socket.info)
  })

});

server.listen(3000, () => {
  console.log("Listening for requests!");
});
