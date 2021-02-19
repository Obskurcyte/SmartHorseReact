import React from 'react';
import './YellowButton.css';
import Colors from "../../shared/constants/Colors";

const YellowButton = props => {

    return (
        <div className={props.className1} style={props.style}>
            <button style={{backgroundColor: Colors.primaryColor, borderWidth: 0}} className={props.className}><a href={props.navigation}>{props.name}</a></button>
        </div>
    )
}

export default YellowButton;