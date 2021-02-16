import React, { useEffect, useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import boyAvator from './images/boy-avatar.png';

const patients = [
  { name: 'pikachu' },
  { name: 'charmander' }];


function CallRoom() {
  const [patientIds, setPatientIds] = useState([])
  const [numPatients, setNumPatients] = useState()

  useEffect(() => {

    // Fetch patients in waiting room
    fetch('/waitingroom')
      .then(res => res.json())
      .then(data => {
        setPatientIds(data.patients)
        setNumPatients(data.count)
      });
      
  }, []);

  // TODO: useEffect to fetch patients from database 

  return (
    <>
      <h1>Call Room</h1>
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
