import { useDispatch, useSelector } from "react-redux";
import { IBreed } from "../../types/IBreed";
import { FormEvent, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllBreed } from "../../http/crudBreeds";
import Swal from "sweetalert2";
import { closeModalEditCat } from "../../redux/features/modal/modalSlice";

export const EditCatModal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.editCatIsOpen);
  const activeCat = useSelector((state: RootState) => state.cats.activeCat);
  const [breedsArray, setBreedsArray] = useState<IBreed[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    breedId: 0,
  });

  useEffect(() => {
  if (activeCat) {
    setFormData({
      name: activeCat.name,
      age: activeCat.age,
      breedId: activeCat.breed.id,
    });
  }
}, [activeCat]);
  const dispatch = useDispatch<AppDispatch>();

  const getAllBreeds = async () => {
    const response = await getAllBreed();
    setBreedsArray(response);
  };

  useEffect(() => {
    getAllBreeds();
  }, []);

  const handleCloseModal = () => {
    dispatch(closeModalEditCat());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await postCat(formData.name, formData.age, formData.breedId);
    // const updatedCats = await getAllCats();
    // dispatch(setCats(updatedCats));
    Swal.fire({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: "success",
      title: "Gatito añadido",
      text: "Gatito añadido exitosamente",
    });
    dispatch(closeModalEditCat());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black/90 fixed inset-0   z-10">
      <div className="border h-[50vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px] z-50">
        <div className="flex w-full justify-between px-5 pt-5 items-center">
          <p className="opacity-0"></p>
          <button className="bg-red-600 w-[33px] h-[33px] rounded text-2xl text-black font-black cursor-pointer hover:bg-red-700" onClick={handleCloseModal}>
            X
          </button>
        </div>

        <form action="" className="flex flex-col w-1/2 m-auto gap-6" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl font-bold text-white">Editar gato</h1>
          <input type="string" className="bg-white border rounded px-4" placeholder="Ingresa el nombre del gato"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input
            type="number"
            className="bg-white border rounded px-4"
            placeholder="Ingresa la edad del gato"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: Number(e.target.value),
              })
            }
          />
          <select className="bg-white border rounded px-4 py-2" onChange={(e) => (formData.breedId = Number(e.target.value))}>
            <option value={activeCat?.breed.id}>{activeCat?.breed.name}</option>
            {breedsArray.map((breed) => (
              <option value={breed.id} key={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
          <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400" type="submit">
            Actualizar gato
          </button>
        </form>
      </div>
    </div>
  );
};
