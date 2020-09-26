import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frameworks from './Frameworks';
import Reactsite from "./reactsite"
import Components from "./components"
import statelc from "./statelc"
import Timer from './Timer';

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
      <main className="App-body">
        <Frameworks></Frameworks>
        <Reactsite></Reactsite>
        <Timer></Timer>
      </main>
    </div>
  );
}

export default App;
