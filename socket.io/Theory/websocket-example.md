**Introduction to Simple WebSocket Chat Application**

In the realm of real-time communication on the web, WebSocket technology stands out as a powerful tool for enabling instant and bidirectional data exchange between clients and servers. This simplicity makes WebSocket ideal for applications like chat systems, where users expect instantaneous message delivery.

In this introductory project, we explore the fundamental concepts of WebSocket communication by building a minimalist chat application using Node.js on the server-side and HTML on the client-side. The application allows users to exchange text messages in real-time, creating a seamless chat experience akin to popular messaging platforms.

The server-side logic, implemented in Node.js, utilizes the `ws` library to establish a WebSocket server. When a new client connects, the server acknowledges their presence and relays any incoming messages to all connected clients, ensuring everyone stays in sync.

On the client-side, a straightforward HTML interface provides users with a text input field to type messages and a send button to dispatch them. JavaScript handles WebSocket communication, facilitating message reception and display without requiring the page to reload.

Through this project, we aim to demystify WebSocket technology and demonstrate its versatility in building real-time applications. By following along, you'll gain hands-on experience in setting up WebSocket servers, handling client connections, and orchestrating seamless communication between users in a collaborative environment. Let's dive in and explore the fascinating world of WebSocket-powered chat applications!

```
+------------------+              +------------------+
|                  |     HTTP     |                  |
|    Client        |    Upgrade   |     Server       |
|                  |  Request     |                  |
+------------------+ --------->  +------------------+
       |                              |
       |    Upgrade handshake         |
       |    (HTTP 101 response)       |
       |                              |
+------------------+              +------------------+
|                  |              |                  |
|    Client        |    WebSocket |     Server       |
|                  |    handshake |                  |
+------------------+  <--------- +------------------+
       |                              |
       |    WebSocket connection      |
       |    established               |
       |                              |
+------------------+              +------------------+
|                  |              |                  |
|    Client        |   WebSocket  |     Server       |
|                  |   messages   |                  |
+------------------+  <--------> +------------------+
       |                              |
       |    Bidirectional data        |
       |    exchange                  |
       |                              |
```

Explanation:

- The client initiates the WebSocket connection by sending an HTTP request to the server, requesting an upgrade to the WebSocket protocol.
- The server acknowledges the upgrade request and responds with an HTTP 101 status code (Switching Protocols), indicating the successful upgrade to the WebSocket protocol.
- Upon receiving the server's response, the client and server perform the WebSocket handshake, establishing a persistent bidirectional connection.
- Once the WebSocket connection is established, both the client and server can exchange messages in real-time over the WebSocket protocol.

This diagram illustrates the high-level flow of WebSocket communication, starting with the initial HTTP handshake and culminating in the establishment of a persistent WebSocket connection for bidirectional data exchange.

1. **Node.js Server (`app.js`)**:

```javascript
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("Hi! A new user connected.");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
```

2. **HTML File (`index.html`)**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Chat</title>
  </head>
  <body>
    <input type="text" id="messageInput" placeholder="Type your message..." />
    <button onclick="sendMessage()">Send</button>
    <ul id="messages"></ul>

    <script>
      const ws = new WebSocket("ws://localhost:3000");

      ws.onmessage = (event) => {
        const messagesList = document.getElementById("messages");
        const messageItem = document.createElement("li");
        messageItem.textContent = event.data;
        messagesList.appendChild(messageItem);
      };

      function sendMessage() {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value;
        ws.send(message);
        messageInput.value = "";
      }
    </script>
  </body>
</html>
```

To run this:

1. Save the server code in a file named `app.js`.
2. Create an HTML file named `index.html`.
3. Install the `ws` library by running `npm install ws`.
4. Run the server with `node app.js`.
5. Open the HTML file in a web browser.

Now, when you open the HTML file in multiple browser windows, you can type messages in one window, click "Send," and see the messages appear in all the other windows. That's a simple chat application using WebSockets!
