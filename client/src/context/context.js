import React from 'react';
const io = require("socket.io-client");

export const socket = io.connect(`http://localhost:8000`);
export const SocketContext = React.createContext();
