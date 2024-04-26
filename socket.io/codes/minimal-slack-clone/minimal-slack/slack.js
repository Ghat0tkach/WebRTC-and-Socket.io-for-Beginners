const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const namespaces = require("./data/namespaces");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(cors());

const server = http.createServer(app); // Create HTTP server

const io = socketio(server); // Pass server instance to socketio()

io.on("connection", (socket) => {
  let nsData = namespaces.map((ns) => {
    return {
      img: ns.img,
      endpoint: ns.endpoint,
    };
  });
  //send nsData back to client , we will use socket not io as we want to send data to only that client
  socket.emit("nsList", nsData);
});

namespaces.forEach((namespace) => {
  io.of(namespace.endpoint).on("connection", (socket) => {
    console.log(`${socket.id} has joined ${namespace.endpoint}`);
    socket.emit("nsRoomLoad", namespaces[0].rooms);
  });
});

server.listen(9000, () => {
  console.log("Server has started at port 9000");
});
