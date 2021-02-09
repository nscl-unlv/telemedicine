import React, { useEffect } from 'react';


function WaitingRoom() {

  useEffect(async () => {
    const response = await fetch('/waitingroom');
    const text = await response.text();
    console.log(text);
  });

  return (
    <>
      <h1>Waiting Room</h1>
    </>
  );
}

export default WaitingRoom;
