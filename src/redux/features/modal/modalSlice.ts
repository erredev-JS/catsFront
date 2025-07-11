import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  loginIsOpen: boolean;
  registerIsOpen: boolean;
  addCatIsOpen: boolean;
}

const initialState: ModalState = {
  loginIsOpen: false,
  registerIsOpen: false,
  addCatIsOpen: false,
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
    }
  },
});

export const { openModalLogin, closeModalLogin, toggleModalLogin, openModalRegister, closeModalRegister, toggleModalRegister, closeModalAddCat,  openModalAddCat, toggleModalAddCat} = modalSlice.actions;

export default modalSlice.reducer;
