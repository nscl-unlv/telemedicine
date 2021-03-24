import React from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import checkmark from './images/checkmark.png';
import './CheckIn.css';

function CheckIn() {
  return (
    <>
      <Container text textAlign="center">
        <Image id="checkmark-img" src={checkmark} size="small" fluid centered />
        <h3>
          Please click the button to check in. You will be re-routed to the
          waiting room.
        </h3>
        <Link to="/waitingroom">
          <Button primary>Check In</Button>
        </Link>
      </Container>
    </>
  );
}

export default CheckIn;
