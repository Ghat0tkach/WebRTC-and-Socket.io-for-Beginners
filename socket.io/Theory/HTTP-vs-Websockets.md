# HTTP vs Websockets

| Feature                  | HTTP                                        | WebSockets                                           |
| ------------------------ | ------------------------------------------- | ---------------------------------------------------- |
| Communication Model      | Request-Response                            | Full-Duplex                                          |
| Connection Establishment | Stateless - New connection for each request | Persistent - Single connection for multiple messages |
| Data Transfer            | Unidirectional (Client initiates requests)  | Bidirectional                                        |
| Usage                    | Fetching resources, form submission         | Real-time applications                               |
| Overhead                 | Higher due to headers and metadata          | Lower once connection established                    |

The WebSocket protocol (often abbreviated as `ws://` or `wss://` for secure WebSocket connections) is a communication protocol that provides full-duplex communication channels over a single, long-lived connection between a client and a server. Here's an overview of the WebSocket protocol:

1. **Bidirectional Communication**: Unlike HTTP, which follows a request-response model, WebSocket allows for bidirectional communication. Both the client and server can send messages to each other asynchronously.

2. **Persistent Connection**: Once established, a WebSocket connection remains open until either the client or server decides to close it. This allows for efficient real-time communication without the overhead of establishing new connections for each message.

3. **WebSocket Handshake**: The WebSocket protocol starts with an HTTP-based handshake between the client and server. This handshake is initiated by the client, which sends an HTTP request to the server indicating its intention to upgrade the connection to a WebSocket connection. If the server agrees, it responds with an HTTP 101 status code, indicating the successful upgrade to the WebSocket protocol.

4. **Message Framing**: WebSocket messages are framed, meaning that each message sent over the WebSocket connection is prefixed with a header that specifies the length of the message. This framing mechanism allows the receiver to properly parse and handle individual messages.

5. **Binary and Text Data**: WebSocket supports both binary and text data. Text messages are typically encoded using UTF-8, while binary messages can contain any binary data.

6. **WebSocket Secure (wss://)**: For secure communication over HTTPS, WebSocket connections can be established using the WebSocket Secure (wss://) protocol. This encrypts the data exchanged between the client and server, providing confidentiality and integrity.

| Criteria                                 | HTTP Handshake                                      | WebSocket Protocol                                       |
| ---------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| Compatibility                            | Compatible with older browsers and environments     | Requires modern browser support                          |
| Request-Response Model                   | Suitable for typical request-response applications  | Ideal for real-time bidirectional communication          |
| Real-Time Communication                  | Not optimized for real-time communication           | Optimized for real-time bidirectional communication      |
| Efficiency                               | Higher latency and overhead due to request-response | Lower latency and overhead with persistent connections   |
| Scalability                              | May have limitations in handling concurrent users   | Scalable for handling a large number of concurrent users |
| Integration with Existing Infrastructure | Integrates easily with existing HTTP-based services | Requires additional effort for WebSocket support         |
