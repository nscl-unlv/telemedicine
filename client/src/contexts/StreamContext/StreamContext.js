import React, { 
  createContext, 
  useEffect, 
  useRef, 
  useState 
} from 'react';

export const StreamContext = createContext();

const StreamContextProvider = props => {
  const [mediaStream, setMediaStream] = useState(null);
  const streamRef = useRef();

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

  return (
    <StreamContext.Provider value={{ mediaStream, streamRef, streamOff }}>
      {props.children}
    </StreamContext.Provider>
  );
};

export default StreamContextProvider;
