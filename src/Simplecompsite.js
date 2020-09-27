import React from 'react';
import './App.css';
import carbon from "./carbon.png"
import Simplecomp from "./Simplecomp.js"

function Simplecompsite() {
  return (
  <div className="SiteWrapper SiteWrapper-darker" id="pageFive">
  <h2>Simple Component</h2>
    <div className="Timer">
      <div className="TLeft">
        <p className="SimpleComponentLeft"><Simplecomp number="1"></Simplecomp></p>
      </div>
      <div className="TRight">
        <img src={carbon} className="StateCode" alt="code."/>
      </div>
    </div>
  </div>

)
}

export default Simplecompsite;