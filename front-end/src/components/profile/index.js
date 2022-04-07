import React from 'react';
import { Container } from './styles';
import ProfilePic from "../../assets/Images/profilepic.svg"

function Profile() {
  return <Container>
            <img src={ProfilePic}/>
            José Ramos
         </Container>;
}

export default Profile;