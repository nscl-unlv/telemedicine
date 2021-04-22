// ChatRoomMenu.js

import React, { useContext } from 'react';
import { Header, Container } from 'semantic-ui-react';

// Styling
import './ChatRoomMenu.css';

// TEST -- will pull from database
import { UserIdContext } from 'contexts/UserIdContext';

/**
 * ChatRoomMenu is a side slide-out menu
 * to show patient profile during a video session.
 *
 * @component
 * @example
 * <ChatRoomMenu />
 *
 */
function ChatRoomMenu() {
  // TEST -- will pull from database
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
