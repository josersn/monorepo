import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { NormalizeStyles } from "./shared/NormalizeStyles";

import Home from "./pages/home";
import Register from "./pages/register";
import Information from "./pages/informations";

import Header from "./components/header";
import About from "./pages/about";
function App() {

  const [userLogged, setUserLogged] = useState(false);

  function login() {
    setUserLogged(true);
  }

  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Header loggedIn={userLogged} />
      <Routes>
        <Route path="/" element={<Home loginFunction={login} />} />
        <Route path="/register" element={<Register loginFunction={login}/>} />
        <Route path="/formations" element={<Information pageName="Formação" />} />
        <Route path="/experience" element={<Information pageName="Experiência" />} />
        <Route path="/hobbies" element={<Information pageName="Hobbies" />} />
        <Route path="/aboutme" element={<Information pageName="Sobre mim" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
