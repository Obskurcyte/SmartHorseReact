import React from 'react';
import {Card} from "react-bootstrap";
import Button from "../../FormElements/Button";

const CustomCard = props => {

    return (
        <Card style={{ width: '18rem' }} className={props.className}>
            <Card.Title style={{margin: 20, textAlign: 'center'}}>{props.title}</Card.Title>
            <Card.Img variant="top" src={props.source} style={{height: 180}}/>
            <Card.Body>
                <Card.Text><a href="/">{props.infos}</a></Card.Text>
                <Card.Text><a href="/">Infos SIRE</a></Card.Text>
                <Card.Text><span style={{fontWeight: 'bold'}}>{props.price}</span></Card.Text>
            </Card.Body>
            <Button style={props.style}>{props.name}</Button>
        </Card>
    )
};

export default CustomCard;
