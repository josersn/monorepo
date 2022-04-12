import React from 'react';
import { Container } from './styles';
import Logo from '../logo';
import Profile from '../profile';
import { NavLink } from 'react-router-dom';
function Header(props) {
  return <Container
            outline={props.loggedIn}
          >
        <Logo showName={props.loggedIn}/>
        {props.loggedIn && (
          <>
          <nav>
            <ul>
              <li><NavLink to="/formations">Formação</NavLink></li>
              <li><NavLink to="/experience">Experiência</NavLink></li>
              <li><NavLink to="/hobbies">Hobbies</NavLink></li>
              <li><NavLink to="/aboutme">Sobre mim</NavLink></li>
            </ul>
          </nav>
          <Profile/>
          </>
        )}
        </Container>;
}

export default Header;