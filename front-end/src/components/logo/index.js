import React from 'react';
import { Container } from './styles';
import logo from '../../assets/icons/logo.svg'
import ESG from '../../assets/icons/ESG.svg'

function Logo(props) {
  return (<Container>
          <img src={logo}/>
          {!props.showName && <h1>ESG</h1>}
          </Container>);
}

export default Logo;