import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frameworks from './Frameworks';
import Reactsite from "./reactsite"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Frameworks></Frameworks>
        <Reactsite></Reactsite>

      </main>
    </div>
  );
}

export default App;
