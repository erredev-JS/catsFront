import { useEffect, useState } from "react";
import { Header } from "../Components/Ui/Header/Header";
import { getCatsPaged } from "../http/crudCats";
import { ListCats } from "../Components/ListCats/ListCats";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Swal from "sweetalert2";
import { openModalAddCat } from "../redux/features/modal/modalSlice";
import { setProfile } from "../redux/features/auth/authSlice";
import { setCats } from "../redux/features/cats/catsSlice";
import { getProfile } from "../http/crudAuth";
import { Footer } from "../Components/Footer/Footer";

export const MainScreen = () => {
  const catsArray = useSelector((state: RootState) => state.cats.catsArray);

  const [pages, setPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  const getCats = async () => {
    const response = await getCatsPaged(4, selectedPage);
    dispatch(setCats(response.result));
    setPages(response.totalPages);
  };

  const pageButtons = [];

  const setterProfile = async () => {
    const response = await getProfile();
    dispatch(setProfile(response));
  };

  const handleAddCatClick = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Un momento..",
        text: "Primero debes iniciar sesión",
      });
    } else {
      dispatch(openModalAddCat());
    }
  };

  for (let i = 1; i <= pages; i++) {
    {
      pageButtons.push(
        <div key={i} className={`border h-7 w-7 text-center text-white font-bold cursor-pointer ${selectedPage === i - 1 ? "bg-blue-600" : "bg-slate-600"}`} onClick={() => setSelectedPage(i - 1)}>
          {i}
        </div>
      );
    }
  }
  useEffect(() => {
    getCats();
  }, [selectedPage, catsArray]);
  useEffect(() => {
    if (isLoggedIn) {
      setterProfile();
    }
  }, [isLoggedIn]);
  return (
    <div>
      <Header />
      <div className="flex flex-row w-8/10 m-auto justify-between items-center mt-5 ">
        <h1 className="text-2xl md:text-3xl font-black text-center text-white">Gatos disponibles</h1>
        <button className="bg-green-500 font-bold  rounded text-white cursor-pointer p-2" onClick={handleAddCatClick}>
          Agregar gato
        </button>
      </div>
      <ListCats catsArray={catsArray} />
      <div className="flex  gap-6 m-auto w-1/3 justify-center  z-10">{pageButtons}</div>
      <Footer />
    </div>
  );
};
