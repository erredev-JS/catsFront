import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalAddCat } from "../../redux/features/modal/modalSlice";
import { getAllBreed } from "../../http/crudBreeds";
import { IBreed } from "../../types/IBreed";

export const AddCatModal = () => {
    
    const isOpen = useSelector((state: RootState) => state.modal.addCatIsOpen)
    if(!isOpen){
      return null
    }

    const [breedsArray, setBreedsArray] = useState<IBreed[]>([])

    const getAllBreeds = async () => {
        const response = await getAllBreed()
        setBreedsArray(response)
    }

    useEffect(() => {
        getAllBreeds()
    }, [])


      const dispatch = useDispatch<AppDispatch>();


    const [formData, setFormData] = useState({
        name: "",
        age: 1,
        breedId: "",
      });

  const handleCloseModal = () => {
    dispatch(closeModalAddCat());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }



  return (
     <div className="border h-[50vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px]">
          <div className="flex w-full justify-between px-5 pt-5 items-center">
            <p className="opacity-0"></p>
            <button className="bg-red-600 w-[33px] h-[33px] rounded text-2xl text-black font-black cursor-pointer hover:bg-red-700" onClick={handleCloseModal}>
              X
            </button>
          </div>
    
          <form action="" className="flex flex-col w-1/2 m-auto gap-6" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl font-bold text-white">Añadir gato</h1>
            <input type="string" className="bg-white border rounded px-4" placeholder="Ingresa el nombre del gato" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input
              type="number"
              className="bg-white border rounded px-4"
              placeholder="Ingresa la edad del gato"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: Number(e.target.value),
                })
              }
            />
           <select className="bg-white border rounded px-4 py-2">
            <option>Selecciona una raza</option>
                {breedsArray.map((breed) => <option value={breed.id}>{breed.name}</option>)}
           </select>
            <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400">Añadir gato</button>
          </form>
        </div>
  )
}
