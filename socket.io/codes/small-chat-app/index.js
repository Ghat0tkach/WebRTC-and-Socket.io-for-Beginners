const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
const corsOptions = {
  cors: true,
  origins: "*:*",
};

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer, corsOptions);

io.on("connection", (socket) => {
  socket.emit("messageFromServer", { data: "Welcome to the socket.io server" });
  socket.on("messageToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });
  socket.on("newMessageToServer", (msg) => {
    io.emit("messageToClients", { text: msg.text });
  });

  //rooms
  socket.join("level1");
  socket
    .to("level1")
    .emit("joined", `${socket.id} says I have joined the level 1 room!`);
});

//here we are listening on namespace
io.of("/admin").on("connection", (socket) => {
  console.log("Someone connected to the admin namespace!");
  io.of("/admin").emit("welcome", "Welcome to the admin channel!");
});
