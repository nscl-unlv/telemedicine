import React, { useState } from 'react';
import './App.css';
import ChatRoom from 'views/ChatRoom';
import CheckIn from 'views/CheckIn';
import WaitingRoom from 'views/WaitingRoom';
import CallRoom from 'views/CallRoom';
import AppHeader from 'components/AppHeader';
import { 
  Container, 
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  return (
    <div className="App">
      <Container>
        <Grid style={{height: '100vh'}}>
          <AppHeader setNavMenuVisible={setNavMenuVisible} />

          <Grid.Row style={{height: '95%'}}>
          <Grid.Column width={16}>
                  <Router>
            <Sidebar.Pushable>
              <Sidebar 
                as={Menu}
                animation='overlay'
                direction='top'
                icon='labeled'
                onHide={() => setNavMenuVisible(false)}
                vertical
                visible={navMenuVisible}
                width='thin'
              >
                <Menu.Item>
                  <Link to='/mainmenu' onClick={() => setNavMenuVisible(false)}>
                    <Icon name='home' size='big' /><br />
                    Main Menu
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/checkin' onClick={() => setNavMenuVisible(false)}>
                    <Icon name='check' size='big'/><br />
                    Check-In
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/waitingroom' onClick={() => setNavMenuVisible(false)}>
                    <Icon name='wait' size='big' /><br />
                    Waiting Room
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/callroom' onClick={() => setNavMenuVisible(false)}>
                    <Icon name='call' size='big' /><br />
                    Call Room
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/chatroom' onClick={() => setNavMenuVisible(false)}>
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
        </Grid>
      </Container>
    </div>
  );
}

export default App;
