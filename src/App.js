import React, { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState(false);
  const modeHandler = () => {
    setMode(!mode);
  }
  return (
    <div className="App">
      <header className={mode ? "App-header" : "App-header-light"}>
      <button onClick={modeHandler}>Dark Mode</button>
      </header>
    </div>
  );
}

export default App;
