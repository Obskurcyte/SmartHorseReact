import React from "react";
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import './PartsEtSaillies.css';
import YellowButton from "../../home/components/YellowButton";
import {Table} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';

const PartsEtSaillies = props => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    return (
        <div>
            <AccountNavBar />
            <div className="horse-ccontainer" style={{backgroundColor: Colors.accentColor}}>
              <div className="title-parts">
                <h5 className="horse-title">{props.titre}</h5>
                <div className="searchbar">
                    <input type="text" placeholder="RECHERCHER"/>
                </div>
              </div>
                <div className="parts-container">
                  <div>
                    <div className="parts-title">
                        <p>{props.name}</p>
                        <p>{props.liste}</p>
                    </div>

                    <div className="container3">
                        <div className="part-card">
                            <img src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/26/node_185401/12093737/public/2020/08/26/B9724385098Z.1_20200826102530_000%2BG86GI3HG5.1-0.jpg?itok=vrETSARE1598439430" alt="cheval"/>
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
                          <th>Vendre ma part</th>
                          <th>Prix</th>
                          <th>Saillie 2021</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>27</td>
                          <td>  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></td>
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
                      <p>{props.name}</p>
                      <p>{props.liste}</p>
                    </div>

                    <div className="container3">
                      <div className="part-card">
                        <img src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/08/26/node_185401/12093737/public/2020/08/26/B9724385098Z.1_20200826102530_000%2BG86GI3HG5.1-0.jpg?itok=vrETSARE1598439430" alt="cheval"/>
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
                          <th>Vendre ma part</th>
                          <th>Prix</th>
                          <th>Saillie 2021</th>
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

export default PartsEtSaillies;
