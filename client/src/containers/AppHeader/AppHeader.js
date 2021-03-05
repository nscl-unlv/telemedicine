import React, { useContext } from 'react';
import { 
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';
import { NavMenuContext } from 'contexts/NavMenuContext';


function AppHeader() {
  const { setNavMenuVisible } = useContext(NavMenuContext);

  return (
    <>
      <Grid.Row style={{height: '5%'}}>
        <Grid.Column width={2}>
          <Icon
            name='bars'
            size='large'
            onClick={() => setNavMenuVisible(true)}
          />
        </Grid.Column>

        <Grid.Column width={14} textAlign='center'>
          <Header as='h2'>Telemedicine Application</Header>
        </Grid.Column>

      </Grid.Row>
    </>
  );
}

export default AppHeader;
