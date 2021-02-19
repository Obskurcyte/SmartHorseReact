import React from 'react';
import './CardInfos.css';


const CardInfos = props => {
    return (
        <div className="info-container">
            <div className="info-text">
                <p className="smarthorse-title">INFOS SMARTHORSE</p>
                <div className="smarthorse-text">
                <p >23/04/2020 : SAISON DE MONTE 2020 - RAPPEL DE L'IFCE</p>
                <p>L'IFCE rappelle aux étalonniers que les demandes de carnets de saillie effectués par internet sont traitées normalement. Les carnets de saillies sont donc délivrés sans difficulté. Seules les demandes de carnets de saillies effectuées par internet pour de nouveaux étalons ne peuvent pas être instruites.</p>
                <p>23/04/2020 : DEPLACEMENTS D'EQUIDES OU DE PERSONNES POUR SOINS AUX EQUIDES DANS LE CADRE DU CONFINEMENT</p>
                <p>Pour consulter, ...</p>
                </div>
            </div>
        </div>
    )
};

export default CardInfos