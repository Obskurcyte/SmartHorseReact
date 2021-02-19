import React from 'react';
import NavBarCompte from "../shared/components/NavBarCompte";
import NavBarUnderline from "../shared/components/NavBarUnderline";
import Colors from "../shared/constants/Colors";

const Infos = props => {
    return (
        <div>
            <NavBarCompte />
            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
                <NavBarUnderline
                    name1="NOTIFICATIONS"
                    name2="MES INFOS"
                    name3="MES ORDRES D'ACHAT"
                    name4="HISTORIQUE"
                />
            </div>
        </div>
    )
};

export default Infos;