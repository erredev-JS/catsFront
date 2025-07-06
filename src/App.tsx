import "./App.css";
import { LoginModal } from "./Components/Modals/LoginModal";
import { RegisterModal } from "./Components/Modals/RegisterModal";

function App() {
  return (
    <div>
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
