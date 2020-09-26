import "./simplecomp.css"
import React from 'react';

function Simplecomp(props) {
    return (
        <div className="viereck">
            <div className="kreis">
                <br></br>
                <p>{props.number}</p>
            </div>
        </div>
    );
}
export default Simplecomp;