import React from 'react';
import { Container } from './styles';
import logo from '../../assets/img/logo.jpg'
// import { Container } from './styles';

function Logo() {
  return (<Container>
          <img src={logo}
            />  
          </Container>);
}

export default Logo;