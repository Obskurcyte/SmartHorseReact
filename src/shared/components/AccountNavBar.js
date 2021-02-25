import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import logo from "../../assets/Logo_V2.jpeg";
import Colors from "../constants/Colors";
import './AccountNavBar.css';


const AccountNavBar = props => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"><img src={logo} alt="cheval" className="nav-logo image-logo"/></Navbar.Brand>
            <Nav>
                <div className="nav-horse">
                    <Nav.Link href="/meschevaux" className="nav-element">MES CHEVAUX</Nav.Link>
                    <Nav.Link href="/mesparts" className="nav-element">MES PARTS</Nav.Link>
                    <Nav.Link href="/messaillies" className="nav-element">MES SAILLIES</Nav.Link>
                    <Nav.Link href="/mesjuments">MES JUMENTS</Nav.Link>
                </div>
                <Nav.Link href="/ventechevaux" className="offre-btn" style={{backgroundColor: Colors.primaryColor}}>OFFRES DE VENTE</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default AccountNavBar;
