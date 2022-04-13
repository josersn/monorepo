import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { NormalizeStyles } from "./shared/NormalizeStyles";
import React, { useEffect, useState } from 'react';
import Home from "./pages/home";
import Register from "./pages/register";
import Information from "./pages/informations";
import Header from "./components/header";

function App() {

  let userNotLoggedIn;
  userNotLoggedIn = true;
  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Header loggedIn={userNotLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formations" element={<Information pageName="Formação"/>} />
        <Route path="/experience" element={<Information pageName="Experiência"/>} />
        <Route path="/hobbies" element={<Information pageName="Hobbies"/>} />
        <Route path="/aboutme" element={<Information pageName="Sobre mim"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
