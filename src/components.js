import React from 'react';
import './App.css';

function Components() {
  return (
    <div className="SiteWrapper SiteWrapper-darker">
      <div className="reactsite">
        <h2>Components</h2>
        <div className="listWrap">
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <h3>Definition</h3>
              <p>
                Components sind unabhägige und widerverwedbare Codestücke, die aus Javascript Klassen oder Funktionen bestehen.
              </p>
            </li>
            <li>
              <h2>02</h2>
              <h3>Inputverarbeitung</h3>
              <p>
                Components sind optional dazu in der Lage einen Input zu akzeptieren.
              </p>
            </li>
            <li>
              <h2>03</h2>
              <h3>Return</h3>
              <p>
                Komponenten geben ein React Element zurück. Dieses Element definiert, wie ein Stück des User Interfaces aussieht.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Components;