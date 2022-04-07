import React from 'react';
import { Container } from './styles';
import Logo from '../logo';
import Profile from '../profile';
function Header() {
  return <Container>
        <Logo/>
        Nome da página
        <Profile/>
        </Container>;
}

export default Header;