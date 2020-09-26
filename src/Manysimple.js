import React from 'react';
import './App.css';
import carbon from "./carbon.png"
import Simplecomp from "./Simplecomp.js"

function Manysimple() {
    const simplecomps = [];
    for (let i = 1; i < 11; i++) {
        simplecomps.push(<Simplecomp number={i}></Simplecomp>)
    }
    const final = [];
    for (let  Simplecomp of simplecomps) {
      final.push(<li key={Simplecomp}>{Simplecomp}</li>);  }
    return (
    <div className="Manysimple">
        <ul>{final}</ul>    
        <div>
        <img src={carbon} className="Carbon-Simplecomp" width="500px" height="500px" alt="simplecomp" />
        </div>
    </div>
    );
  }

export default Manysimple;