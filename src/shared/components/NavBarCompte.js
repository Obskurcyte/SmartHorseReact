import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/Logo_V2.jpeg';
import './NavBar.css';
import Colors from "../constants/Colors";

const NavBarCompte = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"><img src={logo} alt="cheval" className="nav-logo image-logo"/></Navbar.Brand>
        </Navbar>
    )
};

export default NavBarCompte;
