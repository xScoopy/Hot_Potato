console.log("hello world");

let socket = io();

let form = document.getElementById("form");
let readyButton = document.getElementById("ready-button");
let email = document.getElementById("email");
let alerts = document.getElementById("alerts");
let taterDiv = document.getElementById("tater-div")
let announcement = document.getElementById("announcement")
let passButton = document.getElementById("pass-button")
let outcome = document.getElementById("game-outcome")

// Event Listeners
form.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value) {
    socket.emit("player_ready", email.value);
    form.style.display = "none";
  }
});

passButton.addEventListener("click", (event) => {
    event.preventDefault();
    taterDiv.style.visibility = "hidden"
    announcement.style.visibility = "visible"
    socket.emit("potato_on")
    
})

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

socket.on("total_ready", (readyPlayers) => {
    let item = document.createElement("li");
    item.textContent = Object.keys(readyPlayers).length + " player(s) ready to play!"
    alerts.append(item) 
})

socket.on("potato_on", () => {
    taterDiv.style.visibility = "visible"
    announcement.style.visibility = "hidden"
    console.log("Received potato")
})

socket.on("max_players", (readyPlayers) => {
    let item = document.createElement("li");
    item.textContent = readyPlayers["PlayerOne"] + " and " + readyPlayers["PlayerTwo"] + " are already readied up."
    alerts.append(item)
})

socket.on("timer_end", () => {
  if (taterDiv.style.visibility == "visible") {
    document.getElementById("pass-button").disabled = true;
    outcome.textContent = "You Lose D:"
    socket.emit("game_loser")
  } else {
    outcome.textContent = "You Win!"
  }
  let item = document.createElement("li");
  item.textContent = "The game is over"
  alerts.append(item)
})

