import React from 'react';

const HistoriqueCard = props => {
    return(
        <div className="card-container" style={{backgroundColor: 'white'}}>
            <div className="card-nav">
                <p>Nom</p>
                <p>Type</p>
                <p>Prix</p>
                <p>Contrat</p>
                <p>Facture</p>
            </div>
        </div>
        )

};

export default HistoriqueCard