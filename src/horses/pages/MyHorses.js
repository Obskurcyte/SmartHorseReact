import React, {useCallback, useEffect} from "react";
import ExamplePage from "../components/ExamplePage";
import {useDispatch, useSelector} from "react-redux";
import * as getUserActions from "../../store/actions/users-actions";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import CustomCard from "../../home/components/CustomCard";
import HorsesList from "../../vente/components/HorsesList";

const MyHorses = props => {

  const dispatch = useDispatch();

  const token = useSelector(state => state.users.token);
  console.log(token);


  useEffect( () => {
     dispatch(getUserActions.getUser(token))
  }, [dispatch]);

  const email = useSelector(state => state.users.email)
  console.log(email);

  const id = useSelector(state => state.users.id)
  console.log(id)


  useEffect( () => {
    if (email) {
      dispatch(getUserActions.getHorsesByUser(email))
    }
  }, [dispatch, email]);


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

  const ownedHorses = useSelector(state => state.users.ownedHorses)
  console.log(ownedHorses)

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
                  {/* <HorsesList items={ownedHorses} bouton="METTRE EN VENTE"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
};

export default MyHorses;
