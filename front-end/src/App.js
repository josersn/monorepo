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
import { useState } from "react";

function App() {

  const [page, setPage] = useState("");

  function handlePageName(pageName) {
    setPage(pageName);
    return pageName;
  }

  let userNotLoggedIn;
  userNotLoggedIn = true;
  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Header loggedIn={userNotLoggedIn} page={page} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formations" element={<Information pageName={handlePageName("Formação")} />} />
        <Route path="/experience" element={<Information pageName={handlePageName("Experiência")}/>} />
        <Route path="/hobbies" element={<Information pageName={handlePageName("Hobbies")}/>} />
        <Route path="/aboutme" element={<About pageName={handlePageName("Sobre")}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
