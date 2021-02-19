import React from 'react';
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import './OrdresPage.css';
import SailliesCard from "../components/SailliesCard";
import YellowButton from "../../home/components/YellowButton";

const OrdresPage = props => {

    const style = {
        marginTop: 30,
        marginLeft: 250,
        width: 300,
        textAlign: 'center'
    }

    const styles2 = {
        marginLeft: 100,
        marginTop: 30,
        width: 300,
        textAlign: 'center'
    }
    return (
        <div>
            <AccountNavBar />
            <div className="ordre-container" style={{backgroundColor: Colors.accentColor}}>
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
                <div className="cards">
                    <SailliesCard parts="Numéro de part" tva="TVA" reservation="Réservation" poulain="Poulain vivant"/>
                    <SailliesCard parts="Etalon" tva ="Numéro de part" reservation="TVA" poulain="Prix"/>
                </div>
                <div className="container-yellow-buttons">
                    <YellowButton name="VALIDER LES MODIFICATIONS" style={styles2} className="bouton1"/>
                    <YellowButton name="VALIDER LES MODIFICATIONS" style={style} className="bouton1"/>
                </div>
            </div>
        </div>
    )
};

export default OrdresPage;