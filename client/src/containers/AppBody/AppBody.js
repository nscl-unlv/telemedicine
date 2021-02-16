import React from 'react';
import ChatRoom from 'views/ChatRoom';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import CallRoom from 'views/CallRoom';
import NavMenu from 'components/NavMenu';

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


function AppBody(props) {
  return (
    <>
      <Grid.Row style={{height: '95%'}}>
        <Grid.Column width={16}>

          <Router>
            <Sidebar.Pushable>
              <NavMenu
                navMenuVisible={props.navMenuVisible}
                setNavMenuVisible={props.setNavMenuVisible}
              />

              <Sidebar.Pusher>
                <Segment basic>
                  <Switch>
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
