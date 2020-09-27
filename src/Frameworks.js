import React from 'react';
import './App.css';

function Frameworks() {
  return (
    <div className="SiteWrapper"  id="pageOne">
      <div className="Frameworks">
        <h2>Intro to Frameworks</h2>
      <div className="listWrap">
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <h3>Definition:</h3>
              <p>
              Ein Framework ist eine semi-vollständige Applikation. Es stellt für Applikationen eine wiederverwendbare, gemeinsame Struktur zur Verfügung.
              </p>
            </li>
            <li>
              <h2>02</h2>
              <h3>Vorgaben</h3>
              <p>
              Ein Framework gibt die Anwendungsarchitektur, den Kontrollfluss der Software sowie die Schnittstellen für die konkreten Klassen vor.
              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>Arten</h3>
              <p>
              Es  gibt viele verschiedene Arten von Frameworks, darunter:<br></br>
              -Application Frameworks<br></br>
              -Class Frameworks<br></br>
              -Web Frameworks
              </p>
            </li>
            </ul>
      </div>
    </div>
    </div>
  );
}

export default Frameworks;
