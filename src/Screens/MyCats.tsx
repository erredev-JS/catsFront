import { useSelector } from "react-redux";
import { ListCats } from "../Components/ListCats/ListCats";
import { RootState } from "../redux/store";
import { getOwnCatsPaged } from "../http/crudCats";
import { useEffect, useState } from "react";
import { ICat } from "../types/ICat";
import { Header } from "../Components/Ui/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export const MyCats = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [pages, setPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const [ownCats, setOwnCats] = useState<ICat[]>([]);

  const getMyCats = async () => {
    if (isLoggedIn) {
      const response = await getOwnCatsPaged(4, selectedPage);
      
      setOwnCats(response.result);
    }
  };


  const pageButtons = [];


  for (let i = 1; i <= pages; i++) {
    {
      pageButtons.push(<div className={`border h-7 w-7 text-center text-white font-bold cursor-pointer ${selectedPage === i-1 ? "bg-blue-600" : "bg-slate-600"}`} onClick={() => setSelectedPage(i-1)}>{i}</div>);
    }
  }


  useEffect(() => {
    getMyCats();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="text-3xl text-center font-bold mt-4">Mis gatos</h1>
      <ListCats catsArray={ownCats} />

            <div className="flex  gap-6 m-auto w-1/3 justify-center mt-2 z-10">{pageButtons}</div>

      <Footer />
    </div>
  );
};
