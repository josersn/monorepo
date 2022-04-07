import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.header`
    width: 100%;
    background-color: ${Colors.MAIN_GREEN};
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3rem;
    color: ${Colors.NEUTRAL_WHITE};
    padding: 0 1.5rem;
    background-color: ${props => props.outline ? Colors.MAIN_GREEN : Colors.NEUTRAL_WHITE} ;
`;
