import { CatsTable } from "../Components/AdministrationTables/CatsTable";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Ui/Header/Header";

import { BreedsTable } from "../Components/AdministrationTables/BreedsTable";
import { useState } from "react";

export const Administration = () => {

    const [tableSelected, setTableSelected] = useState(1)

  return (
    <div>
        <Header/>
            <h1 className="text-center text-3xl  mt-4 font-black">Panel de administración</h1>
            <div className="w-8/10 m-auto  flex justify-around ">
              <button className={`px-5 py-2.5  rounded-xl ${tableSelected === 1 && "border-2 border-black"} bg-slate-400 cursor-pointer hover:scale-102 hover:bg-slate-500`} onClick={() => setTableSelected(1)}>
                Gatos
              </button>
              <button className={`px-5 py-2.5  rounded-xl ${tableSelected === 2 && "border-2 border-black"} bg-slate-400 cursor-pointer hover:scale-102 hover:bg-slate-500`} onClick={() => setTableSelected(2)}>
                Razas
              </button>
              <button className={`px-5 py-2.5  rounded-xl ${tableSelected === 3 && "border-2 border-black"} bg-slate-400 cursor-pointer hover:scale-102 hover:bg-slate-500`} onClick={() => setTableSelected(3)}>
                Usuarios
              </button>
            </div>

        {tableSelected === 1 && <CatsTable></CatsTable>}
        {tableSelected === 2 && <BreedsTable></BreedsTable>}
   
      

      {/* <BreedsTable/> */}
        <Footer/>
    </div>
  );
};