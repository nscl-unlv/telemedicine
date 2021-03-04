import React, { 
  createContext, 
  useContext,
  useRef, 
  useState 
} from 'react';
import { SocketContext } from 'contexts/SocketContext';
import Peer from "simple-peer";

export const StreamContext = createContext();

const StreamContextProvider = props => {
  const [mediaStream, setMediaStream] = useState(null);
  const { 
    callerSid,
    callerSignal,
    mySocketId,
    socketRef,
    setCallAccepted
  } = useContext(SocketContext);

  const otherStreamRef = useRef();
  const streamRef = useRef();

  function initStream() {
    return new Promise((resolve, reject) => {
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
              console.log('initiating stream...');
              streamRef.current.srcObject = stream;
              resolve('done');
            }
          });
      } else {
        reject(new Error('stream error'));
      } 
    })
  }

  function callPeer(otherSocketId) {
    console.log('calling patient...');

    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: streamRef.current.srcObject
    });

    peer.on("signal", data => {
      socketRef.current.emit("callUser", { 
        userToCall: otherSocketId, 
        signalData: data, 
        from: mySocketId })
    })

    peer.on("stream", stream => {
      if (otherStreamRef.current) {
        otherStreamRef.current.srcObject = stream;
      }
    });

    socketRef.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })
  }

  function acceptCall() {
    console.log('call accepted.');
    setCallAccepted(true);

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: streamRef.current.srcObject,
    });

    peer.on("signal", data => {
      socketRef.current.emit("acceptCall", 
        { signal: data, to: callerSid })
    });

    peer.on("stream", stream => {
      otherStreamRef.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

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


  return (
    <StreamContext.Provider value={{ 
      acceptCall,
      callPeer,
      initStream,
      mediaStream, 
      otherStreamRef,
      streamRef, 
      streamOff,
    }}>
      {props.children}
    </StreamContext.Provider>
  );
};

export default StreamContextProvider;
