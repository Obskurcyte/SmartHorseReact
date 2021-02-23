import React from "react";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import Colors from "../../shared/constants/Colors";
import './PageType.css';
import CustomCard from "../../home/components/CustomCard";
import AccountNavBar from "../../shared/components/AccountNavBar";


const PageType = props => {


    return (
        <div>
            <AccountNavBar />
            <div className="tamere" style={{backgroundColor: Colors.accentColor}}>
                <NavBarUnderline
                    name1="CHEVAUX A VENDRE"
                    navigation1="/ventechevaux"
                    name2="PARTS A VENDRE"
                    navigation2="/venteparts"
                    name3="SAILLIES A VENDRE"
                    navigation3="/ventesaillies"
                    name4="JUMENTS A VENDRE"
                    navigation4="/ventejuments"
                />
                <div className="searchbar">
                    <input type="text" placeholder="RECHERCHER"/>
                </div>
                <div className="cards-container container" style={{display: 'flex', justifyContent: 'space-around'}}>
                    <CustomCard name="FAIRE UNE PROPOSITION" infos={props.infos1} title={props.titre1} price={props.prix1} source="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/26/node_185401/12093737/public/2020/08/26/B9724385098Z.1_20200826102530_000%2BG86GI3HG5.1-0.jpg?itok=vrETSARE1598439430"/>
                    <CustomCard name="FAIRE UNE PROPOSITION" infos={props.infos2} title={props.titre2} price={props.prix2} source="https://www.zoomalia.com/blogz/114/l_cheval-noir.jpg"/>
                    <CustomCard name="FAIRE UNE PROPOSITION" infos={props.infos3} title={props.titre3} price={props.prix3} source="https://zoosauvage.org/app/uploads/2017/11/cheval-domestique-banniere-ete.jpg"/>
                </div>
            </div>
        </div>
    )
};

export default PageType
