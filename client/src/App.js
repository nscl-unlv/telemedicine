import React from 'react';
import './App.css';
import ChatRoom from './views/ChatRoom'
import { Container, Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header as='h1'>Telemedicine Application</Header>

        <ChatRoom />
      </Container>
    </div>
  );
}

export default App;
