
console.log("hello world");

let socket = io()

// let form = document.getElementById("form");
// let input = document.getElementById("email");
let alerts = document.getElementById("alerts")

//Event Listeners
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (input.value) {
//     socket.emit("player_ready", input.value);
//     //store player email somewhere
//     form.style.display = "none"
//   }
// });

//Socket.io
// socket.on("some_event_here", () => {
//   //Event functionality here
//   return 0; 
//   //just to not throw errors, can remove when finished with function
// });

socket.on("player_join", () => {
  //send a message to alerts
  let item = document.createElement("li")
  item.textContent = "A new player has joined"
  alerts.appendChild(item)
  //prompt them to enter email
  alert("Please enter your email and ready up!")
});

socket.on("welcome_user", () => {
    let item = document.createElement("li")
    item.textContent = "A new player has joined"
    alerts.appendChild(item)
})

// socket.on("disconnect", () => {
//     let item = document.createElement("li")
//     item.textContent = "A player has disconnected"
//     alerts.appendChild(item)
// })

// // Listen for "new user" socket emits
// socket.on('new user', (username) => {
//   //Save the username as key to access the user's socket id
//   onlineUsers[username] = socket.id;
//   //Save the username to socket as well. This is important for later.
//   socket["username"] = username;
//   console.log(`✋ ${username} has joined the chat! ✋`);
//   //Send the username to all clients currently connected
//   io.emit("new user", username);
// })

// socket.on("player_ready", () => {
//   //send a message to alerts
//   let item = document.createElement("li")
//   item.textContent = "A new player is ready"
//   alerts.append(item)
// });

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
