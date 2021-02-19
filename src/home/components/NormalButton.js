import React from 'react';

import "./NormalButton.css"

const NormalButton = props => {
    return (
        <div className="normal-button" style={props.style}>
            <p><a href={props.navigation}>{props.name}</a></p>
        </div>
    )
}

export default NormalButton;