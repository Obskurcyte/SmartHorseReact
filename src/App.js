import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from "./home/pages/HomePage";
import ConnexionPage from "./auth/pages/ConnexionPage";
import InscriptionPage from "./auth/pages/InscriptionPage";
import InfosPage from "./compte/InfosPage";
import NotificationPage from "./notifications/NotificationPage";
import OrdresPage from "./ordresachat/pages/OrdresPage";
import HistoriquePage from "./ordresachat/pages/HistoriquePage";
import MyHorses from "./horses/pages/MyHorses";
import MyJuments from "./horses/pages/MyJuments";
import MyParts from "./horses/pages/MyParts";
import MySaillies from "./horses/pages/MySaillies";
import VenteChevaux from "./vente/pages/VenteChevaux";
import VenteJuments from "./vente/pages/VenteJuments";
import VenteParts from "./vente/pages/VenteParts";
import VenteSaillies from "./vente/pages/VenteSaillies";
import userReducer from "./store/reducers/user-reducer";
import onSaleHorseReducer from "./store/reducers/onsale-horses"
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from "redux";


const App = () => {


  const rootReducer =combineReducers({
    users: userReducer,
    onSaleHorse : onSaleHorseReducer
  })

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  let routes;


    routes = (
        <Provider store={store}>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/connexion" exact component={ConnexionPage} />
          <Route path="/inscription" exact component={InscriptionPage} />
          <Route path="/infos" exact component={InfosPage} />
          <Route path="/notifications" exact component={NotificationPage} />
          <Route path="/ordres" exact component={OrdresPage} />
          <Route path="/historique" exact component={HistoriquePage} />
          <Route path="/meschevaux" exact component={MyHorses} />
          <Route path="/mesjuments" exact component={MyJuments} />
          <Route path="/mesparts" exact component={MyParts} />
          <Route path="/messaillies" exact component={MySaillies} />
          <Route path="/ventechevaux" exact component={VenteChevaux} />
          <Route path="/ventejuments" exact component={VenteJuments} />
          <Route path="/venteparts" exact component={VenteParts} />
          <Route path="/ventesaillies" exact component={VenteSaillies} />
        </React.Fragment>
        </Provider>

    );


  return (

        <Router>
          <main>
            <Switch>
              {routes}
            </Switch>
          </main>
        </Router>
  );
}

export default App;
