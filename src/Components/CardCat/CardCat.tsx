import { FC } from "react";
import { ICat } from "../../types/ICat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openModalMoreOptions } from "../../redux/features/modal/modalSlice";
import { setActiveCat } from "../../redux/features/cats/catsSlice";

interface Props {
  cat: ICat;
}

export const CardCat: FC<Props> = ({ cat }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.auth.profile);

  const openOptions = () => {
    dispatch(openModalMoreOptions());
    dispatch(setActiveCat(cat));
  };

  return (
    <div className=" bg-amber-50 w-[280px] min-w-[280px] min-h-[270px] h-[360px]  rounded-2xl overflow-hidden relative">
      <div className="h-1/2 border-b bg-slate-700">
        {profile?.email === cat.userEmail &&<div>
          <span className="material-symbols-outlined text-white absolute right-2 top-2 cursor-pointer scale-145 z-10" onClick={openOptions}>
            more_vert
          </span>
        </div> }
        

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
