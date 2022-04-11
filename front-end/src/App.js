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

  let userNotLoggedIn = true;
  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Header loggedIn={userNotLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formations" element={<Information />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
