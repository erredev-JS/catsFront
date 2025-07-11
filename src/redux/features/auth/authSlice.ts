import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean
    token: string  | null
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null
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
        }
    }
})

export const {
    setLoggedIn,
    setNotLoggedIn
} = authSlice.actions

export default authSlice.reducer