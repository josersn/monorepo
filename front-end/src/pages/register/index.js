import React from 'react';
import { Container } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
function Register() {
  return (
    <Container>
      <form>

        <h2>Preencha com seus dados:</h2>

        <div>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira sua senha"/>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>
        </div>
      
        <div>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira seu nome de usuário ou email"/>

            
          <Button>Cadastrar</Button>

          <h2>Já tem conta?</h2>

          <Button outline>Faça Login</Button>
        </div>

      </form>


    </Container>
  )
}

export default Register;