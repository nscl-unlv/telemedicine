import React, { useContext, useEffect } from 'react';
import { SocketContext } from 'contexts/SocketContext';
import {
  Button, Card, Container, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { StreamContext } from 'contexts/StreamContext';
// TEST
import { UserIdContext } from 'contexts/UserIdContext';
import waitingRoomImg from './images/waiting-room.jpeg';

function WaitingRoom() {
  const {
    disconnectSocket,
    initSocket,
    receivingCall,
    setReceivingCall,
  } = useContext(SocketContext);
  const { initStream, acceptCall } = useContext(StreamContext);
  // TEST
  const { userId } = useContext(UserIdContext);

  useEffect(() => {
    initSocket();

    // Send id to waiting room
    fetch(`/waitingroom/patient/${userId}`, {
      method: 'post',
    }).then((res) => {
      console.log(`add id to waiting room, status ${res.status}`);
    });

    // Dequeue id from waiting room
    const dequeueWaitingRoom = () => {
      fetch(`/waitingroom/patient/${userId}`, {
        method: 'delete',
      }).then((res) => {
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

  function CallNotice() {
    if (receivingCall) {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Receiving a Call</Card.Header>
            <Card.Description />
          </Card.Content>
          <Card.Content extra>
            <div className="ui">
              <Link to="/chatroom">
                <Button
                  basic
                  color="green"
                  onClick={() => {
                    setReceivingCall(false);
                    initStream().then(() => {
                      acceptCall();
                    });
                  }}
                >
                  Accept
                </Button>
              </Link>

              <Button basic color="red" onClick={() => setReceivingCall(false)}>
                Ignore
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    }
    return <></>;
  }

  return (
    <>
      <Container text centered>
        <Image src={waitingRoomImg} size="big" fluid />
        <br />
        <h3>
          The doctor will be with you soon, please do not leave this room.
        </h3>
      </Container>
      {CallNotice()}
    </>
  );
}

export default WaitingRoom;
