import React from 'react';
import './App.scss';

import { LogIn, ChatWindow } from "./components";

function App() {
  return (
    <div className="App">
      <LogIn onLogin={({ userName }) => null} />
      <ChatWindow
        messages={[
          {
            text: "Hello Everyone",
            userName: "Jone",
            date: new Date()
          }
        ]}
        userName="Dena"
        onAddMessage={({ userName, text }) => null}
      />
    </div>
  );
}

export default App;
