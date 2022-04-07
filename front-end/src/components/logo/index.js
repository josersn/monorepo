import React from 'react';
import { Container } from './styles';
import logo from '../../assets/Icons/logo.svg'
import esg from '../../assets/Icons/ESG.svg'

function Logo(props) {
  return (<Container>
          <img src={logo}/>
          {!props.showName && <h1>ESG</h1>}
          </Container>);
}

export default Logo;