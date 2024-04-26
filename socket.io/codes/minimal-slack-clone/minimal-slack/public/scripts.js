const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("connected");
  console.log(socket.id);
});

socket.on("messageFromServer", (dataFromServer) => {
  console.log(dataFromServer);
  socket.emit("messageToServer", { data: "Data from the client!" });
});

//listens for server event , to get namespaces
socket.on("nsList", (data) => {
  const lastNs = localStorage.getItem("lastNs");
  console.log(data);
  const nameSpacesDiv = document.querySelector(".namespaces");
  nameSpacesDiv.innerHTML = "";
  data.forEach((ns) => {
    nameSpacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint}><img src=${ns.img} /></div>`;
  });

  Array.from(document.getElementsByClassName("namespace")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const nsEndpoint = elem.getAttribute("ns");
      console.log(`${nsEndpoint} clicked`);
    });
  });
  const nsSocket = io("http://localhost:9000/wiki");
  nsSocket.on("nsRoomLoad", (nsRooms) => {
    let roomList = document.querySelector(".room-list");
    roomList.innerHTML = "";
    nsRooms.forEach((room) => {
      let glyph;
      if (room.privateRoom) glyph = "lock";
      else glyph = "globe";
      roomList.innerHTML += `<li class="room"><span class="glyphicon glyphicon-${glyph}">${room.title}</span></li>`;
    });
    //add click listener to each room
    Array.from(document.getElementsByClassName("room")).forEach((elem) => {
      elem.addEventListener("click", (e) => {
        console.log("Someone clicked on ", e.target.innerText);
      });
    });
  });
});
