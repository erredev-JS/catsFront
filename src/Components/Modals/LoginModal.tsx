import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalLogin, openModalRegister } from "../../redux/features/modal/modalSlice";

export const LoginModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.loginIsOpen);

  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCloseModal = () => {
    dispatch(closeModalLogin());
  };

  return (
    <div className="border h-[40vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px]">
      <div className="flex w-full justify-between px-5 pt-5 items-center">
        <p className="opacity-0"></p>
        <button className="bg-red-600 w-[33px] h-[33px] rounded text-2xl text-black font-black cursor-pointer hover:bg-red-700" onClick={handleCloseModal}>
          X
        </button>
      </div>

      <form action="" className="flex flex-col w-1/2 m-auto gap-6" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold text-white">Inicio de sesion</h1>
        <input type="email" className="bg-white border rounded px-4" placeholder="Ingresa tu email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input
          type="password"
          className="bg-white border rounded px-4"
          placeholder="Ingresa tu contraseña"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
        <p>
          ¿No tienes una cuenta?{" "}
          <a onClick={() => dispatch(openModalRegister())} className="text-blue-600 cursor-pointer">
            Regístrate
          </a>
        </p>
        <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400">Iniciar sesion</button>
      </form>
    </div>
  );
};
