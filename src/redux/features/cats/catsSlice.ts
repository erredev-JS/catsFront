import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../../types/ICat";

interface CatsState {
  catsArray: ICat[];
  activeCat: ICat;
}

const initialState: CatsState = {
  catsArray: [],
  activeCat: {
    id: 0,
    name: "",
    age: 0,
    breed: {
      id: 0,
      name: "",
    },
    userEmail: "",
  },
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCats: (state, action: PayloadAction<ICat[]>) => {
      state.catsArray = action.payload;
    },
    setActiveCat: (state, action: PayloadAction<ICat>) => {
      state.activeCat = action.payload;
    },
  },
});

export const { setCats, setActiveCat } = catsSlice.actions;

export default catsSlice.reducer;
