import { useDispatch, useSelector } from 'react-redux';
import style from './AddBreedModal.module.css'
import { AppDispatch, RootState } from '../../redux/store';
import { FormEvent, useEffect, useState } from 'react';
import { closeModalAddBreed, closeModalEditBreed } from '../../redux/features/modal/modalSlice';
import { getAllBreed, getBreedsPaged, postBreed, updateBreed } from '../../http/crudBreeds';
import Swal from 'sweetalert2';
import { setBreeds } from '../../redux/features/breeds/breedsSlice';
export const EditBreedModal = () => {
   const isOpen = useSelector((state: RootState) => state.modal.editBreedIsOpen);
   const activeBreed = useSelector((state: RootState) => state.breeds.activeBreed);

  const [breedName, setBreedName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setBreedName(activeBreed.name)
  }, [activeBreed])
 
 
  const handleCloseModal = () => {
    dispatch(closeModalEditBreed());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateBreed(activeBreed.id, breedName);
    const response = await getBreedsPaged(0, 10);
     dispatch(setBreeds(response.result));
    Swal.fire({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: "success",
      title: "Raza actualizada",
      text: "Raza actualizada exitosamente",
    });
    dispatch(closeModalEditBreed());
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

      <form action="" className="flex flex-col w-1/2 m-auto gap-6 justify-center" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold text-white mt-6">Editar raza</h1>
        <input type="text" className="bg-white border rounded px-4" value={breedName} placeholder="Ingresa el nombre del gato" onChange={(e) => setBreedName(e.target.value)} />
        

        <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400" type="submit">
          Editar
        </button>
      </form>
    </div>
    </div>
  );
};