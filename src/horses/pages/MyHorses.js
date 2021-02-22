import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import CustomCard from "../../home/components/CustomCard";
import HorsesList from "../../vente/components/HorsesList";
import {Formik} from "formik";
import Web3 from "web3";
import {abi} from "../../abi";
import Button from "../../FormElements/Button";
import Cheval from "../../models/horse";
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import * as onSaleHorseActions from "../../store/actions/onsale-horses";
import "./MyHorses.css"

const MyHorses = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const cardHorse = document.querySelector('.container-horses');

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    cardHorse.style.opacity = 0.4
  };

  const token = useSelector(state => state.users.token);
  console.log(token);


  /* useEffect( () => {
     dispatch(getUserActions.getUser(token))
  }, [dispatch]);

   */

  const email = useSelector(state => state.users.email)
  console.log(email);

  const id = useSelector(state => state.users.id)
  console.log(id)


 /* useEffect( () => {
    if (email) {
      dispatch(getUserActions.getHorsesByUser(email))
    }
  }, [dispatch, email]);

  */


 /* const getUser = async () => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDH1AN6NL7ISd5iZbANXjQLHzfHf9nCrJA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idToken: token
      })
    })
    console.log(response)
  };

  console.log(getUser(token))


  */

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
      const contrat = new web3.eth.Contract(abi, '0x94dce870cc5055C3745f65aC49b741A58af7e33A', {})

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
        totalchevaux.push(new Cheval(chevaux[data][0], chevaux[data][1], chevaux[data][4], chevaux[data][5], chevaux[data][3], chevaux[data][2]))
      }
      // console.log(totalchevaux)
      setTotalCheval(totalchevaux)
      console.log(totalchevaux)
      console.log(totalcheval)
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
          .send(compteConnecte)
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
        .send({from: compteConnecte, value: Web3.utils.toWei(cheval.prix)})
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

  console.log('totalcheval', totalcheval);

  const myhorse = totalcheval.filter(cheval => cheval.proprietaire === compteConnecte)



  return (
        <div>
          <div>
            <AccountNavBar />
            <div className="notification-container" style={{backgroundColor: Colors.accentColor}}>
              <h5 className="horse-title">{props.titre}</h5>
              <div className="searchbar">
                <input type="text" placeholder="RECHERCHER"/>
              </div>
              <div className="my-horses">
                <div className="cards-container">
                  <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography>
                            <div className="popper-container">
                              <h5 className="popper-title">Mettre en vente</h5>
                              <div className="popper-undercontainer">
                                <Formik
                                  initialValues={{ prix: '' }}
                                  onSubmit={(values) => {

                                  }}
                                >

                                <p className="popper-prix">Prix : </p>
                                <input type="text" placeholder="Prix. ex: 10eth" className="input-popper"/>
                                </Formik>
                              </div>
                              <div className="bouton-popper">
                                <Button>Vendre</Button>
                              </div>
                            </div>
                          </Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                  <HorsesList items={myhorse} bouton="METTRE EN VENTE" handleClick={handleClick('top')}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
};

export default MyHorses;
