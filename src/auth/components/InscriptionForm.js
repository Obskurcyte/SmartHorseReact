import React from 'react';
import Input from "../../shared/components/Input";
import './InscriptionForm.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const InscriptionForm = props => {

    const SignupSchema =
        Yup.object().shape({
            nom: Yup.string().required('Ce champ est requis'),
            prenom: Yup.string().required('Ce champ est requis'),
            email: Yup.string().email('Cet email est invalide').required('Ce champ est requis'),
            confirmedemail: Yup.string().email('Cet email est invalide').required('Ce champ est requis'),
            password: Yup.string().required('Ce champ est requis').min(6, 'Le mot de passe doit contenir au minimum 6 caractères'),
            confirmedpassword: Yup.string().required('Ce champ est requis').min(6, 'Le mot de passe doit contenir au minimum 6 caractères'),
        });


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

    return (
        <div className="inscription-container">
            <Formik
                initialValues={initialValues}
                validateOnBlur={false}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    console.log(values)
                 try {
                     const response =  await fetch('http://localhost:5000/api/users/signup', {
                         method: 'POST',
                         headers: {
                             'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(values)
                     });

                     const resData = await response.json();
                     console.log(resData)
                 } catch (err) {
                     console.log(err)
                 }
                }}
            >

                {( props ) => (
                <form className="inscription-form">

                <div className="colonne-1">
                    <Input
                        placeholder="NOM (*)"
                        name="nom"
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
                    {props.errors.email ? (
                        <div className="forms-error">{props.errors.email}</div>
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
                        onChange={props.handleChange('activity')}
                        value={props.values.activity}
                        style={styles}
                    />
                    <Input
                        placeholder="DENOMINATION"
                        name="denomination"
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
                        type="number"
                        onChange={props.handleChange('phone')}
                        value={props.values.phone}
                        name="email"
                        style={styles}
                    />
                    <Input
                        placeholder="ADRESSE"
                        type="email"
                        value={props.values.adress}
                        onChange={props.handleChange('adresse')}
                        name="adress"
                        style={styles}
                    />
                    <Input
                        placeholder="VILLE"
                        onChange={props.handleChange('city')}
                        value={props.values.city}
                        name="city"
                        style={styles}
                    />
                </div>
                </form>
                )}
            </Formik>
        </div>
    )
};

export default InscriptionForm;