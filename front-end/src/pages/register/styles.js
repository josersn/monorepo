import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-space-around;
    width: 100%;
    height: 90vh;

    form {
        margin: auto;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        padding: 2rem 4rem;
        justify-content: space-around;
        height: 100%;

        h2 {
            width: 100%;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        div {
            width: 50%;

            input {
                margin-bottom: 3rem;
                width: 100%;
            }
        }

        button {
            width: 20rem;
            margin-bottom: 1rem;
        }
    }



`;
