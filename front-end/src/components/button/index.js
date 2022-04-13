import React from 'react';

import { Container } from './styles';

function Button(props) {
    return (
        <Container
            {...props}
            outline={props.outline}
        >{props.children}</Container>
    );
}

export default Button;