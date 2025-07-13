import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "../../../types/IProfile";

interface AuthState {
    isLoggedIn: boolean
    token: string  | null
    profile: IProfile | null
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    profile: null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true
            state.token = action.payload
        },
        setNotLoggedIn: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.profile = null
        },
        setProfile: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload
        },
        clearProfile: (state) => {
            state.profile = null
        }
    }
})

export const {
    setLoggedIn,
    setNotLoggedIn,
    clearProfile,
    setProfile
} = authSlice.actions

export default authSlice.reducer