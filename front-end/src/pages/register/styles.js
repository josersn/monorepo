import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    .erro {
        color: red;
        font-size: 1rem;
        height: 1rem;
        text-align: left;
        margin-left: 1rem;
    }

    h2 {
        width: 100%;
        font-size: 2rem;
        margin: 0 auto;
        text-align: center;
    }

    form {
        margin: auto;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        padding: 2rem 4rem;
        justify-content: space-around;
        height: 90%;

        .smallInputs {
            display: flex;
            flex-flow: row wrap;
            p {
                width: 30%;
            }
        }

        div {
            width: 50%;
            padding: 1rem 5rem;

            input {
                margin-top: 1rem ;
            }

            div {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0;
            }

            h3 {
                padding: 1rem;
                font-size: 2rem;
            }

            h4 {
                padding: 1rem;
                font-size: 2rem;
                color: ${Colors.SUB_GREEN};
            }

            img {
                margin-top: 1rem;
            }

        }

        button {
            width: 20rem;
            margin-bottom: 1rem;
        }
    }



`;
