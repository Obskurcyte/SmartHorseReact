import React, { useEffect, useState} from "react";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import HorsesList from "../../vente/components/HorsesList";
import {Formik, replace} from "formik";
import Web3 from "web3";
import {abi} from "../../abi";
import Cheval from "../../models/horse";
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import "./MyHorses.css";
import {useHistory} from "react-router-dom";
import Button from "../../FormElements/Button";
import {Col, Row} from "react-bootstrap";
import HorseItem from "../../vente/components/HorseItem";

const MyHorses = props => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const cardHorse = document.querySelector('.blur');

  let history = useHistory()
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    if (!open) {
      cardHorse.style.opacity = 0.4
    }
    if (open) {
      cardHorse.style.opacity = 1
    }

  };

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
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
      const contrat = new web3.eth.Contract(abi, '0xd25D41918eBfC88eF7c46724948667b74E81A97E', {})

      const accounts = await web3.eth.getAccounts()

      setCompteConnecte(accounts[0])
      setState({contrat: contrat})

      const total = await contrat.methods.totalCheval().call();
      console.log('total', total)
      const chevaux = [];
      const totalchevaux = [];

      for (let i = 0; i < total; i++) {
        const cheval = await contrat.methods.chevalIndex(i).call();
        chevaux.push(cheval)
      }

      console.log(chevaux)

      for (let data in chevaux) {
        totalchevaux.push(new Cheval(chevaux[data][0], chevaux[data][1], Web3.utils.fromWei(chevaux[data][4], 'ether'), chevaux[data][5], chevaux[data][3], chevaux[data][2]))
      }
      // console.log(totalchevaux)
      setTotalCheval(totalchevaux)

      const web3ws = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545'));
      const contratWs = new web3ws.eth.Contract(abi, '0xd25D41918eBfC88eF7c46724948667b74E81A97E', {});
      contratWs.events.Vente(null, (err, response) => {
        if (err) {
          console.warn('websocket', err)
          return;
        }

        const values = response.returnValues;
        const cheval = totalcheval.find(cheval => cheval.id === +values.id)
        if (cheval) {
          cheval.proprietaire = values.cessionnaire;
          cheval.etat = "1";
          mettreAJourChevaux(cheval)
        }

        console.log('websocket response', response)
      })
    }


    Provider().then(() => console.log())


  }, [compteConnecte]);


  const mettreAJourChevaux = async (chev) => {
    const chevaux = totalcheval;
    const index = chevaux.findIndex(cheval => cheval.id === chev.id)
    chevaux[index] = chev
    setTotalCheval(chevaux)
  }

  const mettreChevalEnVente = cheval => {
    return () => {
      if (state.contrat) {
        const contrat = state.contrat;
        contrat.methods.mettreChevalEnVente(cheval.id, Web3.utils.toWei(cheval.prix))
          .send({from: compteConnecte})
          .on('transactionHash', hash => {
            //transaction prise en compte par le provider
            console.log('hash', hash);
          })
          // transaction traitée
          .on('confirmation', no => {
            console.log('transaction ok')
          })
          .on('error', erreur => {
            console.log(erreur)
          })
          .then((data) => {
            console.log(data)
            cheval.etat = "0";
            mettreAJourChevaux(cheval);
          })
      }
    }
  }


  const myhorse = totalcheval.filter(cheval => cheval.proprietaire === compteConnecte)

  console.log(myhorse)
  console.log(totalcheval)
  console.log(totalcheval.filter(cheval => cheval.proprietaire === compteConnecte))
  console.log(compteConnecte)

  return (
    <div>
      <div>
        <AccountNavBar />
        <div className="container-horse" style={{backgroundColor: Colors.accentColor}}>
          <h5 className="horse-title">{props.titre}</h5>
          <div className="searchbar">
            <input type="text" placeholder="RECHERCHER"/>
          </div>
          <div className="chevaux">



            <Row className="bootstrap-horse-list blur" >
              {totalcheval.filter(cheval => cheval.proprietaire === compteConnecte)
                .map((cheval, index) => {
                  const initialValues = {
                    prix: ''
                  }
                  return (
                    (cheval.etat === '2') &&
                    <Col sm={12} md={6} lg={4} xl={3}>
                      <HorseItem
                        key={cheval.id}
                        id={cheval.id}
                        image={cheval.image}
                        name={cheval.name}
                        documents={cheval.documents}
                        bouton="METTRE EN VENTE"
                        buyHorse={handleClick('top')}
                      />
                      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({TransitionProps}) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                              <Typography>
                                <div className="popper-container">
                                  <h5 className="popper-title">Mettre en vente</h5>
                                  <div className="popper-undercontainer">
                                    <Formik
                                      initialValues={initialValues}
                                      onSubmit={async values => {
                                        cheval.prix = values.prix
                                        mettreAJourChevaux(cheval).then(mettreChevalEnVente(cheval))
                                      }}
                                    >
                                      {(props) => (
                                        <div>
                                          <p>{cheval.prix}</p>
                                          <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                            <p>Prix: </p>
                                            <input
                                              type="text"
                                              placeholder="Prix. ex: 10eth"
                                              className="input-popper"
                                              value={props.values.prix}
                                              onChange={props.handleChange('prix')}/>
                                          </div>
                                          <div className="bouton-popper">
                                            <Button type="submit"
                                                    onClick={() => props.handleSubmit()}>Vendre</Button>
                                          </div>
                                        </div>
                                      )}
                                    </Formik>


                                  </div>

                                </div>
                              </Typography>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    </Col>
                  )
                })}
            </Row>

          </div>
        </div>
      </div>
    </div>
  )
};

export default MyHorses;
