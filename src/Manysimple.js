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
        <div className="SiteWrapper">
        <h2>Many Simple Components</h2>
          <div className="Timer">
            <div className="TLeft">
              <p className="StateSeconds"><ul>{final}</ul></p>
            </div>
            <div className="TRight">
              <img src={carbon} width="100%" className="StateCode" alt="code."/>
            </div>
          </div>
        </div>
      
      )
  }

export default Manysimple;