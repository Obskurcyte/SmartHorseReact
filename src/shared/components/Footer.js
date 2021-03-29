import React from "react";
import Colors from "../constants/Colors";
import Input from "./Input";
import './Footer.css';
import {useForm} from "../hooks/form-hook";


const Footer = props => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);
    return (
        <div className="footer-container" style={{backgroundColor: Colors.primaryColor}}>
            <div className="contact-container">
                <h1>Nous contacter</h1>
                <p>SmartHorse</p>
                <p>Adresse CODEP Ville</p>
                <p>contact@smarthorse.fr</p>
                <p>+ 33 6 67 76 03 92</p>
            </div>
            <div className="contact-form">
                <form action="">
                    <Input
                        inputtype="input"
                        type="text"
                        placeholder="NOM"
                        id="NOM"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="text"
                        id="PRENOM"
                        placeholder="PRENOM"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="text"
                        id="ADRESSE"
                        placeholder="ADRESSE"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="email"
                        id="EMAIL"
                        placeholder="EMAIL"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="text"
                        id="TELEPHONE"
                        placeholder="TELEPHONE"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="text"
                        id="OBJET"
                        placeholder="OBJET"
                        onInput={inputHandler}
                        style={{marginBottom: 7}}
                    />
                    <Input
                        inputtype="input"
                        type="text"
                        id="MESSAGE"
                        placeholder="VOTRE MESSAGE ICI"
                        onInput={inputHandler}
                        style={{marginBottom: 7, height: 100}}
                    />
                    <button className="contact">ENVOYER</button>
                </form>
            </div>

        </div>
    )
}

export default Footer;
