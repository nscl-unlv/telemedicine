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
  const [allPeers, setAllPeers] = useState([]);
  const [socketAlive, setSocketAlive] = useState(false);

  const socketRef = useRef();

  // TEST
  const { userId } = useContext(UserIdContext);

  function initSocket() {
    if (!socketAlive) {
      console.log('connecting to socket server...');
      socketRef.current = io('/', { query: `userId=${userId}` });
      setSocketAlive(true);

      socketRef.current.on("yourID", id => {
        setMySocketId(id);
      })

      socketRef.current.on('allPeers', peers => {
        setAllPeers(peers);
      })

      socketRef.current.on('peerDisconnected', peers => {
        console.log('peerDisconnected');
        setAllPeers(peers);
      })
    } else {
      console.log('socket init failed. already connected');
    }
  }

  function disconnectSocket() {
    if (socketAlive) {
      console.log('disconnnect socket');
      socketRef.current.disconnect();
      socketRef.current = null;
      setSocketAlive(false);
    } else {
      console.log('disconnect attempt. socket already disconnected.');
    }
  }

  return (
    <SocketContext.Provider value={{ 
      allPeers,
      disconnectSocket,
      initSocket,
      mySocketId,
      socketAlive,
      socketRef
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
