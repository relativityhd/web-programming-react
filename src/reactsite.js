import React from 'react';
import './App.css';

function Reactsite() {
  return (
    <div className="SiteWrapper SiteWrapper-darker">
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
                Komponentenbasiert mit einem State und einem Lifecycle
              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>History</h3>
              <p>
                Entwickelt von Jordan Walke in 2011, Weiterentwickelt von Facebook OpenSource
              </p>
            </li>
            <li>
              <h2>04</h2>
              <h3>Nutzer</h3>
              <p>
                Benutzt von Facebook, Instagram, Discord und vielen mehr
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reactsite;