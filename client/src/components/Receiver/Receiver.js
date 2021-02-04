import React, { 
  useContext,
  useEffect, 
  useState, 
  useRef } 
from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import { StreamContext } from 'contexts/StreamContext';
import styled from 'styled-components';

const Video = styled.video`
  border: 1px solid blue;
  width: 100%;
`;

function Receiver() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const partnerVideo = useRef();
  const socket = useRef();

  const { streamRef } = useContext(StreamContext);

  useEffect(() => {
    socket.current = io('/');

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: streamRef.current.srcObject
    });

    peer.on("signal", data => {
      socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    })

    peer.on("stream", stream => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", signal => {
      setCallAccepted(true);
      peer.signal(signal);
    })

  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: streamRef.current.srcObject,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }
  return (
    <>
      {PartnerVideo}
      {Object.keys(users).map(key => {
        if (key === yourID) {
          return null;
        }
        return (
          <button onClick={() => callPeer(key)}>Call {key}</button>
        );
      })}
      {incomingCall}
    </>
  );
}

export default Receiver;
