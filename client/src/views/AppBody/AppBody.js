import React from 'react';
import ChatRoom from 'views/ChatRoom';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import CallRoom from 'views/CallRoom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { 
  Grid,
  Icon,
  Menu,
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
            <Sidebar 
              as={Menu}
              animation='overlay'
              direction='top'
              icon='labeled'
              onHide={() => props.setNavMenuVisible(false)}
              vertical
              visible={props.navMenuVisible}
              width='thin'
            >
              <Menu.Item>
                <Link to='/mainmenu' onClick={() => props.setNavMenuVisible(false)}>
                  <Icon name='home' size='big' /><br />
                  Main Menu
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/checkin' onClick={() => props.setNavMenuVisible(false)}>
                  <Icon name='check' size='big'/><br />
                  Check-In
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/waitingroom' onClick={() => props.setNavMenuVisible(false)}>
                  <Icon name='wait' size='big' /><br />
                  Waiting Room
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/callroom' onClick={() => props.setNavMenuVisible(false)}>
                  <Icon name='call' size='big' /><br />
                  Call Room
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/chatroom' onClick={() => props.setNavMenuVisible(false)}>
                  <Icon name='video' size='big' /><br />
                  Chat Room
                </Link>
              </Menu.Item>
            </Sidebar>

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
