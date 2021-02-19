import React from 'react';
import './NavBarUnderline.css'

const NavBarUnderline = props => {
    return (
        <div className="horse-navbar">
            <p><a href={props.navigation1}>{props.name1}</a></p>
            <p><a href={props.navigation2}>{props.name2}</a></p>
            <p><a href={props.navigation3}>{props.name3}</a></p>
            <p><a href={props.navigation4}>{props.name4}</a></p>
        </div>
    )
}

export default NavBarUnderline;