import axios from "axios";

import {  store } from "../redux/store";

export const AxiosInterceptor = axios.create();

AxiosInterceptor.interceptors.request.use(
  (config) => {
    const state = store.getState()
    const JWTtoken = state.auth.token;
    if (JWTtoken) {
      config.headers.Authorization = `Bearer ${JWTtoken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
