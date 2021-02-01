import React from 'react';
import Caller from 'components/Caller';
import ChatRoomMenu from 'components/ChatRoomMenu';
import { 
  Checkbox,
  Grid, 
  Header,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CallerPosition = styled.div`
  position: absolute;
  width: 25%;
  top: 0;
  right: 0;
`;

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

              <VideoContainer>
                <Caller />

                <CallerPosition>
                  <Caller />
                </CallerPosition>
              </VideoContainer>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default ChatRoom;
