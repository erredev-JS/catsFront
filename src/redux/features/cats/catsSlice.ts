import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../../types/ICat";


interface CatsState {
    catsArray: ICat[]
}

const initialState: CatsState = {
    catsArray: []
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setCats: (state, action: PayloadAction<ICat[]>) => {
            state.catsArray = action.payload
        },
    }
})


export const {
 setCats
} =  catsSlice.actions

export default catsSlice.reducer