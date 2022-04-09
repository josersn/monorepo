import React from 'react';
import { Container } from './styles';
import ProfilePic from "../../assets/images/profilepic.jpg"

function Profile(props) {
  return <Container>
            <img src={ProfilePic}/>
            José Ramos
         </Container>;
}

export default Profile;