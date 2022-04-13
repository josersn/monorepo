import React, { useState } from 'react';

import { api } from '../../services/api';

import Button from '../../components/button';
import Input from '../../components/input';

import { Container, Form } from './styles';

function About() {

    const [cep, setCep] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({});


    async function handleSubmit(e) {
        e.preventDefault();

        const { data } = await api.get(`${cep}/json/`);
        console.log(data);
        setResult(data);
        setShowResult(true);

    }
    return (
        <Container onSubmit={handleSubmit}>
            <Form>
                <Input
                    placeholder="Digite seu CEP."
                    name="cep"
                    onChange={e => setCep(e.target.value)} />
                <Button>Procurar CEP</Button>
            </Form>
            {showResult && (
                <div>
                    <p>Logradouro: {result.logradouro}</p>
                    <p>Bairro: {result.bairro}</p>
                    <p>Cidade: {result.localidade}</p>
                    <p>uf: {result.uf}</p>
                    <p>DDD: {result.ddd}</p>
                </div>
            )}
        </Container>
    );
}

export default About;