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
  const [receivingCall, setReceivingCall] = useState(false);

  const [callAccepted, setCallAccepted] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [callerSid, setCallerSid] = useState("");

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

      socketRef.current.on("hey", (data) => {
        setReceivingCall(true);
        setCallerSid(data.from);
        setCallerSignal(data.signal);
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
      setReceivingCall(false);
      setCallAccepted(false);
    } else {
      console.log('disconnect attempt. socket already disconnected.');
    }
  }

  return (
    <SocketContext.Provider value={{ 
      allPeers,
      callAccepted,
      callerSid,
      callerSignal,
      disconnectSocket,
      initSocket,
      mySocketId,
      receivingCall,
      setReceivingCall,
      setCallAccepted,
      socketAlive,
      socketRef
    }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
