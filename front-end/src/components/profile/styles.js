import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: ${Colors.NEUTRAL_WHITE};
    font-size: 1.5rem;

    img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        border-radius: 2rem;
    }
`;
