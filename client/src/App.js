import React from 'react';
import './App.css';
import { useChat } from './hooks/useChat';
import {SocketContext, socket} from './context/context';
import { LoginForm } from './components/LoginForm';

function App() {
  const {
    joinRoom,
    logged,
    setLogged
  } = useChat();
  
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <h1>Lizard chat 🦎</h1>
          { logged ?
            <h2>Logged!</h2>
          :
            <LoginForm setLogged={setLogged} joinRoom={joinRoom}/>
          }
      </div>
    </SocketContext.Provider>
  );
}

export default App;
