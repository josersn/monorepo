import styled from 'styled-components';
import { Colors, Highlight } from '../../shared/DesignTokens';

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

    .about-me {
        width: 70%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .hide-card {
        display: none;
    }

    .formation-image, .profile-pic {
        width: 30%;
        align-self: center;
        padding: 1rem;
    }

    .profile-pic {
        border-radius: 50%;
    }

    .show-form {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        height: 100%;

        div {
            width: auto;
            margin: 20px auto;
            color: ${Colors.MAIN_GREEN};
            font-size: 1.5rem;
        }
    }

    .hide-form {
        display: none;
    }

`;

export const Form = styled.form`
    max-width: 480px;
    margin: 0 auto ;
    margin-top: 120px ;
    display: flex;
    button {
        margin-left: 10px ;
    }

`;