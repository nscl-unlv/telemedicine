import React, { useState } from 'react';
import './App.css';
import AppHeader from 'containers/AppHeader';
import AppBody from 'containers/AppBody';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import {
  Button,
  Container,
  Grid,
} from 'semantic-ui-react';

// TEST
import UserIdContextProvider from 'contexts/UserIdContext';

function App() {
  // TEST: control doctor/patient ui
  const [, setIsDoctor] = useState(false);

  return (
    <div className="App">
      <Container>
        <Grid style={{ height: '100vh' }}>
          <UserIdContextProvider>
            <NavMenuContextProvider>
              <AppHeader />

              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button
                    basic
                    color="red"
                    onClick={() => setIsDoctor(true)}
                  >
                    Doctor
                  </Button>
                  <Button
                    basic
                    color="blue"
                    onClick={() => setIsDoctor(false)}
                  >
                    Patient
                  </Button>
                </Grid.Column>
              </Grid.Row>

              <AppBody />
            </NavMenuContextProvider>
          </UserIdContextProvider>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
