import axios from "axios";

const BASE_URL = "https://nest-postgres-api-rest-jwt-cats.onrender.com/breeds";


export const getAllBreed = async () => {

    const response = await axios.get(BASE_URL)
    return response.data

}

export const getBreedsPaged = async (pageSelected: number, size: number = 10) => {
  const response = await axios.get(`${BASE_URL}/${size}/${pageSelected}`);
  return response.data
};