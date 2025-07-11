import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalAddCat } from "../../redux/features/modal/modalSlice";
import { getAllBreed } from "../../http/crudBreeds";
import { IBreed } from "../../types/IBreed";
import { postCat } from "../../http/crudCats";

export const AddCatModal = () => {
    
    const isOpen = useSelector((state: RootState) => state.modal.addCatIsOpen)  

    const [breedsArray, setBreedsArray] = useState<IBreed[]>([])
    
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        breedId: 0,
      });
      const dispatch = useDispatch<AppDispatch>();
      
      const getAllBreeds = async () => {
        const response = await getAllBreed()
        setBreedsArray(response)
    }

    useEffect(() => {
        getAllBreeds()
    }, [])
    
    
    
      const handleCloseModal = () => {
        dispatch(closeModalAddCat());
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await postCat(formData.name, formData.age, formData.age)
      }
    
      if(!isOpen){
      return null
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
           <select className="bg-white border rounded px-4 py-2" onChange={(e) => formData.breedId = Number(e.target.value)}>
            <option>Selecciona una raza</option>
                {breedsArray.map((breed) => <option value={breed.id} key={breed.id}>{breed.name}</option>)}
           </select>
            <button className="bg-white w-8/10 m-auto rounded font-bold cursor-pointer hover:bg-slate-400" type="submit">Añadir gato</button>
          </form>
        </div>
  )
}
