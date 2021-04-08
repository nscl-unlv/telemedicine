/*
 * Receiver.js
 * Shows the video stream of the other person
 * after the receiver accepts the call.
 *
 */

import React, { useContext } from 'react';
import styled from 'styled-components';

// Contexts
import { SocketContext } from 'contexts/SocketContext';
import { StreamContext } from 'contexts/StreamContext';

const Video = styled.video`
  width: 100%;
  max-height: 80vh;
`;

function Receiver() {
  const { callAccepted } = useContext(SocketContext);
  const { otherStreamRef } = useContext(StreamContext);

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video id="partner-video" playsInline ref={otherStreamRef} autoPlay />
    );
  }

  return <>{PartnerVideo}</>;
}

export default Receiver;
