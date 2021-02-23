import React, { 
  createContext, 
  useRef, 
  useState 
} from 'react';
import io from "socket.io-client";

export const SocketContext = createContext();

function SocketContextProvider(props) {
  const [mySocketId, setMySocketId] = useState('');
  const socket = useRef();

  function getSocketId() {
    socket.current = io('/');

    socket.current.on("yourID", (id) => {
      setMySocketId(id);
    })
  }

  function disconnectSocket() {
    console.log('disconnnect socket');
    socket.current.disconnect();
    socket.current = null;
  }

  return (
    <SocketContext.Provider value={{ 
      getSocketId,
      disconnectSocket,
      mySocketId
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
