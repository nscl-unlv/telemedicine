import React from 'react';
import { 
  Icon,
  Menu,
  Sidebar
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function NavMenu(props) {
  return (
    <>
      <Sidebar 
        as={Menu}
        animation='overlay'
        direction='top'
        icon='labeled'
        onHide={() => props.setNavMenuVisible(false)}
        vertical
        visible={props.navMenuVisible}
        width='thin'
      >

        <Menu.Item>
          <Link 
            to='/mainmenu' 
            onClick={() => props.setNavMenuVisible(false)}
          >
            <Icon name='home' size='big' /><br />
            Main Menu
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link 
            to='/checkin' 
            onClick={() => props.setNavMenuVisible(false)}
          >
            <Icon name='check' size='big'/><br />
            Check-In
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link 
            to='/waitingroom' 
            onClick={() => props.setNavMenuVisible(false)}
          >
            <Icon name='wait' size='big' /><br />
            Waiting Room
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link 
            to='/callroom' 
            onClick={() => props.setNavMenuVisible(false)}
          >
            <Icon name='call' size='big' /><br />
            Call Room
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link 
            to='/chatroom' 
            onClick={() => props.setNavMenuVisible(false)}
          >
            <Icon name='video' size='big' /><br />
            Chat Room
          </Link>
        </Menu.Item>
      </Sidebar>
    </>
  );
}

export default NavMenu;
