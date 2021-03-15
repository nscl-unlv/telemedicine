import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

function ChatRoomMenu() {
  return (
    <>
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </>
  );
}

export default ChatRoomMenu;
