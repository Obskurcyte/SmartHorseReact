import React from 'react';
import Colors from "../shared/constants/Colors";
import './InscriptionPage.css';
import NavBar from "../shared/components/NavBar";
import Input from "../shared/components/Input";
import {Form} from "react-bootstrap";
import YellowButton from "../home/components/YellowButton";

const InscriptionPage = props => {
    const styles = {
        marginTop: 10,
        width: 300,
        marginRight: 40
    }

    const styles2 = {
        width: 350,
        textAlign: 'center',
        marginLeft: 340
    }

    return (
        <div>
            <NavBar />
            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">INSCRIPTION SMARTHORSE</h1>
                <div className="inscription-container">
                    <div className="colonne-1">
                        <Input
                            placeholder="NOM"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="EMAIL"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="MOT DE PASSE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="SECTEUR D'ACTIVITE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="DENOMINATION"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="CODE POSTAL"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                    </div>
                    <div className="colonne-2">
                        <Input
                            placeholder="PRENOM"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="CONFIRMER EMAIL"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="CONFIRMER MOT DE PASSE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="TELEPHONE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="ADRESSE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                        <Input
                            placeholder="VILLE"
                            type="email"
                            name="email"
                            style={styles}
                            errorText="Entrez un email valide"/>
                    </div>
                </div>
                <Form.Group controlId="formBasicCheckbox" style={{marginTop: 340, marginLeft: 260}}>
                    <Form.Check type="checkbox" label="J'AI LU ET APPROUVE LES CONDITIONS GENERALES DE VENTE"/>
                </Form.Group>
                <YellowButton name="S'INSCRIRE" style={styles2}/>
            </div>
        </div>
    )
};

export default InscriptionPage;