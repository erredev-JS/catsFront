import { useEffect, useState } from "react";
import { setActiveCat, setCats } from "../../redux/features/cats/catsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { deleteCat, getCatsPaged } from "../../http/crudCats";
import { openModalAddCat, openModalEditCat } from "../../redux/features/modal/modalSlice";
import { ICat } from "../../types/ICat";

export const CatsTable = () => {
  const catsArray = useSelector((state: RootState) => state.cats.catsArray);

  const [pages, setPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const getCats = async () => {
    const response = await getCatsPaged(10, selectedPage);
    dispatch(setCats(response.result));
    setPages(response.totalPages);
  };

  useEffect(() => {
    getCats();
  }, [selectedPage]);

   const handleDeleteCat = async (id: number) => {
            await deleteCat(id)
        }
  const handleOpenModalEditCat = async (cat: ICat) => {
    dispatch(setActiveCat(cat))
    dispatch(openModalEditCat())
  }

  const pageButtons = [];

  for (let i = 1; i <= pages; i++) {
    {
      pageButtons.push(
        <div key={i} className={`border h-7 w-7 text-center text-white font-bold cursor-pointer ${selectedPage === i - 1 ? "bg-blue-600" : "bg-slate-600"}`} onClick={() => setSelectedPage(i - 1)}>
          {i}
        </div>
      );
    }
  }
  return (
      <>
      <div className="relative overflow-x-auto min-h-[400px] max-h-[400px] dark:bg-gray-800 w-9/10 m-auto mt-5">
      <table className="w-full m-auto  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-[3400px]">
          <tr className="">
            <th scope="col" className="px-6 py-3">
              Nombre del gato
            </th>
            <th scope="col" className="px-6 py-3">
              Raza
            </th>
            <th scope="col" className="px-8 py-3 ">
              Edad
            </th>
              <th className="px-6 py-3 text-right">
      <button
        onClick={() => dispatch(openModalAddCat())}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded"
      >
        Añadir
      </button>
    </th>

          </tr>
        </thead>
        <tbody>
          {catsArray.map((cat) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={cat.id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {cat.name}
              </th>
              <td className="px-6 py-4">{cat.breed.name}</td>
              <td className="px-6 py-4">{cat.age}</td>
              <td className="py-4 flex justify-around">
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  <span className="material-symbols-outlined" onClick={() => handleOpenModalEditCat(cat)}>edit</span>
                </button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <span className="material-symbols-outlined" onClick={() => handleDeleteCat(cat.id)}>delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   <div className="flex  gap-6 m-auto w-1/3 justify-center mt-2 z-10">{pageButtons}</div>
    </>
  );
};
