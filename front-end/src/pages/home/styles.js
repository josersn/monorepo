import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    display: flex;
    justify-content: space-space-around;
    width: 100%;
    height: 90vh;

    form {
        margin: auto;
        width: 40%;
        display: flex;
        flex-flow: column wrap;
        text-align: center;
        padding: 2rem 4rem;
        justify-content: space-around;
        height: 60%;


        h2 {
            width: 100%;
            font-size: 2rem;
        }

        div {
            width: 100%;

            input {
                margin-bottom: 3rem;
                width: 100%;
            }
        }

        button {
            width: 20rem;
            margin: 0 auto;
        }
    }

    img {
        width: 50%;
        background-color: ${Colors.MAIN_GREEN} ;
        border-radius: 50px 0 0 0;
    }


`;
