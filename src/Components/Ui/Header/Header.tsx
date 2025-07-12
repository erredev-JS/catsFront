import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { openModalLogin } from "../../../redux/features/modal/modalSlice";
import { setNotLoggedIn } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

export const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  return (
    <header className="h-[8vh] bg-slate-700 flex items-center px-2 justify-between">
      <h1 className="text-white text-2xl font-black cursor-pointer" onClick={() => navigate("/")}>Cattlify</h1>
      
      <div className="w-1/4 flex justify-around items-center">
        {isLoggedIn ? (
          <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate("/profile")}>account_circle</span>
        ) : (
          <button className="bg-white px-2 py-1 rounded cursor-pointer" onClick={() => dispatch(openModalLogin())}>
          Login
        </button>
      )}
      {isLoggedIn ? (
        <button className="bg-white px-2 py-1 rounded cursor-pointer" onClick={() => dispatch(setNotLoggedIn())}>
          Cerrar sesión
        </button>
      ) : null}
      </div>
    </header>
  );
};
