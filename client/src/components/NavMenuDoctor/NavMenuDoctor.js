import React, { useContext } from 'react';
import {
  Icon,
  Menu,
  Sidebar,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { NavMenuContext } from 'contexts/NavMenuContext';

function NavMenuDoctor() {
  const {
    navMenuVisible,
    setNavMenuVisible,
  } = useContext(NavMenuContext);

  return (
    <>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        icon="labeled"
        onHide={() => setNavMenuVisible(false)}
        vertical
        visible={navMenuVisible}
        width="thin"
      >

        <Menu.Item>
          <Link
            to="/home"
            onClick={() => setNavMenuVisible(false)}
          >
            <Icon name="home" size="big" />
            <br />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="/callroom"
            onClick={() => setNavMenuVisible(false)}
          >
            <Icon name="call" size="big" />
            <br />
            Call Room
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link
            to="/chatroom"
            onClick={() => setNavMenuVisible(false)}
          >
            <Icon name="video" size="big" />
            <br />
            Chat Room
          </Link>
        </Menu.Item>
      </Sidebar>
    </>
  );
}

export default NavMenuDoctor;
