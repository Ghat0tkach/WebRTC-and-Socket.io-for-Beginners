const joinNs = (element, data) => {
  const nsEndpoint = element.getAttribute("ns");
  console.log(`${nsEndpoint} I should go to now`);

  const clickedNs = data.find((row) => row.endpoint === nsEndpoint);
  const rooms = clickedNs.rooms;
  const roomList = document.querySelector(".room-list");
  roomList.innerHTML = "";
  rooms.forEach((room) => {
    roomList.innerHTML += `<li class="room">${room.title}</li>`;
  });

  localStorage.setItem("lastNs", nsEndpoint);
};
