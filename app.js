const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//We'll store our online users here
let players = [];

app.use("/static", express.static("./static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

io.on("connection", (socket) => {
  //initial emissions
  socket.broadcast.emit("welcome_user");
  socket.emit("player_join");

  //player ready
  socket.on("player_ready", (email) => {
    io.emit("player_ready", email);
  });

  //disconnect broadcast
  socket.on("disconnect", () => {
    io.emit("user_disconnect");
  });
});

server.listen(3000, () => {
  console.log("Listening for requests!");
});
