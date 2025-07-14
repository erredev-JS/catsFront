import { useSelector } from "react-redux";
import { ListCats } from "../Components/ListCats/ListCats"
import { RootState } from "../redux/store";
import { getOwnCats } from "../http/crudCats";
import { useEffect, useState } from "react";
import { ICat } from "../types/ICat";
import { Header } from "../Components/Ui/Header/Header";

export const MyCats = () => {

      const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

      const [ownCats, setOwnCats]  = useState<ICat[]>([])

     const getMyCats = async () => {
        if (isLoggedIn) {
          const response = await getOwnCats();
          setOwnCats(response)
        }
      };
    

      useEffect(() => {
        getMyCats();
      }, []);

  return (
    <div>
        <Header/>
       <h1 className="text-3xl text-center font-bold mt-4">Mis gatos</h1>
        <ListCats catsArray={ownCats}/>
    </div>
  )
}
