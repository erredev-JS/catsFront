import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  loginIsOpen: boolean;
  registerIsOpen: boolean;
  addCatIsOpen: boolean;
  editCatIsOpen: boolean;
  moreOptionsIsOpen: boolean;
}

const initialState: ModalState = {
  loginIsOpen: false,
  registerIsOpen: false,
  addCatIsOpen: false,
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
      state.addCatIsOpen = true
    },
    closeModalAddCat: (state) => {
      state.addCatIsOpen = false
    },
    toggleModalAddCat: (state) => {
      state.addCatIsOpen = !state.addCatIsOpen
    },
    openModalMoreOptions: (state) => {
      state.moreOptionsIsOpen = true
    },
    closeModalMoreOptions: (state) => {
      state.moreOptionsIsOpen = false
    },
    toggleModalMoreOption: (state) => {
      state.moreOptionsIsOpen = !state.moreOptionsIsOpen
    },
    openModalEditCat: (state) => {
      state.editCatIsOpen = true
    },
    closeModalEditCat: (state) => {
      state.editCatIsOpen = false
    },
    toggleModalEditCat: (state) => {
      state.editCatIsOpen = !state.editCatIsOpen
    }
  },
});

export const { openModalLogin, closeModalLogin, toggleModalLogin, openModalRegister, closeModalRegister, toggleModalRegister, closeModalAddCat,  openModalAddCat, toggleModalAddCat, closeModalMoreOptions, openModalMoreOptions, toggleModalMoreOption, closeModalEditCat, openModalEditCat, toggleModalEditCat} = modalSlice.actions;

export default modalSlice.reducer;
