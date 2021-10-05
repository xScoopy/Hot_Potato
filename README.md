# Hot Potato


## Project Description

This project is a simple two-player game of "Hot Potato" to be played in the browser. Two players connect to the site and input their email addresses to start the game. When the game starts, a timer (which is not visible to the players) begins counting down, and the two players pass the hot potato between each other as frequently as they desire. The object of the game is to *not* be in possession of the hot potato when the timer expires. When the game ends, an email is sent to the loser informing them that they lost. 

### WebSockets

This project uses WebSockets because they are ideal for browser-based games. Games require real-time updates between the client (browser) and the server. Traditional HTTP requests require much more data and allow for less user interactivity than WebSockets. Additionally, WebSockets can facilitate bidirectional full-duplex communication, so the client and server can send data to each other simultaneously. Since this game is designed for two users playing against each other in real-time, bidirectional full-duplex communication can help minimize latency in the game.

This project uses the [Socket.io](https://socket.io) npm package to implement WebSockets.


## Installation

Since this project is not deployed, you must first download the project to run it. 

- Click the green "Download" button towards the top-right corner of this page 
- Navigate into the project directory using Terminal
- Run this command: `npm install`
- Run this command: `node index.js`
- Open your browser at http://localhost:3000

Note: Since this project is not deployed, you will not be able to play with another person using a separate machine. However, you can open multiple tabs at http://localhost:3000 to create separate users for playing.


## Mockup

<img width="1437" alt="Figma Mockup" src="https://github.com/xScoopy/Hot_Potato/blob/main/Mockup.png?raw=true">

This is a design mockup of the project created using Figma. It includes event interaction details for front-end and back-end consistency. 
 

## Team

- Jeremiah Leary
- Gobind Puniani
- John Saguay


 












