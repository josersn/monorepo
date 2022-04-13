import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container } from './styles';
import Pagini from '../../assets/images/Pagini.svg'
import Input from '../../components/input';
import Button from '../../components/button';
function Home(props) {

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/formations");
    props.loginFunction();
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>

        <h2>Login</h2>

        <div>
          <Input phText="Insira seu nome de usuário ou email" type="text" />
          <Input phText="Insira sua senha" type="password" />
        </div>

        <Button>Entrar</Button>

        <h2>Ainda não fez cadastro?</h2>
        <Link to="/register">
          <Button outline>Cadastre-se</Button>
        </Link>
      </form>
      <img src={Pagini} alt="Página" />
    </Container>
  )
}

export default Home;