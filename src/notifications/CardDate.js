import React from 'react';
import "./CardDate.css";

const CardDate = props => {
    return(
        <div className="container-date">
            <a href="/"><div className="date-data"><p>{props.date}</p></div></a>
            <a href="/"><div className="date-data"><p>{props.heure}</p></div></a>
            <a href="/"><div className="date-data"><p>{props.objet}</p></div></a>
        </div>
    )
};

export default CardDate;