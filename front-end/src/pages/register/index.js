import React from 'react';
import { Container } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import RegPic from '../../assets/Icons/CadastroIcon.svg';
function Register() {
  return (
    <Container>

    <h2>Preencha com seus dados:</h2>
      <form>

        <div>
          <Input phText="Insira seu nome"/>
          <Input phText="Insira seu nome social"/>
          <Input phText="Insira seu email"/>
          <Input phText="Insira seu número de telefone"/>
          <div>
            <Input small phText="CEP:"/>
            <Input small phText="Nº"/>
            <Input small phText="UF:"/>
          </div>
          <Input phText="Insira seu logradouro"/>
          <Input phText="Insira seu bairro"/>
          <Input phText="Insira um complemento (opcional)"/>
        </div>
      
        <div>
            <Input phText="Crie uma senha"/>
            <Input phText="Reescreva sua senha"/>

            <img src={RegPic}/>
            <h4>Envie sua foto</h4>
            <Button>Cadastrar</Button>

            <h3>Já tem conta?</h3>

            <Button outline>Faça Login</Button>
        </div>

      </form>


    </Container>
  )
}

export default Register;