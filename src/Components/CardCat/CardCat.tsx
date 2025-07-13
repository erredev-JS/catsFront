import { FC, useState } from "react";
import { ICat } from "../../types/ICat";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  cat: ICat;
}

export const CardCat: FC<Props> = ({ cat }) => {
  const [showOptions, setShowOptions] = useState(false);

  const profile = useSelector((state: RootState) => state.auth.profile);

  const toggleOption = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="w-[280px] h-[360px] border rounded-2xl overflow-hidden m-auto relative">
      <div className="h-1/2 border-b bg-slate-700">
        {profile?.email == cat.userEmail && (
          <div>
            {!showOptions && (
              <span className="material-symbols-outlined text-white absolute right-2 top-2 cursor-pointer scale-145 z-10" onClick={toggleOption}>
                more_vert
              </span>
            )}

            {showOptions && (
              <div className="w-1/2 bg-black/70 h-fit pb-5 absolute right-2 top-2 px-2">
                <span className="material-symbols-outlined absolute right-0 text-white cursor-pointer" onClick={toggleOption}>
                  close
                </span>
                <div className="flex flex-col text-center text-white gap-3 mt-6">
                  <div className="border bg-slate-400 font-bold hover:scale-105 hover:bg-slate-600  transition cursor-pointer">Dar like</div>
                  <div className="border bg-slate-400 font-bold hover:scale-105 hover:bg-slate-600 transition text-amber-300 cursor-pointer">Editar</div>
                  <div className="border bg-slate-400 font-bold hover:scale-105 hover:bg-slate-600 transition text-red-500 cursor-pointer">Eliminar</div>
                </div>
              </div>
            )}
          </div>
        )}
        <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2F0aXRvfGVufDB8fDB8fHww" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center text-center h-1/2 py-6">
        <p>Nombre: {cat.name}</p>
        <p>Raza: {cat.breed.name}</p>
        <p>Edad: {cat.age}</p>
        <p>Contacto: {cat.userEmail}</p>
        <button className="bg-green-500 font-bold w-8/10 m-auto rounded text-white cursor-pointer" onClick={() => window.open(`https://mail.google.com/mail/?view=cm&to=${cat.userEmail}&su=Interesado%20en%20tu%20anuncio%20de%20${cat.name}&body=Hola,%20estoy%20interesado%20en%20tu%20publicación%20de%20${cat.name}.`)}>
          Contactar anuncio
        </button>
      </div>
    </div>
  );
};
