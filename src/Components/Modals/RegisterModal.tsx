import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalRegister } from "../../redux/features/modal/modalSlice";
import { register } from "../../http/crudAuth";
import Swal from "sweetalert2";



export const RegisterModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.registerIsOpen);

  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData.email, formData.name, formData.password);

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado exitosamente",
      });
      dispatch(closeModalRegister())
    } catch (error) {
      alert(error)
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModalRegister());
  };

  return (
    <div className="bg-black/90 fixed inset-0   z-10">
      <div className="border h-[40vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px] min-h-[330px]">
        <div className="flex w-full justify-between px-5 pt-5 items-center">
          <p className="opacity-0"></p>
          <button className="bg-red-600 w-[33px] h-[33px] rounded text-2xl text-black font-black cursor-pointer hover:bg-red-700" onClick={handleCloseModal}>
            X
          </button>
        </div>

        <form action="" className="flex flex-col w-1/2 m-auto gap-6" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold text-white">Registrar usuario</h1>
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
          <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400" type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};
