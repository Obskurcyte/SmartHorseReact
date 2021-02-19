import React from 'react';
import NavBarUnderline from "../shared/components/NavBarUnderline";
import Colors from "../shared/constants/Colors";
import CardDate from "./CardDate";
import './NotificationPage.css';
import CardInfos from "./CardInfos";
import YellowButton from "../home/components/YellowButton";
import AccountNavBar from "../shared/components/AccountNavBar";

const NotificationPage = props => {

    const style = {
        marginLeft: 460,
        width: 200,
        textAlign: 'center'
    }

    const styles2 = {
        marginLeft: 100,
        width: 200,
        textAlign: 'center'
    }

    return (
        <div>
            <AccountNavBar />
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
                <div className="date-container2">
                    <div className="date-container3">
                    <div className="date">
                        <p className="date-paragraph">DATE</p>
                        <p className="date-paragraph">HEURE</p>
                        <p className="date-objet">OBJET</p>
                    </div>
                        <CardDate date="22/04/2020" heure="15:45" objet="Réponse : Saillie CRISTAL MONEY"/>
                        <CardDate date="22/04/2020" heure="17:43" objet="Proposition : Part READY CASH"/>
                        <CardDate date="22/04/2020" heure="19:52" objet="Réponse : Saillie CRISTAL MONEY"/>
                    </div>
                    <div>
                        <CardInfos />
                    </div>
                </div>
                    <div className="yellow-buttons">
                        <YellowButton name="VOIR PLUS" style={styles2} className="bouton1"/>
                        <YellowButton name="VOIR PLUS" style={style} className="bouton1"/>
                    </div>
                </div>
        </div>
    )
};

export default NotificationPage;