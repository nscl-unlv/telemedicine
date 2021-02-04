import React, { 
  createContext, 
  useEffect, 
  useRef, 
  useState 
} from 'react';

export const StreamContext = createContext();

const StreamContextProvider = props => {
  const [, setStream] = useState(null);
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
          setStream(stream);
          if (streamRef.current) {
             streamRef.current.srcObject = stream;
          }
        });
    } 
  }, []);

  return (
    <StreamContext.Provider value={{ streamRef }}>
      {props.children}
    </StreamContext.Provider>
  );
};

export default StreamContextProvider;
