import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { NavMenuContext } from 'contexts/NavMenuContext';

function AppHeader() {
  const { setNavMenuVisible } = useContext(NavMenuContext);

  return (
    <Icon
      aria-label="menu"
      name="bars"
      size="large"
      onClick={() => setNavMenuVisible(true)}
    />
  );
}

export default AppHeader;
