import React, {
  createContext,
  useState,
} from 'react';

export const NavMenuContext = createContext();

const NavMenuContextProvider = ({ children }) => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  return (
    <NavMenuContext.Provider
      value={{ navMenuVisible, setNavMenuVisible }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};

export default NavMenuContextProvider;
