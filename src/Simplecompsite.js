import React from 'react';
import './App.css';
import carbon from "./singlecomp.png"
import Simplecomp from "./Simplecomp.js"

function Simplecompsite(props) {
  return (
  <div className="SiteWrapper SiteWrapper-darker" id={`page-${props.pnum}`}>
  <h2>Simple Component</h2>
    <div className="Timer">
      <div className="TLeft">
        <div className="SimpleComponentLeft"><Simplecomp number="1"></Simplecomp></div>
      </div>
      <div className="TRight">
        <img src={carbon} className="StateCode" alt="code."/>
      </div>
    </div>
  </div>

)
}

export default Simplecompsite;