import React, {useEffect, useState} from "react";
import * as onSaleHorseActions from '../../store/actions/onsale-horses';
import {useDispatch, useSelector} from "react-redux";
import HorsesList from "../components/HorsesList";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import './VenteChevaux.css'
import Web3 from "web3";
import {abi} from "../../abi";
import Cheval from "../../models/horse";

const VenteChevaux = props => {


  const [state, setState] = useState({
    contrat: undefined,
    compteConnecte: undefined,
  });

  const [totalcheval, setTotalCheval] = useState([])

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
      const contrat = new web3.eth.Contract(abi, '0x9D2C75FbB4BEC51b8B8A960A756604829179b1AD', {})


      const accounts = await web3.eth.getAccounts()
      setState({compteConnecte: accounts[0]})
      console.log(state.compteConnecte)
      console.log(accounts)
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
        totalchevaux.push(new Cheval(chevaux[data][0], chevaux[data][1], chevaux[data][2], chevaux[data][3]))
      }
      // console.log(totalchevaux)
      setTotalCheval(totalchevaux)
      console.log(totalchevaux)
      console.log(totalcheval)
    }

    Provider().then(() => console.log())

    console.log(totalcheval)
  }, []);

    const dispatch = useDispatch();

    const mettreAJourChevaux = (chev) => {
        const chevaux = totalcheval;
        const index = totalcheval.findIndex(cheval => cheval.id === chev.id)
        chevaux[index] = chev
        console.log(chevaux)
        setTotalCheval(chevaux)
    }

    const changerPrix = cheval => {
      return (e) => {
        cheval.prix = e.currentTarget.value;
        mettreAJourChevaux(cheval)
      }
     /* const input = document.querySelector('input');
      input.addEventListener('change', e => {
        cheval.prix = e.target.value
        console.log(e)
      })
      mettreAJourChevaux(cheval)
      */
  }
    useEffect(() => {
        dispatch(onSaleHorseActions.fetchOnSaleHorse())
    }, [dispatch]);

    const mettreChevalEnVente = cheval => {
      return () => {
          if (state.contrat) {
            const contrat = state.contrat;
            contrat.methods.mettreChevalEnVente(cheval.id, Web3.utils.toWei(cheval.prix))
              .send({from: state.compteConnecte})
              .on('transactionHash', hash => {
                //transaction prise en compte par le provider
              console.log('hash', hash);
            })
              // transaction traitée
              .on('confirmation', no => {
                console.log('conf', no)
              })
              .on('error', erreur => {
                console.log(erreur)
              })
              .then(data => console.log('valide', data))
          }
      }
  }

  const acheterCheval = (cheval) => {
      if (state.contrat) {
        const contrat = state.contrat;
        contrat.methods.acheterCheval(cheval.id)
          .send({from: state.compteConnecte, value: Web3.utils.toWei(cheval.prix)})
          .on('transactionHash', hash => {
          console.log('hash', hash)
        })
          .on('confirmation', no => {
            console.log('conf', no)
          })
          .on('error', erreur => {
          console.log('err', erreur)
        })
          .then(data => console.log('valide', data))
      }
  }


    const onSaleHorses = useSelector(state => state.onSaleHorse.onSaleHorses);

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

              <h1>Les chevaux</h1>

              {
                totalcheval.map((cheval, index) => {
                  return (
                    <div key={index}>
                    <p>{cheval.id} - {cheval.proprietaire}</p>
                      {
                        cheval.etat === etatCheval.EN_VENTE &&
                        <button onClick={() => acheterCheval(cheval)}>Acheter</button>
                      }
                    </div>
                  )
                })
              }

              <h1>Mes chevaux</h1>
              {
                <p>{state.compteConnecte}</p>
              }
              {
                totalcheval.filter(cheval => cheval.proprietaire === state.compteConnecte)
                  .map((cheval, index) => {
                    return (<div>
                      <p key={index}>{cheval.id} - {cheval.proprietaire} - {Web3.utils.fromWei(cheval.prix, 'ether')}</p>
                      <input type="text" onChange={() => changerPrix(cheval)} value={cheval.prix}/>
                      <button onClick={mettreChevalEnVente(cheval)}>Vendre</button>
                    </div>
                    )
                  })
              }

              {/*} <div className="cards-container">
                    <HorsesList items={onSaleHorses} bouton="ACHETER"/>
                </div>
                */}
            </div>
        </div>
    )
};

export default VenteChevaux
