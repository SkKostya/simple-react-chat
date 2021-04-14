import React from 'react';
import './App.scss';

import { LogIn, ChatWindow, UsersSidebar } from "./components";

function App() {
  const [logedIn, setLogedIn] = React.useState(false);

  return (
    <div className="wrapper">
      {!logedIn
        ? <LogIn onLogin={({ userName }) => setLogedIn(true)} />
        : <div className="chat">
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
          <UsersSidebar users={["Jone", "Dena"]} />
        </div>
      }
    </div>
  );
}

export default App;
