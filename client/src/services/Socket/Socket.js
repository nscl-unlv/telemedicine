import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

function Socket() {
  const [socketId, setSocketId] = useState('');

  const socket = useRef();

  useEffect(() => {
    socket.current = io('/');

    socket.current.on('yourID', (id) => {
      setSocketId(id);
    });
  }, []);

  const ShowId = () => {
    if (socketId) {
      console.log(socketId);
    }
    return <></>;
  };

  return (
    <>
      <ShowId />
    </>
  );
}

export default Socket;
