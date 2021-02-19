import React, {useEffect, useState} from 'react';
import Colors from "../../shared/constants/Colors";
import NavBar from "../../shared/components/NavBar";
import {Form} from "react-bootstrap";
import InscriptionForm from "../components/InscriptionForm";
import './InscriptionPage.css';
import Button from "../../FormElements/Button";
import * as Yup from "yup";
import {Formik} from "formik";
import Input from "../../shared/components/Input";
import * as userActions from '../../store/actions/users-actions.js'
import * as authActions from '../../store/actions/auth-actions'
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import * as admin from 'firebase-admin';
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const InscriptionPage = props => {

    const styles2 = {
        width: 350,
        textAlign: 'center',
        marginLeft: 340,
        position: 'absolute',
        top: '140%',
        transform: 'translate(-50%, -50%)'
    }

   /* const SignupSchema =
        Yup.object().shape({
            nom: Yup.string().required('Ce champ est requis'),
            prenom: Yup.string().required('Ce champ est requis'),
            email: Yup.string().email('Cet email est invalide').required('Ce champ est requis'),
            confirmedemail: Yup.string().email('Cet email est invalide').required('Ce champ est requis'),
            password: Yup.string().required('Ce champ est requis').min(6, 'Le mot de passe doit contenir au minimum 6 caractères'),
            confirmedpassword: Yup.string().required('Ce champ est requis').min(6, 'Le mot de passe doit contenir au minimum 6 caractères'),
        });
    */

    const styles = {
        marginTop: 10,
        width: 300,
        marginRight: 40,
    }

    const initialValues = {
        nom:'',
        prenom:'',
        email: '',
        confirmedemail: '',
        password: '',
        confirmedpassword: '',
        activity: '',
        phone: '',
        denomination: '',
        adress: '',
        postalcode: '',
        city:''
    }

    const router = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);
    const dispatch = useDispatch();
    const errorHandler = () => {
        setIsError(null)
    }

    const message1 = []
    return (
        <div>
            <NavBar />
            <React.Fragment>

            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">INSCRIPTION SMARTHORSE</h1>


                <div className="inscription-container">
                    <Formik
                        initialValues={initialValues}
                       // validationSchema={SignupSchema}
                        onSubmit={ async (values) => {
                          await dispatch(userActions.createUser(
                            values.email,
                            values.name,
                            values.firstname,
                            values.phone,
                            values.activity,
                            values.denomination,
                            values.adress,
                            values.postalcode,
                            values.city
                          ))
                          await dispatch(authActions.signup(values.email, values.password))
                          router.push('/ventechevaux')
                          }
                            /* setIsLoading(false);
                                if(errors.length === 0) {
                                    window.location.href = "/historique";
                                }

                             */

                        }
                    >

                        {( props ) => (

                            <form className="inscription-form">
                                <div className="colonne-1">
                                    <Input
                                        placeholder="NOM (*)"
                                        name="nom"
                                        type="string"
                                        style={styles}
                                        onChange={props.handleChange('nom')}
                                        value={props.values.nom}
                                    />
                                    {props.errors.nom ? (
                                        <div className="forms-error">{props.errors.nom}</div>
                                    ) : null}
                                    <Input
                                        placeholder="EMAIL (*)"
                                        type="email"
                                        name="email"
                                        onChange={props.handleChange('email')}
                                        style={styles}
                                        value={props.values.email}
                                    />
                                    {message1.length !== 0 ? (
                                        <div className="forms-error">{message1[0]}</div>
                                    ) : null}
                                    <Input
                                        placeholder="MOT DE PASSE (*)"
                                        type="password"
                                        name="password"
                                        onChange={props.handleChange('password')}
                                        style={styles}
                                        value={props.values.password}
                                    />
                                    {props.errors.password ? (
                                        <div className="forms-error">{props.errors.password}</div>
                                    ) : null}
                                    <Input
                                        placeholder="SECTEUR D'ACTIVITE"
                                        name="activity"
                                        type="string"
                                        onChange={props.handleChange('activity')}
                                        value={props.values.activity}
                                        style={styles}
                                    />
                                    <Input
                                        placeholder="DENOMINATION"
                                        name="denomination"
                                        type="string"
                                        onChange={props.handleChange('denomination')}
                                        value={props.values.denomination}
                                        style={styles}
                                    />
                                    <Input
                                        placeholder="CODE POSTAL"
                                        name="postalcode"
                                        onChange={props.handleChange('postalcode')}
                                        style={styles}
                                        value={props.values.postalcode}
                                    />
                                </div>
                                <div className="colonne-2">
                                    <Input
                                        placeholder="PRENOM (*)"
                                        name="prenom"
                                        type="string"
                                        onChange={props.handleChange('prenom')}
                                        value={props.values.prenom}
                                        style={styles}
                                    />
                                    {props.errors.prenom ? (
                                        <div className="forms-error">{props.errors.prenom}</div>
                                    ) : null}
                                    <Input
                                        placeholder="CONFIRMER EMAIL (*)"
                                        type="email"
                                        name="confirmedemail"
                                        onChange={props.handleChange('confirmedemail')}
                                        value={props.values.confirmedemail}
                                        style={styles}
                                    />
                                    {props.errors.confirmedemail ? (
                                        <div className="forms-error">{props.errors.confirmedemail}</div>
                                    ) : <div style={{display: 'none', height: '10%'}}>Tout est ok</div>}
                                    <Input
                                        placeholder="CONFIRMER MOT DE PASSE (*)"
                                        id="confirmedpassword"
                                        type="password"
                                        name="confirmedpassword"
                                        onChange={props.handleChange('confirmedpassword')}
                                        value={props.values.confirmedpassword}
                                        style={styles}
                                    />
                                    {props.errors.confirmedpassword ? (
                                        <div className="forms-error">{props.errors.confirmedpassword}</div>
                                    ) : null}
                                    <Input
                                        placeholder="TELEPHONE"
                                        type="string"
                                        onChange={props.handleChange('phone')}
                                        value={props.values.phone}
                                        name="phone"
                                        style={styles}
                                    />
                                    <Input
                                        placeholder="ADRESSE"
                                        value={props.values.adress}
                                        onChange={props.handleChange('adress')}
                                        name="adress"
                                        type="string"
                                        style={styles}
                                    />
                                    <Input
                                        placeholder="VILLE"
                                        onChange={props.handleChange('city')}
                                        value={props.values.city}
                                        name="city"
                                        type="string"
                                        style={styles}
                                    />
                                </div>
                                <Form.Group controlId="formBasicCheckbox" className="form-center">
                                    <Form.Check type="checkbox" label="J'AI LU ET APPROUVE LES CONDITIONS GENERALES DE VENTE"/>
                                </Form.Group>
                                <Button type="submit" style={styles2} onClick={props.handleSubmit}>INSCRIPTION</Button>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>
            </React.Fragment>
        </div>
    )
};

export default InscriptionPage;
