import Button from "./components/button";
import Header from "./components/header";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import Input from "./components/input";
import Home from "./pages/home";
import Register from "./pages/register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  let userNotLoggedIn;
  userNotLoggedIn = true;
    return (
    <Router>
        <NormalizeStyles />
        <Header loggedIn={userNotLoggedIn} pageName="Teste" />
        <Route path="/" element={<Home/>}/>
    </Router>
    );
}

export default App;
