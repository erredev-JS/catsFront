import axios from "axios";

import {  store } from "../redux/store";
import Swal from "sweetalert2";
import { setNotLoggedIn } from "../redux/features/auth/authSlice";


export const AxiosInterceptor = axios.create();

// Manejo y creacion de la request con authorization

AxiosInterceptor.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const JWTtoken = state.auth.token;
    if (JWTtoken) {
      config.headers.Authorization = `Bearer ${JWTtoken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Manejo de errores con response.

AxiosInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        Swal.fire({
          icon: "error",
          title: "Error 400",
          text: "Petición incorrecta.",
        });
        break;
      case 401:
        Swal.fire({
          icon: "error",
          title: "Error 401",
          text: "Sesión expirada.",
        });
        store.dispatch(setNotLoggedIn());
        window.location.href = "/"
        break;
      case 403:
        Swal.fire({
          icon: "error",
          title: "Error 403",
          text: "No tienes los permisos para ejecutar esta acción",
        });
    }

    return Promise.reject(error);
  }
);
