console.log("hello world");

let socket = io();

let form = document.getElementById("form");
let readyButton = document.getElementById("ready-button");
let email = document.getElementById("email");
let alerts = document.getElementById("alerts");

// Event Listeners
form.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value) {
    socket.emit("player_ready", email.value);
    //store player email somewhere
    form.style.display = "none";
  }
});

socket.on("player_join", () => {
  //send a message to alerts
  let item = document.createElement("li");
  item.textContent = "A new player has joined";
  alerts.appendChild(item);
  //prompt them to enter email
  alert("Please enter your email and ready up!");
});

socket.on("welcome_user", () => {
  let item = document.createElement("li");
  item.textContent = "A new player has joined";
  alerts.appendChild(item);
});

socket.on("user_disconnect", () => {
  let item = document.createElement("li");
  item.textContent = "A player has disconnected";
  alerts.appendChild(item);
});

socket.on("player_ready", (email) => {
  //send a message to alerts
  let item = document.createElement("li");
  item.textContent = email + " is ready!";
  alerts.append(item);
});

// socket.on("timer_start", () => {
//   //send a message to alerts
//   let item = document.createElement("li")
//   item.textContent = "Hot Potato!"
//   alerts.append(item)
// });

// socket.on("timer_end", () => {
//   //send a message to alerts
//   let item = document.createElement("li")
//   item.textContent = "Game over!"
//   alerts.append(item)
// });
