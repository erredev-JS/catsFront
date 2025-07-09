import axios from "axios";

const AxiosInterceptor = axios.create();

AxiosInterceptor.interceptors.request.use(
  (config) => {
    const JWTtoken = localStorage.getItem("token");
    if (JWTtoken) {
      config.headers.Authorization = `Bearer ${JWTtoken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
