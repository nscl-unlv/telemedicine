import React, { useState } from 'react';
import ChatRoom from 'views/ChatRoom';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import CallRoom from 'views/CallRoom';
import HomeDoctor from 'views/HomeDoctor';
import HomePatient from 'views/HomePatient';
import NavMenu from 'components/NavMenu';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { 
  Button,
  Grid,
  Segment,
  Sidebar
} from 'semantic-ui-react';

function AppBody() {
  // TEST
  const [isDoctor, setIsDoctor] = useState(true);

  function ShowHome() {
    if (isDoctor) {
      return <HomeDoctor />;
    } else {
      return <HomePatient />;
    }
  }

  return (
    <>
      <Grid.Row style={{height: '95%'}}>
        <Grid.Column width={16}>
          <Button 
            basic 
            color='red'
            onClick={() => setIsDoctor(true)}
          >
            Doctor
          </Button>
          <Button 
            basic 
            color='blue'
            onClick={() => setIsDoctor(false)}
          >
            Patient
          </Button>

          <Router>
            <Sidebar.Pushable>
              <NavMenu />

              <Sidebar.Pusher>
                <Segment basic>
                  <Switch>
                    <Route path='/home'>
                      <ShowHome />
                    </Route>

                    <Route path='/checkin'>
                      <CheckIn />
                    </Route>

                    <Route path='/waitingroom'>
                      <WaitingRoom />
                    </Route>

                    <Route path='/callroom'>
                      <CallRoom />
                    </Route>

                    <Route path='/chatroom'>
                      <ChatRoom />
                    </Route>
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
