import React from 'react';
import { Container } from './styles';
import Pagini from '../../assets/images/Pagini.svg'
import Input from '../../components/input';
import Button from '../../components/button';
function Home() {
  return (
    <Container>
      <form>

        <h2>Login</h2>

        <div>
          <Input phText="Insira seu nome de usuário ou email"/>
          <Input phText="Insira sua senha"/>
        </div>
      
        <Button>Entrar</Button>

        <h2>Ainda não fez cadastro?</h2>

        <Button outline>Cadastre-se</Button>
      </form>
      <img src={Pagini}/>
    </Container>
  )
}

export default Home;