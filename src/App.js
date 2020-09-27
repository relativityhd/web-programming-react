import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frameworks from './Frameworks';
import Reactsite from "./reactsite"
import Components from "./components"
import Statelc from "./statelc"
import Timer from './Timer';
import Simplecompsite from "./Simplecompsite"
import Manysimple from "./Manysimple"
var counter = 0;

class App extends React.Component {
  onKeyPressed(e) {
    var pages = ["pageTwo", "pageThree", "pageFour", "pageFive", "pageSix", "pageSeven"];
    if (counter < 5) {
    var element = document.getElementById(pages[counter]);
    element.scrollIntoView();
    counter++;
    }
    else{
      element = document.getElementById(pages[counter]);
      element.scrollIntoView();
    }
  }
  render() {
    return (
    <div className="App" onKeyDown={(e) => this.onKeyPressed(e)}  tabIndex={0}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces</p>
        <a
          className="App-link"
          href="#pageOne"
        >
          Learn React
        </a>
      </header>
      <main className="App-body">
        <Frameworks></Frameworks>
        <Reactsite></Reactsite>
        <Components></Components>
        <Statelc></Statelc>
        <Simplecompsite></Simplecompsite>
        <Manysimple></Manysimple>
        <Timer></Timer>
      </main>
    </div>
  );
    }
}
export default App;
