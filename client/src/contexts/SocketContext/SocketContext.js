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
  const socketRef = useRef();

  // TEST
  const { userId } = useContext(UserIdContext);

  function initSocket() {
    socketRef.current = io('/', { query: `userId=${userId}` });

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
  }

  function disconnectSocket() {
    console.log('disconnnect socket');
    socketRef.current.disconnect();
    socketRef.current = null;
  }

  return (
    <SocketContext.Provider value={{ 
      allPeers,
      disconnectSocket,
      initSocket,
      mySocketId,
      socketRef
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
