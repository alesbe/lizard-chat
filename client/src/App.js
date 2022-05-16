import React from 'react';
import './App.css';
import { useChat } from './hooks/useChat';
import {SocketContext, socket} from './context/context';

function App() {
  const { joinRoom, testFunct } = useChat();
  
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <h1>Lizard chat</h1>
        <button onClick={() => joinRoom("test", "1234") }>Join</button>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
