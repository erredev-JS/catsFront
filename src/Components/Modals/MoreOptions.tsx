import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeModalMoreOptions, openModalEditCat } from "../../redux/features/modal/modalSlice";
import { deleteCat } from "../../http/crudCats";
import { setActiveCat } from "../../redux/features/cats/catsSlice";
import { ICat } from "../../types/ICat";

export const MoreOptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeCat = useSelector((state: RootState) => state.cats.activeCat);
  const handleCloseModal = () => {
    dispatch(closeModalMoreOptions());
  };

  const handleDeleteCat = async () => {
    if (activeCat) {
      await deleteCat(activeCat.id);
    }
  };

  const handleOpenModalEditCat = async (cat: ICat) => {
      dispatch(setActiveCat(cat))
      dispatch(openModalEditCat())
    }
  const isOpen = useSelector((state: RootState) => state.modal.moreOptionsIsOpen);

  if (!isOpen) return null;

  return (
    <div className="bg-black/90 fixed inset-0   z-10">
      <div className="border h-[40vh] w-8/10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-700 max-w-[530px] min-h-[330px]">
        <span className="material-symbols-outlined text-white absolute right-4 top-2 cursor-pointer scale-145 z-10" onClick={handleCloseModal}>
          close
        </span>
        <div className="flex flex-col text-center text-white gap-3 mt-8 h-8/10 w-8/10 m-auto justify-center ">
          <div className="border bg-slate-400 font-bold hover:scale-105 hover:bg-slate-600 transition text-amber-300 cursor-pointer h-1/3 flex items-center justify-center" onClick={() => {
            if(activeCat){
              handleOpenModalEditCat(activeCat)

            }}
            }>Editar</div>
          <div className="border bg-slate-400 font-bold hover:scale-105 hover:bg-slate-600 transition text-red-500 cursor-pointer h-1/3 flex items-center justify-center" onClick={handleDeleteCat}>
            Eliminar
          </div>
        </div>
      </div>
    </div>
  );
};
