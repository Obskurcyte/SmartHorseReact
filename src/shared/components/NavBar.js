import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/Logo_V2.jpeg';
import './NavBar.css';
import Colors from "../constants/Colors";

const NavBar = () => {
    return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src={logo} alt="cheval" className="nav-logo image-logo"/></Navbar.Brand>
        <Nav className="nav-links">
            <Nav.Link href="/connexion" className="connexion-btn" style={{backgroundColor: Colors.primaryColor}}>CONNEXION</Nav.Link>
        </Nav>
    </Navbar>
    )
};

export default NavBar;