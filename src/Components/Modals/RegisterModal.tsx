import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalRegister } from "../../redux/features/modal/modalSlice";

export const RegisterModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.registerIsOpen);
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) {
    return null;
  }

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleCloseModal = () => {
    dispatch(closeModalRegister());
  };

  return (
    <div className="border h-[40vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px]">
      <div className="flex w-full justify-between px-5 pt-5 items-center">
        <p className="opacity-0"></p>
        <button className="bg-red-600 w-[33px] h-[33px] rounded text-2xl text-black font-black cursor-pointer hover:bg-red-700" onClick={handleCloseModal}>X</button>
      </div>

      <form action="" className="flex flex-col w-1/2 m-auto gap-6" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold text-white">Registro</h1>
        <input
          type="text"
          className="bg-white border rounded px-4"
          placeholder="Ingresa tu email"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        <input
          type="text"
          className="bg-white border rounded px-4"
          placeholder="Ingresa tu nombre"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
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
        <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400">Registrarse</button>
      </form>
    </div>
  );
};
