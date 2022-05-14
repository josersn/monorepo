import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { useFormik } from "formik";

const validate = values => {

  const errors = {};

  if (values.username.length < 6) {
    errors.username = "Usuário não existente";
  } 

  if (values.password.length < 6) {
    errors.password = "Senha incorreta";
  } 

  return errors;
};


function Home(props) {

  const navigate = useNavigate();
 
  const formik = useFormik({

    initialValues: {
      username: "",
      password: ""
    },
    validate,
    onSubmit: e => {
       navigate("/formations");
       props.loginFunction();
    }

  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>

        <h2>Login</h2>
        <div>
          <Input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            phText="Insira seu nome de usuário ou email"
            required />
          {formik.errors.username ? <p className='erro'>{formik.errors.username}</p> : null}

          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            phText="Insira seu nome de usuário ou email"
            required />
        {formik.errors.password ? <p className='erro'>{formik.errors.password}</p> : null}

        </div>
        <Button>Entrar</Button>

        <h2>Ainda não fez cadastro?</h2>
        <Link to="/register">
          <Button outline>Cadastre-se</Button>
        </Link>
      </form>
      <img src="assets/images/Pagini.svg" alt="Página" />
    </Container>
  )
}

export default Home;