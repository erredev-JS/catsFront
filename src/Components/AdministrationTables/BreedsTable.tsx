import {  useEffect, useState } from "react";
import { IBreed } from "../../types/IBreed";
import { getAllBreed } from "../../http/crudBreeds";


export const BreedsTable = () => {

    const [breedsArray, setBreedsArray] = useState<IBreed[]>([]);

 


  const getAllBreeds = async () => {
    const response = await getAllBreed();
    setBreedsArray(response);
  };
  useEffect(() => {
    getAllBreeds()
  }, [])
  return (
    <div className="relative overflow-x-auto min-h-[400px] dark:bg-gray-800 w-9/10 m-auto mt-5">
      <table className="w-full m-auto  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre de la raza
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {breedsArray.map((breed) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4">{breed.id}</td>
              <td className="px-6 py-4">{breed.name}</td>
              <td className="px-6 py-4 flex justify-around">
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
