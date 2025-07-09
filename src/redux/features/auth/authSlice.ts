import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean
}

const initialState: AuthState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state) => {
            state.isLoggedIn = true
        },
        setNotLoggedIn: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const {
    setLoggedIn,
    setNotLoggedIn
} = authSlice.actions

export default authSlice.reducer