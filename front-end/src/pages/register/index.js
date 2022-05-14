import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Input from '../../components/input';
import Button from '../../components/button';
import { Container } from './styles';
import { mascaraNome, mascaraTelefone, mascaraCep, mascaraUf, mascaraNumero } from '../../scripts/masks';

const validate = values => {

  const errors = {};

  document.getElementById('nome').onkeyup = function() {
    mascaraNome(document.getElementById('nome'));
  }
  
  document.getElementById('telefone').onkeyup = function() {
    mascaraTelefone(document.getElementById('telefone'));
  }

  document.getElementById('cep').onkeyup = function() {
    mascaraCep(document.getElementById('cep'));
  }

  document.getElementById('uf').onkeyup = function() {
    mascaraUf(document.getElementById('uf'));
  }

  document.getElementById('numero').onkeyup = function() {
    mascaraNumero(document.getElementById('numero'));
  }

  if (values.nomeDeUsuario.length < 6) {
    errors.nomeDeUsuario = "Minimo de 6 caracteres";
  } 

  if (values.nome.length < 10) {
    errors.nome = "Minimo de 10 caracteres";
  } 

  if (!values.email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
    errors.email = "Insira um email válido";
  } 

  if (values.telefone.length < 14) {
    errors.telefone = "Insira um número válido";
  } 

  if (values.cep.length < 9) {
    errors.cep = "CEP inválido";
  } 

  if (values.numero.length <= 0) {
    errors.numero = "Número inválido";
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
             <p className='erro'>{formik.errors.nomeDeUsuario ? formik.errors.nomeDeUsuario : ""}</p>

          <Input 
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
            // required
            phText="Insira seu nome social" />
             <p className='erro'>{formik.errors.nome ? formik.errors.nome : ""}</p>

          <Input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            // required
            phText="Insira seu email" />
             <p className='erro'>{formik.errors.email ? formik.errors.email : ""}</p>

          <Input
            id="telefone"
            name="telefone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.telefone}
            // required
            phText="Insira seu número de telefone" />
             <p className='erro'>{formik.errors.telefone ? formik.errors.telefone : ""}</p>

          <div className='smallInputs'>
            <Input             
              id="cep"
              name="cep"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.cep}
              // required
              small phText="CEP:" />

            <Input             
              id="numero"
              name="numero"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.numero}
              // required
              small phText="Nº" />

            <Input             
              id="uf"
              name="uf"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.uf}
              // required
              small phText="UF:" />
              <p className='erro'>{formik.errors.cep ? formik.errors.cep : ""}</p>
              <p className='erro'>{formik.errors.numero ? formik.errors.numero : ""}</p>
              <p className='erro'>{formik.errors.uf ? formik.errors.uf : ""}</p>

          </div>

          <Input             
              id="logradouro"
              name="logradouro"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.logradouro}
              // required
              phText="Insira seu logradouro" />
             <p className='erro'>{formik.errors.logradouro ? formik.errors.logradouro : ""}</p>

          <Input             
              id="bairro"
              name="bairro"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.bairro}
              // required
              phText="Insira seu bairro" />
             <p className='erro'>{formik.errors.bairro ? formik.errors.bairro : ""}</p>

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
             <p className='erro'>{formik.errors.senha ? formik.errors.senha : ""}</p>

          <Input             
              id="verifSenha"
              name="verifSenha"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.verifSenha}
              // required
              phText="Reescreva sua senha" />
             <p className='erro'>{formik.errors.verifSenha ? formik.errors.verifSenha : ""}</p>

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