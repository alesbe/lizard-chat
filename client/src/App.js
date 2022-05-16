import React from 'react';
import './App.css';
import { useChat } from './hooks/useChat';
import {SocketContext, socket} from './context/context';
import { LoginForm } from './components/LoginForm';
import { ChatWindow } from './components/ChatWindow';

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
            <ChatWindow/>
          :
            <LoginForm setLogged={setLogged} joinRoom={joinRoom}/>
          }
      </div>
    </SocketContext.Provider>
  );
}

export default App;
