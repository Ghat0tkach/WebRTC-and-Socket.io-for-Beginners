const express = require("express");
const socketio = require("socket.io");

const cors = require("cors");

const app = express();

app.use(cors());
const io = socketio();

app.listen(9000, () => {
  console.log("Server has started");
});
