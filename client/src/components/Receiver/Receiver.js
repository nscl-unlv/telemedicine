import React, { useContext } from 'react';
import { SocketContext } from 'contexts/SocketContext';
import { StreamContext } from 'contexts/StreamContext';
import styled from 'styled-components';

const Video = styled.video`
  border: 1px solid blue;
  width: 100%;
`;

function Receiver() {
  const { callAccepted } = useContext(SocketContext);
  const { otherStreamRef } = useContext(StreamContext);

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <Video playsInline ref={otherStreamRef} autoPlay />;
  }

  return <>{PartnerVideo}</>;
}

export default Receiver;
