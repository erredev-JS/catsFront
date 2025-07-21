import { CatsTable } from "../Components/AdministrationTables/CatsTable";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Ui/Header/Header";

import { BreedsTable } from "../Components/AdministrationTables/BreedsTable";
import { useState } from "react";
import { UsersTable } from "../Components/AdministrationTables/UsersTable";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Administration = () => {

      const profile = useSelector((state: RootState) => state.auth.profile);


    const [tableSelected, setTableSelected] = useState(1)

    if(profile?.role !== 'admin'){
      return null
    }

  return (
    <div>
        <Header/>
        <div>

            <div className="w-8/10 m-auto  mt-6 lg:mt-7 flex justify-around ">
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

        <div className="lg:mt-7">

        {tableSelected === 1 && <CatsTable></CatsTable>}
        {tableSelected === 2 && <BreedsTable></BreedsTable>}
        {tableSelected === 3 && <UsersTable></UsersTable>}
        </div>
   
      

      {/* <BreedsTable/> */}
        </div>
        <Footer/>
    </div>
  );
};