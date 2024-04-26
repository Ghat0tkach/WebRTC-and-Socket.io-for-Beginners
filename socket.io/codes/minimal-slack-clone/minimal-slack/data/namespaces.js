const Namespace = require("../classes/Namespace");
const Room = require("../classes/Room");

const wikiNamespace = new Namespace(
  0,
  "Wikipedia",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png",
  "/wiki"
);
const mozNamespace = new Namespace(
  1,
  "Mozilla",
  "https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png",
  "/mozilla"
);
const linuxNamespace = new Namespace(
  2,
  "Linux",
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png",
  "/linux"
);

wikiNamespace.addRoom(new Room(0, "New Articles", 0));
wikiNamespace.addRoom(new Room(1, "Editors", 0));
wikiNamespace.addRoom(new Room(2, "Other", 0));

mozNamespace.addRoom(new Room(0, "Firefox", 1));
mozNamespace.addRoom(new Room(1, "SeaMonkey", 1));
mozNamespace.addRoom(new Room(2, "SpiderMonkey", 1));
mozNamespace.addRoom(new Room(3, "Rust", "mozilla"));

linuxNamespace.addRoom(new Room(0, "Debian", 2));
linuxNamespace.addRoom(new Room(1, "Red Hat", 2));
linuxNamespace.addRoom(new Room(2, "Mac", 2));
linuxNamespace.addRoom(new Room(3, "Kernal Development", 2));

const namespaces = [wikiNamespace, mozNamespace, linuxNamespace];

module.exports = namespaces;
