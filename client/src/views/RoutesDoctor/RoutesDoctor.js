import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomeDoctor from 'views/HomeDoctor';
import CallRoom from 'views/CallRoom';
import ChatRoom from 'views/ChatRoom';

function RoutesDoctor() {
  return (
    <>
      <Route path="/home">
        <HomeDoctor />
      </Route>

      <Route path="/callroom">
        <CallRoom />
      </Route>

      <Route path="/chatroom">
        <ChatRoom />
      </Route>
    </>
  );
}

export default RoutesDoctor;
