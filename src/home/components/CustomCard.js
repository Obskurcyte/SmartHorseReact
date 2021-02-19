import React from 'react';
import {Card} from "react-bootstrap";
import YellowButton from "./YellowButton";

const CustomCard = props => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title style={{margin: 20, textAlign: 'center'}}>{props.title}</Card.Title>
            <Card.Img variant="top" src={props.source} style={{height: 180}}/>
            <Card.Body>
                <Card.Text><a href="/">Infos étalons</a></Card.Text>
                <Card.Text><a href="/">Infos SIRE</a></Card.Text>
                <Card.Text><span style={{fontWeight: 'bold'}}>{props.price}</span></Card.Text>
            </Card.Body>
            <YellowButton name="FAIRE UNE PROPOSITION" navigation="/" style={{textAlign: 'center'}}/>
        </Card>
    )
};

export default CustomCard;