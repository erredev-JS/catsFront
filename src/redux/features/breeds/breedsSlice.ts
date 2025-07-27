import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBreed } from "../../../types/IBreed";

interface BreedsState {
  breedsArray: IBreed[];
  activeBreed: IBreed;
}

const initialState: BreedsState = {
  breedsArray: [],
  activeBreed: {
    id: 0,
    name: "",
  },
};

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<IBreed[]>) => {
      state.breedsArray = action.payload;
    },
    setActiveBreed: (state, action: PayloadAction<IBreed>) => {
      state.activeBreed = action.payload;
    },
  },
});

export const { setBreeds, setActiveBreed } = breedsSlice.actions;

export default breedsSlice.reducer;
