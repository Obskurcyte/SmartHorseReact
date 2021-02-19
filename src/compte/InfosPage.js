import React from 'react';
import NavBarUnderline from "../shared/components/NavBarUnderline";
import InscriptionForm from "../auth/components/InscriptionForm";
import Colors from "../shared/constants/Colors";
import YellowButton from "../home/components/YellowButton";
import './Infos.css'
import AccountNavBar from "../shared/components/AccountNavBar";

const InfosPage = props => {


    return (
        <div>
            <AccountNavBar />
            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
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
                <InscriptionForm />
                <YellowButton name="ENREGISTRER" className1="button-info" className="bouton1"/>
            </div>
        </div>
    )
};

export default InfosPage;