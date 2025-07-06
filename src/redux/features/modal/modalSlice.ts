import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  loginIsOpen: boolean;
  registerIsOpen: boolean
}

const initialState: ModalState = {
  loginIsOpen: false,
  registerIsOpen: false
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
  },
});

export const { openModalLogin, closeModalLogin, toggleModalLogin, openModalRegister, closeModalRegister, toggleModalRegister } = modalSlice.actions;

export default modalSlice.reducer