import React, { 
  useContext,
  useEffect, 
  useState } 
from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import boyAvator from './images/boy-avatar.png';
import { SocketContext } from 'contexts/SocketContext';

const patients = [
  { name: 'pikachu' },
  { name: 'charmander' }];

function CallRoom() {
  const [patientIds, setPatientIds] = useState([]);
  const [numPatients, setNumPatients] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const { 
    disconnectSocket,
    getSocketId,
    mySocketId,
    socketRef
  } = useContext(SocketContext);

  useEffect(() => {
    getSocketId()
      .then(() => {
        fetch('/socket')
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
        .catch(err => {
          console.log(err);
        }) 

        // Fetch patients in waiting room
        //fetch('/waitingroom')
        //  .then(res => res.json())
        //  .then(data => {
        //    setPatientIds(data.patients)
        //    setNumPatients(data.count)
        //  });
      });

    // Cleanup 
    return () => {
      console.log('clean up call room');
      disconnectSocket();
    };
  }, []);

  function callPeer(otherSocketId) {
    //const peer = new Peer({
    //  initiator: true,
    //  trickle: false,
    //  stream: streamRef.current.srcObject
    //});

    //peer.on("signal", data => {
    //  socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    //})

    //peer.on("stream", stream => {
    //  if (partnerVideo.current) {
    //    partnerVideo.current.srcObject = stream;
    //  }
    //});

   socketRef.current.emit("callUser", { userToCall: otherSocketId, 
                                        from: mySocketId });

   socketRef.current.on("callAccepted", signal => {
      setCallAccepted(true);
      //peer.signal(signal);
    });
  }

  // TODO: useEffect to fetch patients from database 

  return (
    <>
      <h1>Call Room</h1>
      <h2>Socket Id: {mySocketId}</h2>

      <Card.Group stackable>
        {patients.map(patient => (
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={ boyAvator }
              />
              <Card.Header>{patient.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>Call</Button>
                <Button basic color='blue'>Profile</Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
}

export default CallRoom;
