import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "../redux/features/modal/modalSlice";
import authReducer from "../redux/features/auth/authSlice";
import catsReducer from "../redux/features/cats/catsSlice";
import breedsReducer from "../redux/features/breeds/breedsSlice";
import usersReducer from "../redux/features/users/usersSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  cats: catsReducer,
  breeds: breedsReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
