import axios from "axios"
import { AxiosInterceptor } from "../interceptor/AxiosInterceptor"

const BASE_URL = 'https://nest-postgres-api-rest-jwt-cats.onrender.com/cats'


export const getAllCats = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}

export const getOwnCats = async () => {
    const response = await AxiosInterceptor.get(`${BASE_URL}/ownCats`)
    return response.data
}

export const postCat = async (name: string, age: number, breedId: number) => {
  try {
    const response = await AxiosInterceptor.post(BASE_URL, {
      name,
      age,
      breedId,
    });
    return response.data;
  } catch (error: any) {
    console.error("Error al postear el gato:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteCat = async (id: number) => {
  try {
    const response = await AxiosInterceptor.delete(`${BASE_URL}/${id}`)
    return response.data
  } catch (error: any) {
      console.error("Error al eliminar el gato:", error.response?.data || error.message);
    throw error;
  }
}