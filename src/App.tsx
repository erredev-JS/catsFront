import "./App.css";
import { AddCatModal } from "./Components/Modals/AddCatModal";
import { LoginModal } from "./Components/Modals/LoginModal";
import { RegisterModal } from "./Components/Modals/RegisterModal";
import { MainScreen } from "./Screens/MainScreen";

function App() {
  return (
    <div>
      <MainScreen />
      <LoginModal />
      <RegisterModal />
      <AddCatModal />
    </div>
  );
}

export default App;
