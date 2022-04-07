import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    color: ${Colors.MAIN_GREEN};
    font-size: 2rem;
    align-items: center;

    h1 {
        margin-left: 1rem;
    }
`;
