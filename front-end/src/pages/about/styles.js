import styled from 'styled-components';

export const Container = styled.main`
    display: flex ;
    flex-direction: column;

    div{
        width:  80%;
        max-width: 480px ;    
        margin: 0 auto ;
        margin-top: 20px ;
    }
`;

export const Form = styled.form`

    width:  80%;
    max-width: 480px ;
    margin: 0 auto ;
    margin-top: 120px ;
    display: ${props => props.visible ? "flex" : "none"} ;

    button {
        margin-left: 10px ;
    }
`;
