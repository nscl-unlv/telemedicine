import React, { useContext } from 'react';
import { StreamContext } from 'contexts/StreamContext';
import styled from 'styled-components';

const Video = styled.video`
  border: 1px solid blue;
  width: 100%;
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
