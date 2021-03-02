import React, { 
  createContext, 
  useContext,
  useEffect, 
  useRef, 
  useState 
} from 'react';
import { SocketContext } from 'contexts/SocketContext';
import Peer from "simple-peer";

export const StreamContext = createContext();

const StreamContextProvider = props => {
  const [mediaStream, setMediaStream] = useState(null);
  // const [callAccepted, setCallAccepted] = useState(false);
  const { mySocketId } = useContext(SocketContext);

  const otherStreamRef = useRef();
  const streamRef = useRef();
  const socket = useRef();

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ 
          video: {
            facingMode:'user'
          }, 
          audio: false 
        }).then(stream => {
          setMediaStream(stream);
          if (streamRef.current) {
            streamRef.current.srcObject = stream;
          }
        });
    } 
  }, []);

  function streamOff() {
    if (streamRef.current) {
      console.log('turning off streaming...');
      // turn off reference stream
      streamRef.current.srcObject.getTracks().forEach(track => {
        track.stop();
        track.enabled = false;
      });
      streamRef.current = null;

      // turn off actual stream
      mediaStream.getTracks().forEach(track => {
        track.stop();
        track.enabled = false;
      });
      setMediaStream(null);
    }
  }

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: streamRef.current.srcObject
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { 
        userToCall: id, 
        signalData: data, 
        from: mySocketId })
    })

    peer.on("stream", stream => {
      if (otherStreamRef.current) {
        otherStreamRef.current.srcObject = stream;
      }
    });

    //socket.current.on("callAccepted", signal => {
    //  setCallAccepted(true);
    //  peer.signal(signal);
    //})

  }

  return (
    <StreamContext.Provider value={{ 
      mediaStream, 
      streamRef, 
      streamOff,
    }}>
      {props.children}
    </StreamContext.Provider>
  );
};

export default StreamContextProvider;
