import React, { useState } from 'react';
import ChatRoom from 'views/ChatRoom';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import CallRoom from 'views/CallRoom';
import HomeDoctor from 'views/HomeDoctor';
import HomePatient from 'views/HomePatient';
import NavMenu from 'components/NavMenu';

import SocketContextProvider from 'contexts/SocketContext';
import StreamContextProvider from 'contexts/StreamContext';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { 
  Grid,
  Segment,
  Sidebar
} from 'semantic-ui-react';

function AppBody() {
  return (
    <>
      <Grid.Row style={{height: '95%'}}>
        <Grid.Column width={16}>

          <Router>
            <Sidebar.Pushable>
              <NavMenu />

              <Sidebar.Pusher>
                <Segment basic>
                  <Switch>

                      <SocketContextProvider>
                        <StreamContextProvider>

                          <Route path='/home'>
                            <HomeDoctor />
                          </Route>

                          <Route path='/checkin'>
                            <CheckIn />
                          </Route>

                          <Route path='/callroom'>
                            <CallRoom />
                          </Route>

                          <Route path='/waitingroom'>
                            <WaitingRoom />
                          </Route>

                          <Route path='/chatroom'>
                              <ChatRoom />
                          </Route>

                        </StreamContextProvider>
                      </SocketContextProvider>

                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Router>

        </Grid.Column>
      </Grid.Row>
    </>
  );
}

export default AppBody;
