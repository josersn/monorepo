import Button from "./components/button";
import Header from "./components/header";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import Input from "./components/input";
import Home from "./pages/home";
import Register from "./pages/register";
function App() {

  const userNotLoggedIn = false;
  // const userNotLoggedIn = true;
  return (
    <div >
    <NormalizeStyles/>
      <Header loggedIn={userNotLoggedIn} pageName="Teste" />
      {/* <Home/> */}
      <Register/>
      {/* <Button>Teste</Button> */}
      {/* <Input phText="Teste"/> */}
    </div>
  );
}

export default App;
