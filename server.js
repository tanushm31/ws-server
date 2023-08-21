const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);
const io = socketIo(server, {
	cors: {
		origin: "*",
	},
});

const PORT = process.env.PORT || 3005;

io.on("connection", (socket) => {
	console.log("User Connected With ID:", socket.id);

	socket.on("message", (data) => {
		// Broadcast the received message to all connected clients
		console.log(socket.id, data);
		// io.emit("message", data);
		socket.broadcast.emit("message", data);
		
        // 1. Socket.emit() - sends a message to the client that triggered the event
		// 2. Socket.broadcast.emit() - sends a message to all the clients except the one that triggered the event
		// 3. io.emit() - sends a message to all the clients including the one that triggered the event


		// Q: Difference between io.emit and socket.broadcast.emit?
		// A: io.emit sends the message to all connected clients including the sender
		//    socket.broadcast.emit sends the message to all connected clients except the sender
		// Q: Difference between io.emit and socket.emit?
		// A: io.emit sends the message to all connected clients including the sender
		//    socket.emit sends the message to only the sender
	});

	socket.on("disconnect", () => {
		console.log("A user disconnected");
	});
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
