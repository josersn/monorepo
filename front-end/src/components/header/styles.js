import styled from 'styled-components';
import { Colors } from '../../shared/DesignTokens';

export const Container = styled.header`
    width: 100%;
    background-color: ${Colors.MAIN_GREEN};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: ${Colors.NEUTRAL_WHITE};
    padding: 1.5rem;
    background-color: ${props => props.outline ? Colors.MAIN_GREEN : Colors.NEUTRAL_WHITE} ;

    nav {
        display: flex;
        align-items: center;
        width: auto;
        height: 10vh;
        ul {
            width: inherit;
            display: inline-flex;
            list-style: none;
            justify-content: space-between;
            
            li {
                padding: 0 1rem;
                width: auto;

                a {
                    width: 100%;
                    color: ${Colors.NEUTRAL_WHITE};
                    text-decoration: none;
                }
            }
        }
    }
`;
