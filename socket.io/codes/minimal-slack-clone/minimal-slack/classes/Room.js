class Room {
  constructor(roomId, title, namespaceId, privateRoom = false) {
    this.roomId = roomId;
    this.title = title;
    this.namespace = namespaceId;
    this.privateRoom = privateRoom;
    this.history = [];
  }
  addMessage(message) {
    this.history.push(message);
  }
  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
