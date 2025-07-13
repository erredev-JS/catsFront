import { useEffect, useState } from "react";
import { Header } from "../Components/Ui/Header/Header";
import { getAllCats } from "../http/crudCats";
import { ICat } from "../types/ICat";
import { ListCats } from "../Components/ListCats/ListCats";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Swal from "sweetalert2";
import { openModalAddCat } from "../redux/features/modal/modalSlice";
import { setLoggedIn, setProfile } from "../redux/features/auth/authSlice";
import { setCats } from "../redux/features/cats/catsSlice";
import { getProfile } from "../http/crudAuth";

export const MainScreen = () => {

  const catsArray = useSelector((state: RootState) => state.cats.catsArray)

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>()
  const getCats = async () => {
    const response = await getAllCats();
    dispatch(setCats(response));
  };
   const setterProfile = async () => {
      const response = await getProfile();
      
        dispatch(setProfile(response))
      
    };

  const handleAddCatClick = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Un momento..",
        text: "Primero debes iniciar sesión",
     
      });
    }else{
      dispatch(openModalAddCat())
    }
  };

  // const isLoggedCheck = () => {
  //   const response = localStorage.getItem('token')
  //   if(response){
  //     dispatch(setLoggedIn())
  //   }
  // }

  useEffect(() => {
    getCats();
  }, [catsArray]);
  useEffect(() => {
    setterProfile()
  }, [])
  return (
    <div>
      <Header />
      <div className="flex flex-row w-8/10 m-auto justify-between items-center mt-5 ">
        <h1 className="text-2xl font-black text-center">Gatos disponibles</h1>
        <button className="bg-green-500 font-bold  rounded text-white cursor-pointer p-2" onClick={handleAddCatClick}>
          Agregar gato
        </button>
      </div>
      <ListCats catsArray={catsArray} />
    </div>
  );
};
