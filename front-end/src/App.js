import Button from "./components/button";
import Header from "./components/header";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import Input from "./components/input";
function App() {

  const userNotLoggedIn = true;

  return (
    <div >
    <NormalizeStyles/>
      <Header loggedIn={userNotLoggedIn} pageName="Teste" />
      <Button />
      <Input/>
    </div>
  );
}

export default App;
