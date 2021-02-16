import React, { 
  createContext, 
  useState 
} from 'react';

export const NavMenuContext = createContext();

const NavMenuContextProvider = props => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);


  return (
    <NavMenuContext.Provider 
      value={{ navMenuVisible, setNavMenuVisible }}
    >
      {props.children}
    </NavMenuContext.Provider>
  );
};

export default NavMenuContextProvider;
