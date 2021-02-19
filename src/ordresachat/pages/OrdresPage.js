import React from 'react';
import NavBarCompte from "../shared/components/NavBarCompte";
import Colors from "../shared/constants/Colors";
import NavBarUnderline from "../shared/components/NavBarUnderline";
import YellowButton from "../home/components/YellowButton";
import './OrdresPage.css'

const OrdresPage = props => {
    return (
        <div>
            <NavBarCompte />
            <div className="notification-container" style={{backgroundColor: Colors.accentColor}}>
                <NavBarUnderline
                    name1="NOTIFICATIONS"
                    navigation1="/notifications"
                    name2="MES INFOS"
                    navigation2="/infos"
                    name3="MES ORDRES D'ACHAT"
                    navigation3="/ordres"
                    name4="HISTORIQUE"
                    navigation4="/historique"
                />
                <div className="saillies" style={{fontWeight: 'bold'}}>
                    <p>SAILLIES</p>
                    <p>PARTS</p>
                </div>
            </div>
        </div>
    )
};

export default OrdresPage;