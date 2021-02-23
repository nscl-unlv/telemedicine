import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Socket from 'services/Socket';


function WaitingRoom() {

  useEffect(() => {
    // TODO: get from firebase
    const id = uuidv4();
    console.log(`test id: ${id}`);

    // Send id to waiting room
    fetch(`/waitingroom/patient/${id}`, {
      method: 'post'
    }).then(res => {
      console.log(`add id to waiting room, status ${res.status}`);
    });

    // Dequeue id from waiting room
    const cleanup = () => {
      console.log('cleanup');
      fetch(`/waitingroom/patient/${id}`, {
        method: 'delete'
      }).then(res => {
        console.log(`dequed id from waiting room, status ${res.status}`);
      });
    };

    // Dequeue id if tab closes
    window.addEventListener('beforeunload', cleanup);

    // Cleanup 
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };

  }, []);

  return (
    <>
      <Socket />
      <h1>Waiting Room</h1>
    </>
  );
}

export default WaitingRoom;
