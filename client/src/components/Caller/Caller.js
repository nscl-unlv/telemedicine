/*
 * Caller.js
 * This component shows a video stream of yourself during
 * a video chat sesssion.
 *
 */

import React, { useContext } from 'react';
import styled from 'styled-components';

// Contexts
import { StreamContext } from 'contexts/StreamContext';

const Video = styled.video`
  width: 90%;
`;

function Caller() {
  const { myStreamRef } = useContext(StreamContext);

  return (
    <>
      <Video playsInline muted ref={myStreamRef} autoPlay />
    </>
  );
}

export default Caller;
