const e = require("cors");

console.log("hello world");

const socket = io();

let form = document.getElementById("form");
let input = document.getElementById("email");
let alerts = document.getElementById("alerts")

//Event Listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit("player_ready", input.value);
    //store player email somewhere
    form.style.display = "none"
  }
});

//Socker.io
socket.on("some_event_here", () => {
  //Event functionality here
  return 0; //just to not throw errors, can remove when finished with function
});

socket.on("player_join", () => {
  //send a message to alerts
  //prompt them to enter email
});

socket.on("player_ready", () => {});
