import React from 'react';
import { Container } from './styles';
import Logo from '../logo';
import Profile from '../profile';
import { NavLink, useLocation } from 'react-router-dom';
function Header(props) {

  const location = useLocation();

  return <Container
    outline={props.loggedIn}
  >
    <Logo showName={props.loggedIn} />
    {props.loggedIn && (
      <>
        <nav>
          <ul>
            <li className={location.pathname === "/formations" ? "active" : ""}><NavLink to="/formations">Formação</NavLink></li>
            <li className={location.pathname === "/experience" ? "active" : ""}><NavLink to="/experience">Experiência</NavLink></li>
            <li className={location.pathname === "/hobbies" ? "active" : ""}><NavLink to="/hobbies">Hobbies</NavLink></li>
            <li className={location.pathname === "/aboutme" ? "active" : ""}><NavLink to="/aboutme">Sobre mim</NavLink></li>
          </ul>
        </nav>
        <Profile />
      </>
    )}
  </Container>;
}

export default Header;
