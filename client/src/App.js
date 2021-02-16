import React from 'react';
import './App.css';
import AppHeader from 'containers/AppHeader';
import AppBody from 'containers/AppBody';
import NavMenuContextProvider from 'contexts/NavMenuContext';

import { 
  Container, 
  Grid,
} from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid style={{height: '100vh'}}>
          <NavMenuContextProvider>
            <AppHeader />
            <AppBody />
          </NavMenuContextProvider>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
