import { Header } from "../Components/Ui/Header/Header";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Profile = () => {

    const profile = useSelector((state: RootState) => state.auth.profile)


  return (
    <>
      <Header />
      <div>
        <h1 className="text-center text-3xl font-black">Mi perfil de Cattlify</h1>
        <div className="flex flex-col flex-wrap w-8/10 m-auto gap-5">
            <p className="text-3xl">
            ID de Usuario: <br /> {profile?.id}
            </p>
            <p className="text-3xl">
            Email: <br /> {profile?.email}
            </p>
            <p className="text-3xl">
            Nombre: <br /> {profile?.name}
            </p>
            <p className="text-3xl">
            Rol: <br /> {profile?.role}
            </p>
        </div>
      </div>
    </>
  );
};
