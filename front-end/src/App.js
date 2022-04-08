import Button from "./components/button";
import Header from "./components/header";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import Input from "./components/input";
import Home from "./pages/home";
import Register from "./pages/register";
function App() {

  let userNotLoggedIn;
  // userNotLoggedIn = true;
  return (
    <>
    <NormalizeStyles/>
      <Header loggedIn={userNotLoggedIn} pageName="Teste" />
      {/* <Home/> */}
      <Register/>
    </>
  );
}

export default App;
