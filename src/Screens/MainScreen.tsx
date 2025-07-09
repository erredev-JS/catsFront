import { useEffect, useState } from "react";
import { Header } from "../Components/Ui/Header/Header";
import { getAllCats } from "../http/crudCats";
import { ICat } from "../types/ICat";
import { ListCats } from "../Components/ListCats/ListCats";

export const MainScreen = () => {

  const [arrayCats, setArayCats] = useState<ICat[]>([])

  const getCats = async () => {
    const response = await getAllCats()
    setArayCats(response)
  }
  useEffect(() => { 
    getCats()
  }, [])

  return (
    <div>
      <Header/>
      <h1 className="text-2xl font-black text-center mt-5">Gatos disponibles</h1>
      <ListCats catsArray={arrayCats}/>
    </div>
  );
};
