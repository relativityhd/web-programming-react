import React from 'react';
import './App.css';
import carbon from "./manycomps.png"
import Simplecomp from "./Simplecomp.js"

function Manysimple(props) {
    const simplecomps = [];
    for (let i = 1; i < 11; i++) {
        simplecomps.push(<Simplecomp number={i} key={i}></Simplecomp>)
    }
    return (
        <div className="SiteWrapper"  id={`page-${props.pnum}`}>
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