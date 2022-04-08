import styled from "styled-components";

export const Container = styled.button`
    border: ${props => props.outline ? "1px solid #5DB075" : "none"} ;
    background-color: ${props => props.outline ? "#fff" : "#5DB075"} ;
    color: ${props => props.outline ? "#5DB075" : "#fff"} ;
    padding: 0.8rem 2rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.5rem;
`;