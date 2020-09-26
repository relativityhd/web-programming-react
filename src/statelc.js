import React from 'react';
import './App.css';

function Statelc() {
  return (
    <div className="SiteWrapper SiteWrapper-darker">
      <div className="reactsite">
        <h2>States</h2>
        <div className="listWrap">
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <h3>Quotation</h3>
              <p>
              ”You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.” 
              </p>
            </li>
            <li>
              <h2>02</h2>
              <h3>Lifecycles</h3>
              <p>
              Die 3 Lifecycles eines react-Komponenten sind:
                <lie>Mounting: Geburt des Komponents </lie>
                <lie>Update:  Wachstum/Veränderung des Komponenten</lie>
                <lie>Unmount: Tod des Komponenten</lie>

              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>History</h3>
              <p>
              Mounting und updating wird beides mit der render () Methode durchgeführt

              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Statelc;