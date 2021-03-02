const express = require('express');
const http = require('http');
const socket = require('socket.io');
const utils = require('./src/common/utils');

const app = express();
const server = http.createServer(app);
const io = socket(server);
const port = 8080;

// Routes
const waitingRoomRoutes = require('./src/routes/waiting-room')
app.use('/waitingroom', waitingRoomRoutes);


const peers = new Map(); 

// socket routes
app.get('/socket', (_, res) => {
  console.log('requested all connected socket peers');
  const peersJson = utils.strMapToObj(peers);
  res.json(peersJson);
});

// socket listeners
io.on('connection', socket => {
  const socketId = socket.id
  const userId = socket.request._query['userId'];

  if (!peers.get(socket.id)) {
    peers.set(socketId, userId);
    console.log(`Socket Id: ${socketId} - User Id: ${userId} connected`);
  }

  socket.emit('yourID', socketId);

  io.sockets.emit('allPeers', utils.strMapToObj(peers));

  socket.on('disconnect', () => {
    console.log(`${socketId} disconnected`)
    peers.delete(socketId);
    io.sockets.emit('peerDisconnected', utils.strMapToObj(peers));
  })

  socket.on("callUser", (data) => {
    console.log(`calling ${data.userToCall}`);
    io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
  })

  //socket.on('callUser', (data) => {
  //  io.to(data.userToCall).emit('hey', {from: data.from});
  //})

  socket.on('acceptCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  })
});

// serve application
server.listen(port, () => {
    console.log(`application server listening on ${port}`)
});
