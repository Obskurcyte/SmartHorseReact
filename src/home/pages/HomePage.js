import React, {useEffect, useState} from 'react';
import './HomePage.css';
import Colors from "../../shared/constants/Colors";
import YellowButton from "../components/YellowButton";
import NormalButton from "../components/NormalButton";
import CustomCard from "../components/CustomCard";
import Footer from "../../shared/components/Footer";
import NavBar from "../../shared/components/NavBar";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Web3 from "web3";
import {abi} from "../../abi";
import Cheval from "../../models/horse";
import {useDispatch} from "react-redux";
import * as onSaleHorseActions from "../../store/actions/onsale-horses";
import {Col, Row} from "react-bootstrap";
import HorseItem from "../../vente/components/HorseItem";


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

  const [state, setState] = useState({
    contrat: undefined,
  });

  const [totalcheval, setTotalCheval] = useState([])
  const [compteConnecte, setCompteConnecte] = useState('')

  const etatCheval = {
    EN_VENTE: "0",
    EN_PASSATION: "1",
    ALIENE: "2"
  }

  useEffect( () => {
    async function Provider () {
      await Web3.givenProvider.enable();
      console.log('Provider', Web3.givenProvider)
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
      const contrat = new web3.eth.Contract(abi, '0x7e0a49ECa03abb104e30853143800b6065a86A63', {})

      const accounts = await web3.eth.getAccounts()
      console.log('accs', accounts);
      console.log(accounts[0])
      setCompteConnecte(accounts[0])
      console.log(compteConnecte)
      setState({contrat: contrat})

      const total = await contrat.methods.totalCheval().call();

      const chevaux = [];
      const totalchevaux = [];

      for (let i = 0; i < total; i++) {
        const cheval = await contrat.methods.chevalIndex(i).call();
        console.log(cheval)
        chevaux.push(cheval)
      }

      for (let data in chevaux) {
        totalchevaux.push(new Cheval(chevaux[data][0], chevaux[data][1], Web3.utils.fromWei(chevaux[data][4], 'ether'), chevaux[data][5], chevaux[data][3], chevaux[data][2]))
      }
      // console.log(totalchevaux)
      setTotalCheval(totalchevaux)
      console.log(totalchevaux)
      console.log(totalcheval)

      const web3ws = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545'));
      const contratWs = new web3ws.eth.Contract(abi, '0x7e0a49ECa03abb104e30853143800b6065a86A63', {});
      contratWs.events.Vente(null, (err, response) => {
        if (err) {
          console.warn('websocket', err)
          return;
        }
        console.log('websocket response', response)
      })
    }

    Provider().then(() => console.log())

    console.log(totalcheval)
  }, [compteConnecte]);

  const dispatch = useDispatch();

  const mettreAJourChevaux = (chev) => {
    const chevaux = totalcheval;
    const index = totalcheval.findIndex(cheval => cheval.id === chev.id)
    chevaux[index] = chev
    console.log(chevaux)
    setTotalCheval(chevaux)
  }

  useEffect(() => {
    dispatch(onSaleHorseActions.fetchOnSaleHorse())
  }, [dispatch]);


  const acheterCheval = (cheval) => {
    if (state.contrat) {
      const contrat = state.contrat;
      contrat.methods.acheterCheval(cheval.id)
        .send({from: compteConnecte, value: Web3.utils.toWei(cheval.prix)})
        .on('transactionHash', hash => {
          console.log('hash', hash)
        })
        .on('confirmation', no => {
          return (
            <p>Transaction ok</p>
          )
        })
        .on('error', erreur => {
          console.log('err', erreur)
        })
        .then(() => {
          cheval.proprietaire = compteConnecte;
          cheval.etat = "2";
          mettreAJourChevaux(cheval);
        })
    }
  }

  console.log('totalcheval', totalcheval);

    return (
        <div>
            <AccountNavBar/>
            <div className="container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">SMARTHORSE</h1>
                <h2 style={{color: Colors.primaryColor}} className="inner-title">INVESTISSEZ EN TOUTE SECURITE</h2>
                <div className="buttons">
                    <div className="horizontal-buttons">
                        <YellowButton name="CHEVAUX A VENDRE" navigation="/ventechevaux" style={styles} className1="home-button"/>
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
                  <Row className="bootstrap-horse-list">
                    {totalcheval.map(horse => {
                      return (
                        (horse.etat === '0') &&
                        <Col sm={12} md={6} lg={4} xl={3}>
                          <HorseItem
                            key={horse.id}
                            id={horse.id}
                            image={horse.image}
                            name={horse.name}
                            documents={horse.documents}
                            price={horse.prix}
                            prix="Prix :"
                            ether="ether"
                            bouton="ACHETER"
                            buyHorse={() => acheterCheval(horse)}
                          />
                        </Col>
                      )
                    })}
                  </Row>                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
