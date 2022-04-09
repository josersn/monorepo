import React from 'react';
import Batata from "../../assets/icons/santander.svg";
import { Container } from './styles';

function card(props) {
    return (
        <Container>
            <div className='card-header'>
                <img src={Batata} alt="santander" />
            </div>
            <div className='card-body'>
                <h2>{props.card.title}</h2>
                {props.card.texts.map((text, index) => (<p key={index}>{text}</p>))}
            </div>
        </Container>
    )
}

export default card;