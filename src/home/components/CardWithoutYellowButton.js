import React from 'react';
import {Card} from "react-bootstrap";


const CardWithoutYellowButton = props => {
    return (
        <Card style={{ width: '18rem' }} className="button-card">
            <Card.Title style={{margin: 20, textAlign: 'center'}}>{props.title}</Card.Title>
            <Card.Img variant="top" src={props.source} style={{height: 180}}/>
            <Card.Body>
                <Card.Text><a href="/">{props.infos}</a></Card.Text>
                <Card.Text><a href="/">Infos SIRE</a></Card.Text>
                <Card.Text><span>{props.price}</span></Card.Text>
            </Card.Body>
        </Card>
    )
};

export default CardWithoutYellowButton;