import React from 'react';
import Caller from 'components/Caller';
import ChatRoomMenu from 'components/ChatRoomMenu';
import { 
  Checkbox,
  Grid, 
  Image,
  Header,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';

function ChatRoom() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(_, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
          >
            <ChatRoomMenu />
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Chat Room View</Header>
              {/* <Caller /> */}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default ChatRoom;
