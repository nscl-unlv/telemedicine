import React from 'react';
import './App.css';
import ChatRoom from 'views/ChatRoom'
import WaitingRoom from 'views/WaitingRoom'
import { Container, Header } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header as='h1'>Telemedicine Application</Header>

        <Router>
          <nav>
            <ul>
              <li><Link to='/mainmenu'>Main Menu</Link></li>
              <li><Link to='/waitingroom'>Waiting Room</Link></li>
              <li><Link to='/chatroom'>Chat Room</Link></li>
            </ul>
          </nav>

      
          <Switch>
            <Route path='/waitingroom'>
              <WaitingRoom />
            </Route>

            <Route path='/chatroom'>
              <ChatRoom />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
