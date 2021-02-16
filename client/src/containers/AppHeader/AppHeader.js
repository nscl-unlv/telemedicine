import React from 'react';
import { 
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react';

function AppHeader(props) {
  return (
    <>
      <Grid.Row style={{height: '5%'}}>
        <Grid.Column width={2}>
          <Icon
            name='bars'
            size='large'
            onClick={() => props.setNavMenuVisible(true)}
          />
        </Grid.Column>

        <Grid.Column width={14}>
          <Header as='h2'>Telemedicine Application</Header>
        </Grid.Column>
      </Grid.Row>
    </>
  );
}

export default AppHeader;
