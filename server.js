/*
 * server.js
 * Entry file for the Websocket Server (WSS).
*/

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


// Store peers connected to WSS
const peers = new Map(); 

//------------------ Websocket Routes -------------------------//

// returns all the peers connected to the WSS
app.get('/socket', (_, res) => {
  const peersJson = utils.strMapToObj(peers);
  res.json(peersJson);
});

//--------------- Websocket Listeners -------------------------//

// Fire when a peer connects
io.on('connection', socket => {
  const socketId = socket.id
  const userId = socket.request._query['userId'];
  savePeer(peers, socketId, userId)

  // Emit the socket id back to the connecting peer
  socket.emit('yourID', socketId);

  // Broadcast json array of all peers connected WSS
  io.sockets.emit('allPeers', utils.strMapToObj(peers));

  // Fire when a peer disconnects
  socket.on('disconnect', () => {
    deletePeer(peers, socketId);
  })

  // Fire when a peer calls another peer
  socket.on("callUser", (data) => {
    console.log(`calling ${data.userToCall}`);
    io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
  })

  // Fire when receiver accepts a websocket connection from the caller
  socket.on('acceptCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  })
});

//------------------ Helper Functions -------------------------//

function savePeer(currentPeers, socketId, userId) {
  const peerExist = currentPeers.get(socketId);
  if (!peerExist) {
    currentPeers.set(socketId, userId);
    console.log(`Socket Id: ${socketId} - User Id: ${userId} connected`);
  }
}

function deletePeer(currentPeers, socketId) {
  currentPeers.delete(socketId);
  console.log(`${socketId} disconnected`)

  // Broadcast the remaining peers
  io.sockets.emit('peerDisconnected', utils.strMapToObj(currentPeers));
}

//--------------- Serve Application -------------------------//

server.listen(port, () => {
    console.log(`application server listening on ${port}`)
});
