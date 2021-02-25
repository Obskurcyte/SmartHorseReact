import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/Logo_V2.jpeg';
import './NavBar.css';
import Colors from "../constants/Colors";

const NavBar = () => {
    return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src={logo} alt="cheval" className="nav-logo image-logo"/></Navbar.Brand>
        <div className="nav-horse">
        <Nav.Link href="/meschevaux" className="nav-element">MES CHEVAUX</Nav.Link>
        <Nav.Link href="/mesparts" className="nav-element">MES PARTS</Nav.Link>
        <Nav.Link href="/messaillies" className="nav-element">MES SAILLIES</Nav.Link>
        <Nav.Link href="/mesjuments">MES JUMENTS</Nav.Link>
      </div>
    </Navbar>
    )
};

export default NavBar;
