import React, { useContext } from 'react';
import { StreamContext } from 'contexts/StreamContext';
import styled from "styled-components";

const Video = styled.video`
  border: 1px solid blue;
  width: 100%;
`;

function Caller() {
  const { streamRef } = useContext(StreamContext);

  return (
    <>
      <Video playsInline muted ref={streamRef} autoPlay />
    </>
  );
}

export default Caller;
