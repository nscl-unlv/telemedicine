import React, {
  createContext,
  useEffect,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const UserIdContext = createContext();

function SocketContextProvider({ children }) {
  const [userId, setUserId] = useState('');

  const id = uuidv4();
  // setUserId(id);

  useEffect(() => {
    console.log(`user id: ${id}`);
    setUserId(id);
  }, []);

  return (
    <UserIdContext.Provider value={{ userId }}>
      {children}
    </UserIdContext.Provider>
  );
}

export default SocketContextProvider;
