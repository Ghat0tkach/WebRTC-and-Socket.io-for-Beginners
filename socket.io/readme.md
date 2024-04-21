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

Installation tips :



# Simple Socket.IO projects


## Requirements

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation

1. Clone this repository:

```
git clone https://github.com/ghat0tkache/WebRTC-and-Socket.io-for-Beginners.git
```

2. Navigate to the project directory:

```
cd socket.io
```

3. Install dependencies:

```
npm install
```

## Usage

1. Start the server:

```
node codes/{desired project}/index.js
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

