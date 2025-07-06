import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { openModalLogin } from "../../../redux/features/modal/modalSlice";

export const Header = () => {

    const dispatch = useDispatch<AppDispatch>()

  return (
    <header className="h-[8vh] bg-slate-700 flex items-center px-2 justify-between">
      <h1 className="text-white text-2xl font-black">Cattlify</h1>

      <button className="bg-white px-2 py-1 rounded cursor-pointer" onClick={() => dispatch(openModalLogin())}>Login</button>
    </header>
  );
};
