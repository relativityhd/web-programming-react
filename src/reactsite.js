import React from 'react';
import './App.css';

function Reactsite() {
  return (
    <div className="SiteWrapper SiteWrapper-darker" id="pageTwo">
      <div className="reactsite">
        <h2>Intro to React</h2>
        <div className="listWrap">
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <h3>React</h3>
              <p>
                React ist ein Web-Frontend Framework, mit dem deklarativ, schnell und effektiv User-Interfaces erstellt werden können.
              </p>
            </li>
            <li>
              <h2>02</h2>
              <h3>Komponenten</h3>
              <p>
                React ist Komponentanbasiert und besitzt einen so genannten "State" und einen so genannten "Lifecycle".
              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>History</h3>
              <p>
                React wurde 2011 von Jordan Walke entwickelt und danach von Facebook OpenSource weiterentwickelt.
              </p>
            </li>
            <li>
              <h2>04</h2>
              <h3>Nutzer</h3>
              <p>
                React wird heutzutage von vielen populären Webdiensten verwendet. Darunter Instagram, Facebook und Discord.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reactsite;