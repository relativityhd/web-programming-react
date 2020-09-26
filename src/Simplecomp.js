import "./simplecomp.css"
import React from 'react';

function Simplecomp(props) {
    return (
        <div className="viereck">
            <div className="kreis">
                {props.number}
            </div>
        </div>
    );
}
export default Simplecomp;