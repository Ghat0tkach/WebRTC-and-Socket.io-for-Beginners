# Resources to Follow

# Important Points from Documentation Site

```
Socket.IO is NOT a WebSocket implementation.

``` 

``Although Socket.IO indeed uses WebSocket for transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.
``

```
Socket.IO is not meant to be used in a background service for mobile applications.

```
``
The Socket.IO library keeps an open TCP connection to the server, which may result in a high battery drain for your users. Please use a dedicated messaging platform like FCM for this use case.
``

- [Official Documentation](https://socket.io/docs/v4/)
