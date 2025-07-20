import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { openModalLogin } from "../../../redux/features/modal/modalSlice";
import { setNotLoggedIn } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router";

export const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const user = useSelector((state: RootState) => state.auth.profile)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  return (
    <header className="h-[8vh] bg-slate-700 flex items-center px-2 justify-between">
      <h1 className="text-white text-2xl font-black cursor-pointer" onClick={() => navigate("/")}>Cattlify</h1>
      
      <div className="w-2/4 max-w-[320px] flex justify-around items-center ">
      {user?.role === 'admin' && <span className="material-symbols-outlined text-white scale-105" onClick={() => navigate('/admin')}>
inventory_2
</span>}
        {isLoggedIn ? (
          <span className="material-symbols-outlined cursor-pointer scale-125 text-white" onClick={() => navigate("/profile")}>account_circle</span>
        ) : (
          <button className="bg-white hover:bg-white/70 px-2 py-1 rounded cursor-pointer absolute right-4" onClick={() => {
            dispatch(openModalLogin())
          }}>
          Login
        </button>
      )}
      {isLoggedIn ? (
        <>
        <button className="bg-white hover:bg-white/70 px-2 py-1 rounded cursor-pointer" onClick={() => navigate("/MyCats")}>
          Mis gatos
        </button>
        <button className="bg-white hover:bg-white/70 px-2 py-1 rounded cursor-pointer" onClick={() => {
          dispatch(setNotLoggedIn())
          navigate("/")
          }}>
          Cerrar sesión
        </button>
        </>
      ) : null}
      </div>
    </header>
  );
};
