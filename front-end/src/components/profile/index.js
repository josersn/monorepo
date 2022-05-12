import React from 'react';
import { Container } from './styles';
import ProfilePic from "assets/images/profilepic.jpg"

function Profile(props) {
  return <Container>
            José Ramos
            <img src={ProfilePic} alt="José Ramos"/>
         </Container>;
}

export default Profile;