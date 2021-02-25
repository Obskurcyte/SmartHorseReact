import React, {useEffect, useState} from "react";
import * as onSaleHorseActions from '../../store/actions/onsale-horses';
import {useDispatch} from "react-redux";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import './VenteChevaux.css'
import Web3 from "web3";
import {abi} from "../../abi";
import Cheval from "../../models/horse";
import HorseItem from "../components/HorseItem";
import {Row, Col} from "react-bootstrap";

const VenteChevaux = props => {


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
            <AccountNavBar />
          <div className="container-horse" style={{backgroundColor: Colors.accentColor}}>
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
                  </Row>
                </div>

                {/*   <HorsesList items={totalcheval} bouton="ACHETER"/> */}

            </div>
        </div>
    )
};

export default VenteChevaux
