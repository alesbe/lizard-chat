import React, { useEffect } from 'react';
import './App.css';
const io = require("socket.io-client");

function App() {
  useEffect(() => {
    const socket = io(`http://localhost:8000`);

    socket.on('connect', () => {
      console.log("Connecting to server...");

      socket.emit("enterChat", { name: "test" });
    })
  }, []);

  return (
    <div className="App">
      <h1>Lizard chat</h1>
    </div>
  );
}

export default App;
