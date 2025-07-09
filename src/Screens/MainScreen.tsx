import { useEffect, useState } from "react";
import { Header } from "../Components/Ui/Header/Header";
import { getAllCats } from "../http/crudCats";
import { ICat } from "../types/ICat";
import { ListCats } from "../Components/ListCats/ListCats";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Swal from "sweetalert2";

export const MainScreen = () => {
  const [arrayCats, setArayCats] = useState<ICat[]>([]);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const getCats = async () => {
    const response = await getAllCats();
    setArayCats(response);
  };

  const handleAddCatClick = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Un momento..",
        text: "Primero debes iniciar sesión",
     
      });
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-row w-8/10 m-auto justify-between items-center mt-5 ">
        <h1 className="text-2xl font-black text-center">Gatos disponibles</h1>
        <button className="bg-green-500 font-bold  rounded text-white cursor-pointer p-2" onClick={handleAddCatClick}>
          Agregar gato
        </button>
      </div>
      <ListCats catsArray={arrayCats} />
    </div>
  );
};
