import React from 'react';
import { Container } from './styles';

function card(props) {
    return (
        <Container>
            <div className='card-header'>
                <img src={props.card.img} alt={props.card.title} />
            </div>
            <div className='card-body'>
                <h2>{props.card.title}</h2>
                {props.card.texts.map((text, index) => (<p key={index}>{text}</p>))}
            </div>
        </Container>
    )
}

export default card;