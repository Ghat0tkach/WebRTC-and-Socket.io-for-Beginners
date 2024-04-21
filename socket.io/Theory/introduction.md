```
Websocket api is an advanced technology that makes it possible to open a two way interactive communication session between user's browser and web server . We can get event driven responses

Websockets are inbuilt in browser
```

# Socket.IO

```
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
```

# Why not native WebSocket?

```
 The following response is taken directly from socket.io introduction
```

- HTTP long-polling fallback
  The connection will fall back to HTTP long-polling in case the WebSocket connection cannot be established.

  This feature was the #1 reason people used Socket.IO when the project was created more than ten years ago (!), as the browser support for WebSockets was still in its infancy.

  Even if most browsers now support WebSockets (more than 97%), it is still a great feature as we still receive reports from users that cannot establish a WebSocket connection because they are behind some misconfigured proxy.

- Automatic reconnection
  Under some particular conditions, the WebSocket connection between the server and the client can be interrupted with both sides being unaware of the broken state of the link.

  That's why Socket.IO includes a heartbeat mechanism, which periodically checks the status of the connection.

  And when the client eventually gets disconnected, it automatically reconnects with an exponential back-off delay, in order not to overwhelm the server.

# Is Socket.IO still needed today?

That's a fair question, since WebSockets are supported almost everywhere now.

That being said, we believe that, if you use plain WebSockets for your application, you will eventually need to implement most of the features that are already included (and battle-tested) in Socket.IO, like reconnection, acknowledgements or broadcasting.

## Simpler terms

Socket.IO provides a more comprehensive solution for real-time communication, handling cross-browser compatibility, error handling, and real-time features seamlessly. Its built-in support for automatic reconnection, event-based communication, and room management simplifies the development process and accelerates the deployment of real-time applications.

Moreover, Socket.IO boasts a thriving community and extensive documentation, offering a wealth of resources for developers. This ecosystem support is invaluable in troubleshooting, learning, and extending the capabilities of Socket.IO for various use cases.

# Explain like Im a 5 year old

imagine you want to build a real-time chat application where people can send messages to each other instantly, like in WhatsApp or Facebook Messenger.

Now, using native WebSockets is like building a house from scratch. You have to figure out how to lay every brick and connect every wire. It can be a lot of work, and if you're not careful, things might not work perfectly in every type of web browser.

On the other hand, Socket.IO is like using a ready-made kit to build your house. It comes with all the parts you need, and it's designed to work smoothly in all kinds of browsers. Plus, it has some extra features, like making sure you don't lose your connection if your internet goes down temporarily.

So, by choosing Socket.IO, I'm opting for a simpler and more reliable way to build my real-time chat application, without having to worry too much about the technical details.
