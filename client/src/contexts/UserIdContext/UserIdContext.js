import React, { 
  createContext, 
  useEffect,
  useState 
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserIdContext = createContext();

function SocketContextProvider(props) {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const id = uuidv4();
    setUserId(id);
  }, [])


  return (
    <UserIdContext.Provider value={{ userId }}>
      {props.children}
    </UserIdContext.Provider>
  );
};

export default SocketContextProvider;
