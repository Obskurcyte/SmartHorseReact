import React from 'react';
import './HomePage.css';
import Colors from "../../shared/constants/Colors";
import YellowButton from "../components/YellowButton";
import NormalButton from "../components/NormalButton";
import CustomCard from "../components/CustomCard";
import Footer from "../../shared/components/Footer";
import NavBar from "../../shared/components/NavBar";
import NavBarUnderline from "../../shared/components/NavBarUnderline";


const HomePage = props => {

    const styles = {
        marginBottom: '50px',
        backgroundColor: Colors.primaryColor
    }

    const styles4 = {
        textAlign: 'center',
        width: '100%',
        color: 'black',
        position: 'absolute',
        top: '100%'
    }

    const styles2 = {
        marginRight: '60px',
        paddingLeft: '15px'
    }

    const styles3 = {
        paddingLeft: '20px'
    }

    return (
        <div>
            <NavBar/>
            <div className="container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">SMARTHORSE</h1>
                <h2 style={{color: Colors.primaryColor}} className="inner-title">INVESTISSEZ EN TOUTE SECURITE</h2>
                <div className="buttons">
                    <div className="horizontal-buttons">
                        <YellowButton name="CHEVAUX A VENDRE" navigation="/" style={styles} className1="home-button"/>
                        <NormalButton name="PARTS A VENDRE" navigation="/" style={styles3}/>
                    </div>
                    <div className="horizontal-buttons">
                        <NormalButton name="SAILLIES A VENDRE" navigation="/" style={styles2}/>
                        <YellowButton name="JUMENTS A VENDRE" navigation="/" style={styles} className1="home-button"/>
                    </div>
                </div>
            </div>

            <div className="about-smarthorse" style={{backgroundColor: Colors.primaryColor}}>
                <div className="container-smarthorse">
                    <h1>A propos de SMARTHORSE</h1>
                    <p>La création de SMARTHORSE part de notre volonté de contribuer à la filière hippique en simplifiant la vente de parts et de saillies d'étalons à l'aide des nouvelles technologies.</p>
                    <p>La sécurité et la rapidité des transactions sont les principaux atouts de notre solution qui s'engage à améliorer le suivi des haras et des éleveurs dans leur gestion de la saison de reproduction.</p>
                    <p>Vous trouverez ici une vidéo récapitulative des fonctionnalités et des particularités de SMARTHORSE dans le but d'accéder à une bonne utilisation de notre plateforme.</p>
                </div>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PtxvsuVxyRM" frameBorder="0" title="video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>

            <div className="container-horse" style={{backgroundColor: Colors.accentColor}}>
                <NavBarUnderline
                    name1="CHEVAUX A VENDRE"
                    name2="PARTS A VENDRE"
                    name3="SAILLIES A VENDRE"
                    name4="JUMENTS A VENDRE"
                />
                <div className="searchbar">
                    <input type="text" placeholder="RECHERCHER"/>
                </div>

                <div className="chevaux">
                    <CustomCard style={styles4} name="FAIRE UNE PROPOSITION" infos="Infos Etalon" title="Aldo d'Argentre" price="1800€" source="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/26/node_185401/12093737/public/2020/08/26/B9724385098Z.1_20200826102530_000%2BG86GI3HG5.1-0.jpg?itok=vrETSARE1598439430"/>
                    <CustomCard style={styles4} name="FAIRE UNE PROPOSITION" infos="Infos Etalon" title="Ready Cash" price="2000€" source="https://www.zoomalia.com/blogz/114/l_cheval-noir.jpg"/>
                    <CustomCard style={styles4} name="FAIRE UNE PROPOSITION" infos="Infos Etalon" title="Uniclove" price="3000€" source="https://zoosauvage.org/app/uploads/2017/11/cheval-domestique-banniere-ete.jpg"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
