import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Input from '../../components/input';
import Button from '../../components/button';
import { Container } from './styles';

const validate = values => {

  const errors = {};

  if (values.nomeDeUsuario.length < 6) {
    errors.nomeDeUsuario = "Minimo de 6 caracteres";
  } 

  if (values.nome.length < 15) {
    errors.nome = "Minimo de 15 caracteres";
  } 

  if (!values.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
    errors.email = "Insira um email válido";
  } 

  if (!values.telefone.match(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g)) {
    errors.telefone = "Insira um número válido";
  } 

  if (values.cep.length < 8) {
    errors.cep = "Insira um CEP válido";
  } 

  if (values.numero.length > 3) {
    errors.numero = "Insira um número válido";
  } 

  if (values.uf.length <= 0) {
    errors.uf = "Insira um estado";
  } 

  if (values.logradouro.length <= 0) {
    errors.logradouro = "Insira um logradouro";
  } 

  if (values.bairro.length <= 0) {
    errors.bairro = "Insira um bairro";
  } 

  if (values.senha.length < 6) {
    errors.senha = "Mínimo de 6 caracteres";
  } 

  if (values.verifSenha != values.senha) {
    errors.verifSenha = "Senhas não correspondem";
  } 

  return errors;

};


function Register(props) {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nomeDeUsuario: "",
      nome: "",
      email: "",
      telefone: "",
      cep: "",
      numero: "",
      uf: "",
      logradouro: "",
      bairro: "",
      complemento: "",
      senha: "",
      verifSenha: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
    // onSubmit: e => {
//        navigate("/formations");
      //  props.loginFunction();
    // }
  });

  return (
    <Container>

      <h2>Preencha com seus dados:</h2>
      <form onSubmit={formik.handleSubmit}>

        <div>
          <Input
            id="nomeDeUsuario"
            name="nomeDeUsuario"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nomeDeUsuario}
            // required
            phText="Insira seu nome de usuário" />
             {formik.errors.nomeDeUsuario ? <p className='erro'>{formik.errors.nomeDeUsuario}</p> : null}

          <Input 
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
            // required
            phText="Insira seu nome social" />
             {formik.errors.nome ? <p className='erro'>{formik.errors.nome}</p> : null}

          <Input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            // required
            phText="Insira seu email" />
             {formik.errors.email ? <p className='erro'>{formik.errors.email}</p> : null}

          <Input
            id="telefone"
            name="telefone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.telefone}
            // required
            phText="Insira seu número de telefone" />
             {formik.errors.telefone ? <p className='erro'>{formik.errors.telefone}</p> : null}

          <div>
            <Input             
              id="cep"
              name="cep"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cep}
              // required
              small phText="CEP:" />
             {formik.errors.cep ? <p className='erro'>{formik.errors.cep}</p> : null}

            <Input             
              id="numero"
              name="numero"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.numero}
              // required
              small phText="Nº" />
             {formik.errors.numero ? <p className='erro'>{formik.errors.numero}</p> : null}

            <Input             
              id="uf"
              name="uf"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.uf}
              // required
              small phText="UF:" />
             {formik.errors.uf ? <p className='erro'>{formik.errors.uf}</p> : null}

          </div>
          <Input             
              id="logradouro"
              name="logradouro"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.logradouro}
              // required
              phText="Insira seu logradouro" />
             {formik.errors.logradouro ? <p className='erro'>{formik.errors.logradouro}</p> : null}

          <Input             
              id="bairro"
              name="bairro"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bairro}
              // required
              phText="Insira seu bairro" />
             {formik.errors.bairro ? <p className='erro'>{formik.errors.bairro}</p> : null}

          <Input 
            id="complemento"
            name="complemento"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.complemento}
            phText="Insira um complemento (opcional)" />
        </div>

        <div>
          <Input             
              id="senha"
              name="senha"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.senha}
              // required
              phText="Crie uma senha" />
             {formik.errors.senha ? <p className='erro'>{formik.errors.senha}</p> : null}

          <Input             
              id="verifSenha"
              name="verifSenha"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.verifSenha}
              // required
              phText="Reescreva sua senha" />
             {formik.errors.verifSenha ? <p className='erro'>{formik.errors.verifSenha}</p> : null}

          <img src='assets/icons/CadastroIcon.svg' alt="Registrar" />
          <h4>Envie sua foto</h4>
          <Button type="submit">Cadastrar</Button>

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