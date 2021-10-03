console.log('hello world')

const socket = io();

socket.on("some_event_here", () => {
    //Event functionality here
    return 0 //just to not throw errors, can remove when finished with function
})