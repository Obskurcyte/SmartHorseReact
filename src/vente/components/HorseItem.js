import React from "react";
import './HorseItem.css';
import {Card} from "react-bootstrap";
import Button from "../../FormElements/Button";
import {useDispatch} from "react-redux";
import * as HorseActions from "../../store/actions/onsale-horses"




const HorseItem = props => {


    return (
        <li className="horse-item">
            <Card style={{ width: '18rem' }} className={props.className}>
                <Card.Title style={{margin: 20, textAlign: 'center'}}>{props.name}</Card.Title>
                <Card.Img variant="top" src={props.image} style={{height: 180}}/>
                <Card.Body>
                      <Card.Text><a href="/">DOCUMENTS SIRE</a></Card.Text>
                    <Card.Text><a href="/">Infos SIRE</a></Card.Text>
                    <Card.Text><span style={{fontWeight: 'bold'}}>{props.price}</span></Card.Text>
                </Card.Body>
                <Button style={props.style} onClick={props.buyHorse}>{props.bouton}</Button>
            </Card>
        </li>
    )
};

export default HorseItem
