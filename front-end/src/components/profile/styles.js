import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: ${Colors.NEUTRAL_WHITE};
    font-size: 1.5rem;
    width: 20%;
    img {
        padding: 0.5rem;
        max-width: 4rem;
        max-height: 4rem;
        margin-left: 1rem;
        border-radius: 2rem;
    }
`;
