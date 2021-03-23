import React, { useState } from 'react';
import './App.css';
import AppHeader from 'containers/AppHeader';
import AppBody from 'containers/AppBody';
import NavMenuContextProvider from 'contexts/NavMenuContext';
import {
  Checkbox, Container, Grid, Header,
} from 'semantic-ui-react';

// TEST
import UserIdContextProvider from 'contexts/UserIdContext';

function App() {
  // TEST: control doctor/patient ui
  const [isDoctor, setIsDoctor] = useState(false);

  function toggleDoctor() {
    if (isDoctor) {
      setIsDoctor(false);
    } else {
      setIsDoctor(true);
    }
  }

  return (
    <div className="App">
      <Container>
        <Grid style={{ height: '100vh' }}>
          <UserIdContextProvider>
            <NavMenuContextProvider>
              <Grid.Row>
                <Grid.Column width={2}>
                  <AppHeader />
                </Grid.Column>

                <Grid.Column width={10}>
                  <Header as="h2" textAlign="center">
                    Telemedicine
                  </Header>
                </Grid.Column>

                <Grid.Column width={4}>
                  <Checkbox
                    label="Patient/Doctor"
                    toggle
                    onChange={toggleDoctor}
                  />
                </Grid.Column>
              </Grid.Row>

              <AppBody isDoctor={isDoctor} />
            </NavMenuContextProvider>
          </UserIdContextProvider>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
