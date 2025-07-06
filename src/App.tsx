import "./App.css";
import { LoginModal } from "./Components/Modals/LoginModal";
import { RegisterModal } from "./Components/Modals/RegisterModal";
import { MainScreen } from "./Screens/MainScreen";

function App() {
  return (
    <div>
      <MainScreen />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
