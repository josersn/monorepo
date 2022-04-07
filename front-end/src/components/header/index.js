import React from 'react';
import { Container } from './styles';
import Logo from '../logo';
import Profile from '../profile';
function Header(props) {
  return <Container
            outline={props.loggedIn}
          >
        <Logo showName={props.loggedIn}/>
        {props.loggedIn && (
          <>
          {props.pageName}
          <Profile/>
          </>
        )}
        </Container>;
}

export default Header;