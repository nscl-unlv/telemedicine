import React, { useContext } from 'react';
import Caller from 'components/Caller';
import ChatRoomMenu from 'components/ChatRoomMenu';
import {
  Button, Icon, Image, Menu, Sidebar,
} from 'semantic-ui-react';
import Receiver from 'components/Receiver';
import { SocketContext } from 'contexts/SocketContext';
import { StreamContext } from 'contexts/StreamContext';
import './ChatRoom.css';

function ChatRoom() {
  const [visible, setVisible] = React.useState(false);
  const { streamOff } = useContext(StreamContext);
  const { disconnectSocket } = useContext(SocketContext);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="wide"
      >
        <ChatRoomMenu />
      </Sidebar>

      <Sidebar.Pusher>
        <div id="video-container">
          {/* <Image src='https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg?output-quality=80&output-format=webp' /> */}
          <Receiver />

          <div id="caller-position">
            <Caller />
          </div>
        </div>

        <div id="chat-btns">
          <Button
            id="end-call"
            color="red"
            onClick={() => {
              streamOff();
              disconnectSocket();
            }}
          >
            <Icon name="stop" />
            End Call
          </Button>
          <Icon
            id="info-icon"
            name="info circle"
            size="big"
            onClick={() => setVisible(true)}
          />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

export default ChatRoom;
