import React from 'react';
import './App.css';
import carbon from "./carbon.png"
import Simplecomp from "./Simplecomp.js"

function Simplecompsite() {
  return (
    <div className="SiteWrapper">
      <div className="Simplecomponent">
        <h1>Das ist eine simple Komponente</h1>
            <Simplecomp number="1"></Simplecomp>
      </div>
      <div>
        <img src={carbon} className="Carbon-Simplecomp" width="500px" height="500px" alt="simplecomp" />
      </div>
    </div>
  );
}

export default Simplecompsite;