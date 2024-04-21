// This is a simple example of how to create a websocket server using socket.io
// To run this code, you need to install the socket.io module using npm
// npm install socket.io , we are using http module to create a server and socket.io to create a websocket server
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

const server = http.createServer((req, res) => {
  res.end("I am connected");
});
// we are using cors module to enable cross-origin requests
const corsOptions = {
  cors: true,
  origins: "*:*",
};

const io = socketio(server, corsOptions);

io.on("connection", (socket, req) => {
  //ws.send becomes socket.emit
  socket.emit("welcome", "Welcome to the websocket server");
  socket.on("message", (msg) => {
    console.log(msg);
  });
});
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
