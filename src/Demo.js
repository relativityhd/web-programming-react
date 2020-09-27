import React from 'react';
import './App.css';

function Demo(props) {
  return (
    <div className="SiteWrapper SiteWrapper-darker" id={`page-${props.pnum}`}>
      <div className="Demo">
        <a className="DemoLink" href="linktodemo">Demo</a>
      </div>
    </div>
  );
}

export default Demo;
