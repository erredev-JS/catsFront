import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "../redux/features/modal/modalSlice";
import authReducer from "../redux/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth:  authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
