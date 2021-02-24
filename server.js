const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const waitingRoomRoutes = require('./src/routes/waiting-room')
const io = socket(server);
const port = 8080;

// Routes
app.use('/waitingroom', waitingRoomRoutes);

function strMapToObj(map) {
  let obj = {};
  for (let [k,v] of map) {
    obj[k] = v;
  }
  return obj;
}

const users = new Map(); 

// TEST move to seperate router
app.get('/', (req, res) => {
  console.log('requested all connected socket users');
  const usersJson = strMapToObj(users);
  res.json(usersJson);
});

// socket.io listeners go here
io.on('connection', socket => {
  const socketId = socket.id
  const userId = socket.request._query['userId'];

  if (!users.get(socket.id)) {
    users.set(socketId, userId);
    console.log(`Socket Id: ${socketId} - User Id: ${userId} connected`);
  }

  socket.emit("yourID", socketId);

  io.sockets.emit("allUsers", users);

  socket.on('disconnect', () => {
    console.log(`${socketId} disconnected`)
    users.delete(socketId);
  })

  //socket.on("callUser", (data) => {
  //  io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
  //})

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit('hey', {from: data.from});
  })

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  })
});

// serve application
server.listen(port, () => {
    console.log(`application server listening on ${port}`)
});
