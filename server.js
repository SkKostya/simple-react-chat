const ROOM_JOIN = "ROOM:JOIN";
const ROOM_SET_USERS = "ROOM:SET_USERS";
const ROOM_NEW_MESSAGE = "ROOM:NEW_MESSAGE";

const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

const ROOM_ID = "room-1";
const rooms = new Map();
rooms.set(
  ROOM_ID,
  new Map([
    ["users", new Map()],
    ["messages", []]
  ])
);

app.get("/rooms", (req, res) => {
  const obj = {
    users: [...rooms.get(ROOM_ID).get('users').values()],
    messages: [...rooms.get(ROOM_ID).get('messages').values()],
  };
  res.json(obj);
});

io.on("connection", (socket) => {
  socket.on(ROOM_JOIN, ({ userName }) => {
    socket.join(ROOM_ID);
    rooms.get(ROOM_ID).get("users").set(socket.id, userName);
    const users = [...rooms.get(ROOM_ID).get("users").values()];
    socket.broadcast.to(ROOM_ID).emit(ROOM_SET_USERS, users);
  });

  socket.on(ROOM_NEW_MESSAGE, ({ userName, text, date }) => {
    const message = { userName, text, date };
    rooms.get(ROOM_ID).get("messages").push(message);
    socket.broadcast.to(ROOM_ID).emit(ROOM_NEW_MESSAGE, message);
  });

  socket.on("disconnect", () => {
    rooms.forEach((value) => {
      if (value.get("users").delete(socket.id)) {
        const users = [...value.get("users").values()];
        socket.broadcast.to(ROOM_ID).emit(ROOM_SET_USERS, users);
      }
    });
  });
});

server.listen(4002, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Сервер запущен на localhost:4002");
});
