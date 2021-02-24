import React, { 
  createContext, 
  useRef, 
  useState 
} from 'react';
import io from "socket.io-client";

export const SocketContext = createContext();

function SocketContextProvider(props) {
  const [userId, setUserId] = useState('');
  const [mySocketId, setMySocketId] = useState('');
  const socketRef = useRef();

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

  function getUserId(userId) {
    console.log(`user id: ${userId}`);
    setUserId(userId);
  }

  return (
    <SocketContext.Provider value={{ 
      disconnectSocket,
      getSocketId,
      getUserId,
      mySocketId,
      socketRef
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
