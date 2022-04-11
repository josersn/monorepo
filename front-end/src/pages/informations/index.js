import React from 'react';

import Card from "../../components/card"
import FormationImg from '../../assets/images/Formação.svg';
import dataToShow from "../../data/formations.json"
import { Container } from './styles';

function Information() {
    return (
        <Container>
            <div className='card-container'>
            {
                dataToShow.cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))
            }
            </div>
            <img className='formation-image' src={FormationImg}/>
        </Container>
    )
}

export default Information;