import React, { useEffect, useState } from 'react';
import Card from "../../components/card"
import dataToShow from "../../data/formations.json"
import { Container, Form } from './styles';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api';
import Button from '../../components/button';
import Input from '../../components/input';
import { useFormik } from "formik";

const validate = values => {

  const errors = {};

  if (values.cep.length != 8) {
    errors.cep = "Insira um CEP válido";
  }

  return errors;
};

function Information(props) {

    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    const [cep, setCep] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({});

  const formik = useFormik({
    initialValues: {
      cep: ""
    },
    validate,
    onSubmit: e => {
      handleSubmit()
    }
  });

    async function handleSubmit() {
        const { data } = await api.get(`${cep}/json/`);
        setResult(data);
        setShowResult(true);
    }

    useEffect(() => {
    setData(
        dataToShow.pages.find(item => item.name === props.pageName))
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
            <Form onSubmit={formik.handleSubmit}>
          <Input
            id="cep"
            name="cep"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.cep}
            required
            phText="Insira um CEP" />
             <p className='erro'>{formik.errors.cep ? formik.errors.cep : ""}</p>

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
