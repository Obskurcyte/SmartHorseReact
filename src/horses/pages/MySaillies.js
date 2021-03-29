import React from "react";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import '../components/PartsEtSaillies.css';
import YellowButton from "../../home/components/YellowButton";
import {Table} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';

const MySaillies = props => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <AccountNavBar />
      <div className="horse-ccontainer" style={{backgroundColor: Colors.accentColor}}>
        <div className="title-parts">
          <h5 className="horse-title">MES SAILLIES</h5>
          <div className="searchbar">
            <input type="text" placeholder="RECHERCHER"/>
          </div>
        </div>
        <div className="parts-container">
          <div>
            <div className="parts-title">
              <p>DUCCIA DU MONT</p>
              <p>Liste de mes saillies</p>
            </div>

            <div className="container3">
              <div className="part-card">
                <img src="https://lemagdesanimaux.ouest-france.fr/images/dossiers/2019-06/cheval-073016.jpg" alt=""/>
             <div className="part-card-inner">
                  <p><a href="/">Infos Etalon</a></p>
                  <p><a href="/">Infos SIRE</a></p>
                  <p><a href="/">Liste Porteurs de Part</a></p>
                </div>
              </div>
              <Table striped bordered hover>
                <thead>
                <tr>
                  <th>N° de part</th>
                  <th>Vendre ma saillie</th>
                  <th>Prix</th>
                  <th>Poulain vivant</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>27</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                <tr>
                  <td>28</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                <tr>
                  <td>29</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <YellowButton name="VALIDER MODIFICATIONS" className1="buttton" className="bouton1"/>
            </div>
          </div>



          <div>
            <div className="parts-title">
              <p>ESCARMOUCHE</p>
              <p>Liste de mes saillies</p>
            </div>

            <div className="container3">
              <div className="part-card">
                <img src="https://cheval-partenaire.fr/wp-content/uploads/2019/04/shutterstock_609475808-700x500.jpg" alt=""/>
                <div className="part-card-inner">
                  <p><a href="/">Infos Etalon</a></p>
                  <p><a href="/">Infos SIRE</a></p>
                  <p><a href="/">Liste Porteurs de Part</a></p>
                </div>
              </div>
              <Table striped bordered hover>
                <thead>
                <tr>
                  <th>N° de part</th>
                  <th>Vendre ma saillie</th>
                  <th>Prix</th>
                  <th>Poulain Vivant</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>16</td>
                  <td>  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                <tr>
                  <td>25</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    <input type="text" placeholder="Prix" style={{width: '100%'}}/>
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <YellowButton name="VALIDER MODIFICATIONS" className1="buttton" className="bouton1"/>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default MySaillies;
