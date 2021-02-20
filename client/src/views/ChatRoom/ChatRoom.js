import React, { useContext } from 'react';
import Caller from 'components/Caller';
import ChatRoomMenu from 'components/ChatRoomMenu';
import { 
  Button,
  Checkbox,
  Grid, 
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import Receiver from 'components/Receiver';
import { StreamContext } from 'contexts/StreamContext';
import './ChatRoom.css';

function ChatRoom() {
  const [visible, setVisible] = React.useState(false);
  const { streamOff } = useContext(StreamContext);

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

              <div id="video-container">
                <Image src='https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg?output-quality=80&output-format=webp' />
                {/* <Receiver /> */}

                <div id="caller-position">
                  <Caller />
                </div>
                <Button 
                  id='end-call'
                  color='red'
                  onClick={() => streamOff()}
                >
                  <Icon name='stop' />
                  End Call
                </Button>
              </div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default ChatRoom;
