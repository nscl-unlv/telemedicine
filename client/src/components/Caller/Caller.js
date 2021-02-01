import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components";

const Video = styled.video`
  border: 1px solid blue;
  width: 100%;
`;

function Caller() {
  const [stream, setStream] = useState(null);
  const callerVideo = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ 
          video: {
            facingMode:'user'
          }, 
          audio: true 
        }).then(stream => {
          setStream(stream);
          if (callerVideo.current) {
             callerVideo.current.srcObject = stream;
          }
      })
    }
  }, []);


  let CallerVideo;
  if (stream) {
    CallerVideo = (
      <Video playsInline muted ref={callerVideo} autoPlay />
    );
  }

  return (
    <>
      {CallerVideo}
    </>
  );
}

export default Caller;
