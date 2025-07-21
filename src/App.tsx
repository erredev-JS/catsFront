import "./App.css";
import { AddCatModal } from "./Components/Modals/AddCatModal";
import { LoginModal } from "./Components/Modals/LoginModal";
import { MoreOptions } from "./Components/Modals/MoreOptions";
import { RegisterModal } from "./Components/Modals/RegisterModal";
import { AppRoutes } from "./Components/Routes/AppRoutes";

function App() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-cyan-600 min-h-[100vh]">
      <AppRoutes/>
      <LoginModal />
      <RegisterModal />
      <AddCatModal />
      <MoreOptions/>
    </div>
  );
}

export default App;
