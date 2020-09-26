import React from 'react';
import './App.css';
import carbon from "./carbon.png"
import Simplecomp from "./Simplecomp.js"

function Manysimple() {
    const simplecomps = [];
    for (let i = 1; i < 11; i++) {
        simplecomps.push(<Simplecomp number={i}></Simplecomp>)
    }
    return (
        <div className="SiteWrapper">
        <h2>Many Simple Components</h2>
          <div className="Timer">
            <div className="TLeft">
              <div className="simpleComps">{simplecomps}</div>
            </div>
            <div className="TRight">
              <img src={carbon} className="StateCode" alt="code."/>
            </div>
          </div>
        </div>
      
      )
  }

export default Manysimple;