import React, { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';

import { Container } from './styles';

function About() {

    const [cep, setCep] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log(cep)
    }
    return (
        <Container onSubmit={handleSubmit}>
            <Input
                placeholder="Digite seu CEP."
                name="cep"
                onChange={e => setCep(e.target.value)} />
            <Button>Procurar CEP</Button>
        </Container>
    );
}

export default About;