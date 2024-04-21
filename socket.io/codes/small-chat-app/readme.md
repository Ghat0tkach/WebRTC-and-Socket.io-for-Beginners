# Socket.IO Chat Server

This is a simple chat server built using Socket.IO and Express. It allows clients to connect and exchange messages in real-time.

## Features

- Real-time communication using WebSockets
- Cross-Origin Resource Sharing (CORS) enabled
- Static file serving for client-side resources

## Usage

### Socket.IO Events

- **emit**: Allows sending events/data from the server to the client.
- **on**: Listens for events/data from the client or server.
- **connect**: Event triggered when a client successfully establishes a connection with the server.

### Example Usage:

#### Client Side (JavaScript)

```javascript
// Connect to the server
const socket = io("http://localhost:9000");

// Listen for a welcome message from the server
socket.on("messageFromServer", (data) => {
  console.log("Server:", data);
});

// Send a message to the server
socket.emit("messageToServer", { text: "Hello, server!" });
```

#### Server Side (JavaScript)

```javascript
// Handle Socket.IO connections
io.on("connection", (socket) => {
  // Send a welcome message to the newly connected client
  socket.emit("messageFromServer", { data: "Welcome to the socket.io server" });

  // Listen for messages from the client
  socket.on("messageToServer", (dataFromClient) => {
    console.log("Client:", dataFromClient);
  });
});
```

`server console.log
Server: { data: 'Welcome to the socket.io server' }`
`client console.log
Client : {text:'Hello Server'}
`

Explanation:

- When the client connects to the server, it emits a `messageToServer` event with the data `{ text: "Hello, server!" }`.
- The server receives this event and logs the message from the client, resulting in the output: `Client: { text: "Hello, server!" }`.
- After receiving the message from the client, the server emits a `messageFromServer` event with the data `{ data: "Welcome to the socket.io server" }` to the client.
- The client listens for the `messageFromServer` event and logs the welcome message from the server, resulting in the output: `Server: { data: "Welcome to the socket.io server" }`.
