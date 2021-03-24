import React, { useContext } from 'react';
import { Header, Container } from 'semantic-ui-react';
import './ChatRoomMenu.css';

// TEST -- pull from database
import { UserIdContext } from 'contexts/UserIdContext';

function ChatRoomMenu() {
  const { profilePatient } = useContext(UserIdContext);

  return (
    <>
      <Container id="menu-container" text>
        <Header as="h3">Patient Information</Header>
        <p>
          First Name:
          {` ${profilePatient.firstName}`}
        </p>
        <p>
          Last Name:
          {` ${profilePatient.lastName}`}
        </p>
        <p>
          Email:
          {` ${profilePatient.email}`}
        </p>
      </Container>
    </>
  );
}

export default ChatRoomMenu;
