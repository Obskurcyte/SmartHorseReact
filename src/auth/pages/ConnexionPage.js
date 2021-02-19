import React from 'react';
import { Formik } from 'formik';
import Colors from "../shared/constants/Colors";
import Input from "../shared/components/Input";
import YellowButton from "../home/components/YellowButton";
import NavBar from "../shared/components/NavBar";
import './ConnexionPage.css';
import {Form} from 'react-bootstrap';


const ConnexionPage = props => {

    const styles = {
        width: 350,
        marginBottom: 20
    }

    const styles2 = {
        width: 350,
        marginBottom: 20,
        paddingLeft: 120,
        marginTop: 20
    }

    const styles3 = {
        marginBottom: 20
    }
    return(
        <div>
            <NavBar />
            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">CONNEXION SMARTHORSE</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Ce champ est requis';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Entrez un email valide';
                        }
                        return errors;
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,

                    }) => (
                        <div className="connexion">
                            <div className="connexion-form">
                                <form action="" onSubmit={handleSubmit}>
                                    <Input
                                        placeholder="EMAIL"
                                        type="email"
                                        name="email"
                                        style={styles}
                                        errorText="Entrez un email valide"/>
                                    {errors.email}
                                    <Input
                                        placeholder="MOT DE PASSE"
                                        style={styles}
                                        type="password"
                                        name="password"
                                    />
                                    <Form.Group controlId="formBasicCheckbox" >
                                        <Form.Check type="checkbox" label="SE SOUVENIR DE MOI" style={styles3}/>
                                    </Form.Group>
                                    <div className="connexion-submit">
                                        <YellowButton name="CONNEXION" style={styles2}/>
                                        <YellowButton name="INSCRIPTION" style={styles2} navigation="/inscription"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
};

export default ConnexionPage;