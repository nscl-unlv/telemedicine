import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import {
  Grid,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

// Context Providers
import SocketContextProvider from 'contexts/SocketContext';
import StreamContextProvider from 'contexts/StreamContext';

// Componenets
import NavMenuDoctor from 'components/NavMenuDoctor';
import NavMenuPatient from 'components/NavMenuPatient';
import RoutesDoctor from 'views/RoutesDoctor';
import RoutesPatient from 'views/RoutesPatient';

function AppBody({ isDoctor }) {
  function navMenu() {
    if (isDoctor) {
      return <NavMenuDoctor />;
    }
    return <NavMenuPatient />;
  }

  function routes() {
    if (isDoctor) {
      return <RoutesDoctor />;
    }
    return <RoutesPatient />;
  }

  return (
    <>
      <Grid.Row style={{ height: '95%' }}>
        <Grid.Column width={16}>

          <Router>
            <Sidebar.Pushable>
              {navMenu()}

              <Sidebar.Pusher>
                <Segment basic>
                  <Switch>

                    <SocketContextProvider>
                      <StreamContextProvider>
                        {routes()}
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
