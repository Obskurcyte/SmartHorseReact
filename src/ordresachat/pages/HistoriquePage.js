import React, {useEffect} from "react";

import './HistoriquePage.css';
import Colors from "../../shared/constants/Colors";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import HistoriqueCard from "../components/HistoriqueCard";
import YellowButton from "../../home/components/YellowButton";
import AccountNavBar from "../../shared/components/AccountNavBar";
import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../../store/actions/auth-actions'

const HistoriquePage = props => {



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


    const token = useSelector(state => state.users.token);
    console.log(token)
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
                    <p>VENTES</p>
                    <p>ACHATS</p>
                </div>
                <div className="cards">
                    <HistoriqueCard />
                    <HistoriqueCard />
                </div>
                <div className="container-yellow-buttons">
                    <YellowButton name="VOIR PLUS" style={styles2} className="bouton1"/>
                    <YellowButton name="VOIR PLUS" style={style} className="bouton1"/>
                </div>
            </div>
        </div>
    )
};

export default HistoriquePage
