import { Header } from "../Components/Ui/Header/Header";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Footer } from "../Components/Footer/Footer";

export const Profile = () => {

    const profile = useSelector((state: RootState) => state.auth.profile)


  return (
    <>
      <Header />
      <div>
        <h1 className="text-center text-3xl  mt-4 font-black">Mi perfil de Cattlify</h1>
        <div className="flex bg-slate-700 text-white flex-col shadow-2xl flex-wrap w-8/10 m-auto gap-5 border rounded-2xl p-4 text-center mt-16">
            <p className="text-3xl">
            ID de Usuario:  {profile?.id}
            </p>
            <p className="text-3xl">
            Email:  {profile?.email}
            </p>
            <p className="text-3xl">
            Nombre:  {profile?.name}
            </p>
            <p className="text-3xl">
            Rol:  {profile?.role}
            </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};
