import React, { useEffect, useState } from 'react';
import Card from "../../components/card"
import dataToShow from "../../data/formations.json"
import { Container, Form } from './styles';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api';
import Button from '../../components/button';
import Input from '../../components/input';

function Information(props) {

    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

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

    useEffect(() => {
    setData(
        dataToShow.pages.find(item => item.name == props.pageName))
        setLoading(true);
    }, [props.pageName])

    return (
        <Container onSubmit={handleSubmit}>
        { loading && (<>
            <div className={location.pathname == "/aboutme" ? "about-me" : "card-container"}>
            {
                data.cards.map((card, index) => (
                     <Card visible={location.pathname == "/aboutme" ? false : true} key={index} card={card} />
                ))
            }
            <div className={location.pathname == "/aboutme" ? "show-form" : "hide-form"}>
            <Form>
                <Input
                    placeholder="Digite seu CEP"
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
            </div>
            </div>
            <img className={location.pathname == "/aboutme" ? "profile-pic" : "formation-image"}  src={data.image}/>

        </>)
        }
        </Container>
    )
}

export default Information;