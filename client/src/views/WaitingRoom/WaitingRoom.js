import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SocketContext } from 'contexts/SocketContext';

// TEST
import { UserIdContext } from 'contexts/UserIdContext';


function WaitingRoom() {
  const { 
    disconnectSocket,
    getSocketId,
    mySocketId
  } = useContext(SocketContext);
  const { userId } = useContext(UserIdContext);

  useEffect(() => {

    getSocketId();

    // Send id to waiting room
    fetch(`/waitingroom/patient/${userId}`, {
      method: 'post'
    }).then(res => {
      console.log(`add id to waiting room, status ${res.status}`);
    });

    // Dequeue id from waiting room
    const dequeueWaitingRoom = () => {
      fetch(`/waitingroom/patient/${userId}`, {
        method: 'delete'
      }).then(res => {
        console.log(`dequed id from waiting room, status ${res.status}`);
      });
    };

    // Dequeue id if tab closes
    window.addEventListener('beforeunload', dequeueWaitingRoom);

    // Cleanup 
    return () => {
      console.log('cleanup waiting room');
      window.removeEventListener('beforeunload', dequeueWaitingRoom);
      dequeueWaitingRoom();
      disconnectSocket();
    };
  }, []);

  return (
    <>
      <h1>Waiting Room</h1>
      <h2>socket id: {mySocketId}</h2>
    </>
  );
}

export default WaitingRoom;
