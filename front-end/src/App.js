import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { NormalizeStyles } from "./shared/NormalizeStyles";

import Home from "./pages/home";
import Register from "./pages/register";

import Header from "./components/header";
function App() {

  let userNotLoggedIn = true;
  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
