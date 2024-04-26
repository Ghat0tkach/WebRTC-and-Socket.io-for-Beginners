const socket = io("http://localhost:9000");
const socket2 = io("http://localhost:9000/admin");

// mini-chat app socket
socket.on("messageFromServer", (dataFromServer) => {
  console.log(dataFromServer);
  socket.emit("messageToServer", { data: "Data from the client!" });
});

socket.on("messageToClients", (msg) => {
  // Create a new list item to display the message
  const listItem = document.createElement("li");
  listItem.textContent = msg.text;

  // Append the new message to the message list
  const messageList = document.getElementById("messageList");
  messageList.appendChild(listItem);
});

document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("message").value;
    socket.emit("newMessageToServer", { text: message });

    // Clear the input field after submitting the message
    document.getElementById("message").value = "";
  });

socket.on("joined", (msg) => {
  console.log(msg);
});

// admin namespace socket
socket2.on("welcome", (dataFromServer) => {
  console.log(dataFromServer);
});
