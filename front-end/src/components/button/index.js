import React from 'react';

import { Container } from './styles';

function Button(props) {
    return (
        <Container
            outline={props.outline}
        >{props.children}</Container>
    );
}

export default Button;