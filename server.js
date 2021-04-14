const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const ROOM_ID = "room-1";
const rooms = new Map();
rooms.set(
  ROOM_ID,
  new Map([
    ['users', new Map()]
  ])
);

app.get('/rooms', (req, res) => {
  res.json({ users: [...rooms.get(ROOM_ID).get('users').values()] });
});

io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', ({ userName }) => {
    socket.join(ROOM_ID);
    rooms.get(ROOM_ID).get('users').set(socket.id, userName);
    const users = [...rooms.get(ROOM_ID).get('users').values()];
    socket.to(ROOM_ID).emit('ROOM:SET_USERS', users);
  });
});

server.listen(4002, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен на localhost:4002');
});
