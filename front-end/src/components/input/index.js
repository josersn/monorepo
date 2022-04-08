import React from 'react';

import { Container } from './styles';

function Input(props) {
  return <Container
          placeholder={props.phText}
          />;
}

export default Input;