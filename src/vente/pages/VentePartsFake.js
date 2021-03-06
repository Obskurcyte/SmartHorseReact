import React from "react";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import '../../horses/components/PartsEtSaillies.css';
import YellowButton from "../../home/components/YellowButton";
import {Table} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import NavBarUnderline from "../../shared/components/NavBarUnderline";
import './VenteSaillies.css'

const VentePartsFake = props => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <AccountNavBar />
      <div className="horse-ccontainer">
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
        <div className="parts-container">

          <div>
            <div className="parts-title">
              <p>GLORANIE DES NOES</p>
            </div>

            <div className="container3">
              <div className="part-card">
                <img src="https://blog.defi-ecologique.com/wp-content/uploads/cheval-curly-hypoallergenique-476x249@2x.jpg" alt=""/>
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
                  <th>Saillie 2021</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>16</td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                  <td>
                    40 000
                  </td>
                  <td><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
                </tr>
                </tbody>
              </Table>
            </div>
            <div>
              <YellowButton name="ACHETER" className1="buttton" className="bouton1"/>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default VentePartsFake;
