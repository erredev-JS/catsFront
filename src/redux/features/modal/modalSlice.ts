import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  loginIsOpen: boolean;
  registerIsOpen: boolean;
  addCatIsOpen: boolean;
  editCatIsOpen: boolean;
  addBreedIsOpen: boolean;
  editBreedIsOpen: boolean;
  moreOptionsIsOpen: boolean;
}

const initialState: ModalState = {
  loginIsOpen: false,
  registerIsOpen: false,
  addCatIsOpen: false,
  addBreedIsOpen: false,
  editBreedIsOpen: false,
  editCatIsOpen: false,
  moreOptionsIsOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalLogin: (state) => {
      state.loginIsOpen = true;
    },
    closeModalLogin: (state) => {
      state.loginIsOpen = false;
    },
    toggleModalLogin: (state) => {
      state.loginIsOpen = !state.loginIsOpen;
    },
    openModalRegister: (state) => {
      state.registerIsOpen = true;
    },
    closeModalRegister: (state) => {
      state.registerIsOpen = false;
    },
    toggleModalRegister: (state) => {
      state.registerIsOpen = !state.registerIsOpen;
    },
    openModalAddCat: (state) => {
      state.addCatIsOpen = true;
    },
    closeModalAddCat: (state) => {
      state.addCatIsOpen = false;
    },
    toggleModalAddCat: (state) => {
      state.addCatIsOpen = !state.addCatIsOpen;
    },
    openModalEditCat: (state) => {
      state.editCatIsOpen = true;
    },
    closeModalEditCat: (state) => {
      state.editCatIsOpen = false;
    },
    toggleModalEditCat: (state) => {
      state.editCatIsOpen = !state.editCatIsOpen;
    },
    openModalAddBreed: (state) => {
      state.addBreedIsOpen = true;
    },
    closeModalAddBreed: (state) => {
      state.addBreedIsOpen = false;
    },
    toggleModalAddBreed: (state) => {
      state.addBreedIsOpen = !state.addBreedIsOpen;
    },
    openModalEditBreed: (state) => {
      state.editBreedIsOpen = true;
    },
    closeModalEditBreed: (state) => {
      state.editBreedIsOpen = false;
    },
    toggleModalEditBreed: (state) => {
      state.editBreedIsOpen = !state.editBreedIsOpen;
    },
    openModalMoreOptions: (state) => {
      state.moreOptionsIsOpen = true;
    },
    closeModalMoreOptions: (state) => {
      state.moreOptionsIsOpen = false;
    },
    toggleModalMoreOption: (state) => {
      state.moreOptionsIsOpen = !state.moreOptionsIsOpen;
    },
  },
});

export const { openModalLogin, closeModalLogin, toggleModalLogin, openModalRegister, closeModalRegister, toggleModalRegister, openModalAddCat, closeModalAddCat, toggleModalAddCat, openModalEditCat, closeModalEditCat, toggleModalEditCat, openModalAddBreed, closeModalAddBreed, toggleModalAddBreed, openModalEditBreed, closeModalEditBreed, toggleModalEditBreed, openModalMoreOptions, closeModalMoreOptions, toggleModalMoreOption } = modalSlice.actions;

export default modalSlice.reducer;
