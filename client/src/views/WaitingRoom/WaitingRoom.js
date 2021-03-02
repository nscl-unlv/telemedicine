import React, { useContext, useEffect } from 'react';
import { SocketContext } from 'contexts/SocketContext';
import { Button, Card } from 'semantic-ui-react';

// TEST
import { UserIdContext } from 'contexts/UserIdContext';


function WaitingRoom() {
  const { 
    disconnectSocket,
    initSocket,
    mySocketId,
    receivingCall
  } = useContext(SocketContext);
  const { userId } = useContext(UserIdContext);

  useEffect(() => {

    initSocket();

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

  function ShowCaller() {
    if (receivingCall) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Receiving a Call</Card.Header>
            <Card.Description>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Accept
              </Button>
              <Button basic color='red'>
                Ignore
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    }
  }

  return (
    <>
      <h1>Waiting Room</h1>
      <h2>socket id: {mySocketId}</h2>
      {ShowCaller()}
    </>
  );
}

export default WaitingRoom;
