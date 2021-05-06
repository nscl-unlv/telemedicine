// configs.js

const configs = {
  audio: false,
  video: {
    facingMode: 'user',
    width: {
      min: 480,
      max: 720,
    },
  },
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
  ],
};

export default configs;
