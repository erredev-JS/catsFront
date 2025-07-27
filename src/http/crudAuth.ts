import axios from "axios";
import { AxiosInterceptor } from "../interceptor/AxiosInterceptor";
import { IProfile } from "../types/IProfile";

const BASE_URL = "https://nest-postgres-api-rest-jwt-cats.onrender.com/auth";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};
export const register = async (email: string, name: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/register`, {
    email: email,
    name: name,
    password: password,
  });
  return response.data;
};


// Para obtener el perfil del usuario

export const getProfile = async (): Promise<IProfile> => {
   const response = await AxiosInterceptor.get(`${BASE_URL}/profile`);
   return response.data;
};
