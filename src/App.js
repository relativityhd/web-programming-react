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
import Demo from "./Demo"
var counter = 0;

class App extends React.Component {
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
    document.addEventListener("wheel", this.onWheel.bind(this))
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
      document.removeEventListener("wheel", this.onWheel.bind(this))
  }
  
  onWheel (e) {
    this.hideStuff(1)
  }

  onKeyPressed(e) {
    if (e.keyCode === 39) {
      counter = Math.min(8, counter+1)
    } else if (e.keyCode === 37) {
      counter = Math.max(0, counter-1)
    } else { return }
    this.scrollOnElem()
  }

  learnReact(e) {
    e.preventDefault()
    counter = 1
    this.scrollOnElem()
  }

  hideStuff (x) {
    const mothers = document.getElementsByClassName("SiteWrapper")
    Object.values(mothers).forEach(mother => {
      mother.childNodes.forEach(elem => {
        elem.style.opacity = x
      })
    })
  }

  scrollOnElem () {
    this.hideStuff(0)
    const nextElem = document.getElementById(`page-${counter}`)
    setTimeout(() => {
      nextElem.scrollIntoView()
      nextElem.childNodes.forEach(elem => {
        elem.style.opacity = 1
      })
    }, 500)
    
  }

  render() {
    return (
    <div className="App"  tabIndex={0}>
      <header className="App-header" id="page-0">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React</h1>
        <p>A JavaScript library for building user interfaces</p>
        <a
          className="App-link"
          href="#-"
          onClick={this.learnReact.bind(this)}
        >
          Learn React
        </a>
        <ul className="Tutorial">
          <li>Left Arrow: Previous Page</li>
          <li>Right Arrow: Previous Page</li>
          <li>Scroll: Show Pages</li>
        </ul>
      </header>
      <main className="App-body">
        <Frameworks pnum="1"></Frameworks>
        <Reactsite pnum="2"></Reactsite>
        <Components pnum="3"></Components>
        <Simplecompsite pnum="4"></Simplecompsite>
        <Manysimple pnum="5"></Manysimple>
        <Statelc pnum="6"></Statelc>
        <Timer pnum="7"></Timer>
        <Demo pnum="8"></Demo>
      </main>
    </div>
  );
    }
}
export default App;
