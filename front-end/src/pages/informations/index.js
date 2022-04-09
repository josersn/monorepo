import React from 'react';

import Card from "../../components/card"

import dataToShow from "../../data/formations.json"
import { Container } from './styles';

function Information() {
    return (
        <Container>
            {
                dataToShow.cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))
            }
        </Container>
    )
}

export default Information;