import React from 'react';
import { Container } from './styles';

function Logo(props) {
  return (<Container>
          <img src='assets/icons/logo.svg' alt="ESG"/>
          {!props.showName && <h1>ESG</h1>}
          </Container>);
}

export default Logo;