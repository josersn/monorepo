import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container } from './styles';
// import Pagini from '../../assets/images/Pagini.svg'
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
          <Input phText="Insira seu nome de usuário ou email" type="text" required />
          <Input phText="Insira sua senha" type="password" required />
        </div>

        <Button>Entrar</Button>

        <h2>Ainda não fez cadastro?</h2>
        <Link to="/register">
          <Button outline>Cadastre-se</Button>
        </Link>
      </form>
      <img src="data:image/png;base64,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" alt="Página" />
    </Container>
  )
}

export default Home;