import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import Input from '../../components/input';
import Button from '../../components/button';


import { Container } from './styles';

function Register(props) {

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/formations");
    props.loginFunction();
  }


  return (
    <Container>

      <h2>Preencha com seus dados:</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <Input required phText="Insira seu nome" />
          <Input required phText="Insira seu nome social" />
          <Input required phText="Insira seu email" />
          <Input required phText="Insira seu número de telefone" />
          <div>
            <Input required small phText="CEP:" />
            <Input required small phText="Nº" />
            <Input required small phText="UF:" />
          </div>
          <Input required phText="Insira seu logradouro" />
          <Input required phText="Insira seu bairro" />
          <Input phText="Insira um complemento (opcional)" />
        </div>

        <div>
          <Input required phText="Crie uma senha" />
          <Input required phText="Reescreva sua senha" />

          <img src='assets/icons/CadastroIcon.svg' alt="Registrar" />
          <h4>Envie sua foto</h4>
          <Button>Cadastrar</Button>

          <h3>Já tem conta?</h3>

          <Link to="/">
            <Button outline>Faça Login</Button>
          </Link>
        </div>

      </form>


    </Container>
  )
}

export default Register;