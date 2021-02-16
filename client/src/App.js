import React, { useState } from 'react';
import './App.css';
import AppHeader from 'containers/AppHeader';
import AppBody from 'containers/AppBody';
import { 
  Container, 
  Grid,
} from 'semantic-ui-react';


function App() {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  return (
    <div className="App">
      <Container>
        <Grid style={{height: '100vh'}}>
          <AppHeader setNavMenuVisible={setNavMenuVisible} />
          <AppBody 
            navMenuVisible={navMenuVisible}
            setNavMenuVisible={setNavMenuVisible} 
          />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
