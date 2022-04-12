import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.div`
    height: 100%;
    display: inline-flex;
    align-items: center;
    color: ${Colors.MAIN_GREEN};
    font-size: 4vh;
    align-items: center;
    width: 20%;
    
    img {
        height: 9vh;
    }

    h1 {
        margin-left: 0.5rem;
    }
`;
