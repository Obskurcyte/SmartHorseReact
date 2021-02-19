import React from 'react';
import './SailliesCard.css'

const SailliesCard = props => {
    return(
        <div className="card-container" style={{backgroundColor: 'white'}}>
            <div className="card-nav">
                <p>{props.parts}</p>
                <p>{props.tva}</p>
                <p>{props.reservation}</p>
                <p>{props.poulain}</p>
            </div>
        </div>
    )
};

export default SailliesCard;