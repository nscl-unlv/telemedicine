// Caller.js

import React, { useContext } from 'react';
import styled from 'styled-components';

// Contexts
import { StreamContext } from 'contexts/StreamContext';

const Video = styled.video`
  width: 90%;
`;

/**
 *
 * Caller component shows a video stream of yourself during
 * a video chat sesssion.
 *
 * @component
 * @example
 * <Caller />
 *
 */
function Caller() {
  const { myStreamRef } = useContext(StreamContext);

  return (
    <>
      <Video
        aria-label="caller-video"
        playsInline
        muted
        ref={myStreamRef}
        autoPlay
      />
    </>
  );
}

export default Caller;
