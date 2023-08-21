# This is a test app for socket.io

-   To run the app:
-   1. Install node.js
-   2. Install socket.io
-   3. Run the server.js file

1. Socket.emit() - sends a message to the client that triggered the event
2. Socket.broadcast.emit() - sends a message to all the clients except the one that triggered the event
3. io.emit() - sends a message to all the clients including the one that triggered the event

**Q: Difference between _io.emit_ and _socket.broadcast.emit_ ?**

> **io.emit** sends the message to all connected clients including the sender

> **socket.broadcast.emit** sends the message to all connected clients except the sender

**Q: Difference between _io.emit_ and _socket.emit_ ?**

> **io.emit** sends the message to all connected clients including the sender

> **socket.emit** sends the message to only the sender
