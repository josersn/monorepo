import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-flow: row wrap;

    .card-container {
        width: 70%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .formation-image {
        width: 30%;
        align-self: center;
        padding: 1rem;
    }
`;
