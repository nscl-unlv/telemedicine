import React, { 
  createContext, 
  useContext,
  useRef, 
  useState 
} from 'react';
import io from "socket.io-client";

// TEST
import { UserIdContext } from 'contexts/UserIdContext';

export const SocketContext = createContext();

function SocketContextProvider(props) {
  const [mySocketId, setMySocketId] = useState('');
  const socketRef = useRef();

  // TEST
  const { userId } = useContext(UserIdContext);

  function getSocketId() {
    socketRef.current = io('/', { query: `userId=${userId}` });

    socketRef.current.on("yourID", (id) => {
      setMySocketId(id);
    })
  }

  function disconnectSocket() {
    console.log('disconnnect socket');
    socketRef.current.disconnect();
    socketRef.current = null;
  }

  return (
    <SocketContext.Provider value={{ 
      disconnectSocket,
      getSocketId,
      mySocketId,
      socketRef
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
