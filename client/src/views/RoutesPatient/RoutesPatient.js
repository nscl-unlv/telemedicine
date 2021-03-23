import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomePatient from 'views/HomePatient';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import ChatRoom from 'views/ChatRoom';

function RoutesPatient() {
  return (
    <>
      <Route exact path="/">
        <HomePatient />
      </Route>

      <Route path="/checkin">
        <CheckIn />
      </Route>

      <Route path="/waitingroom">
        <WaitingRoom />
      </Route>

      <Route path="/chatroom">
        <ChatRoom />
      </Route>
    </>
  );
}

export default RoutesPatient;
