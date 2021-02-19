import React, {useEffect} from 'react';
import Colors from "../../shared/constants/Colors";
import Input from "../../shared/components/Input";
import NavBar from "../../shared/components/NavBar";
import './ConnexionPage.css';
import {Form} from 'react-bootstrap';
import Button from "../../FormElements/Button";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import * as authAction from '../../store/actions/auth-actions';
import {useHistory} from 'react-router-dom';

const ConnexionPage = props => {


    const SigninSchema = Yup.object().shape({
        email: Yup.string().email('Cet email est invalide').required('Ce champ est requis'),
        password: Yup.string()
            .required('Ce champ est requis')
            .min(6, 'Le mot de passe doit contenir au minimum 6 caractères')
    });

    const router = useHistory();

    const style = {
        marginBottom: '5%'
    }
    const styles2 = {
        width: 350,
        marginTop: 20,
    }

    const styles3 = {
        marginBottom: 20,
        marginTop: 10
    }


    const initialValues = {
        email: '',
        password: ''
    }

    const dispatch = useDispatch();


  const token = useSelector(state => state.users.token);
  console.log(token)

  const message1 = useSelector(state => state.users.message1);
  const message2 = useSelector(state => state.users.message2);
  console.log(message2)

    return(
        <div>
            <NavBar />
            <div className="connexion-container" style={{backgroundColor: Colors.accentColor}}>
                <h1 className="title">CONNEXION SMARTHORSE</h1>
                        <div className="connexion">
                            <div className="connexion-form">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={SigninSchema}
                                    onSubmit={async (values) => {
                                        await dispatch(authAction.login(values.email, values.password))
                                        router.push('/meschevaux')
                                    }}
                                    /*  const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDH1AN6NL7ISd5iZbANXjQLHzfHf9nCrJA', {
                                        method:  'POST',
                                        headers: {
                                          'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                          email: values.email,
                                          password: values.password,
                                          returnSecureToken: true,
                                        })
                                      })
                                      const resData = await response.json();

                                     const errors = [];
                                        if (!response.ok) {
                                            const errorId = await response.json();
                                            console.log(errorId.error.message);
                                            let message = 'Oups ! Une erreur est survenue';
                                            if (errorId.error.message === 'EMAIL_NOT_FOUND') {
                                              message = "Cet email n'a pas été trouvé"
                                              errors.push(message)
                                              message1.push(message)
                                            } else if (resData.error.message === 'INVALID_PASSWORD') {
                                              message = "Ce mot de passe n'est pas valide"
                                              message2.push(message)
                                              errors.push(message)
                                              console.log(message2)
                                            }
                                            throw new Error(message);
                                        }
                                       // const resData = await response.json();
                                       // console.log(resData)
                                      if (errors.length === 0) {
                                        token.push(resData.idToken)
                                        console.log(resData.idToken);
                                        window.location.href = '/historique'
                                      }
                                    }
                                    }

                                     */

                                >
                                    {( props ) => (

                                <form>
                                    <input
                                        name="email"
                                        placeholder="EMAIL"
                                        style={styles2}
                                        onChange={props.handleChange('email')}
                                        type="email"
                                        value={props.values.email}
                                    />
                                    {message1 !== '' ? (
                                        <div className="forms-error">{message1}</div>
                                    ) : null}
                                    <Input
                                        name="password"
                                        placeholder="MOT DE PASSE"
                                        style={styles2}
                                        onChange={props.handleChange('password')}
                                        inputtype='input'
                                        type="password"
                                        value={props.values.password}
                                    />
                                    {message2 !== '' ? (
                                        <div className="forms-error">{message2}</div>
                                    ) : null}
                                    <div className="connexion-submit">
                                        <Button style={style} type="submit" disabled={!props.isValid} onClick={props.handleSubmit}>CONNEXION</Button>
                                        <Button to="/inscription">INSCRIPTION</Button>
                                    </div>
                                    <p className="forgotten-password"><a href="">Mot de passe oublié</a></p>
                                </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
            </div>
        </div>
    )
};

export default ConnexionPage;
