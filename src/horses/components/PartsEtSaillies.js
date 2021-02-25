import React from "react";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import './PartsEtSaillies.css';
import YellowButton from "../../home/components/YellowButton";


const PartsEtSaillies = props => {
    return (
        <div>
            <AccountNavBar />
            <div className="horse-ccontainer" style={{backgroundColor: Colors.accentColor}}>
                <h5 className="horse-title">{props.titre}</h5>
                <div className="searchbar">
                    <input type="text" placeholder="RECHERCHER"/>
                </div>
                <div className="parts-container">
                    <div className="parts-title">
                        <p>{props.name}</p>
                        <p>{props.liste}</p>
                    </div>
                    <div className="container3">
                    <div className="part-card">
                        <img src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/26/node_185401/12093737/public/2020/08/26/B9724385098Z.1_20200826102530_000%2BG86GI3HG5.1-0.jpg?itok=vrETSARE1598439430" alt="cheval"/>
                        <div className="part-card-inner">
                            <p><a href="/">Infos Etalon</a></p>
                            <p><a href="/">Infos SIRE</a></p>
                            <p><a href="/">Liste Porteurs de Part</a></p>
                        </div>
                    </div>
                    <div className="parts-list">
                        <div className="parts-list-title">
                            <p>{props.numero}</p>
                            <p>{props.vendre}</p>
                            <p>{props.prix}</p>
                            <p>{props.saillies}</p>
                        </div>
                    </div>
                    </div>
                </div>
                <YellowButton name="VALIDER MODIFICATIONS" className1="buttton" className="bouton1"/>
            </div>
        </div>
    )
};

export default PartsEtSaillies;
