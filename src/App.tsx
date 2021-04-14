import React from 'react';
import './App.scss';

import { LogIn } from "./components";

function App() {
  return (
    <div className="App">
      <LogIn onLogin={({ userName }) => null} />
    </div>
  );
}

export default App;
